// =====================================================================
//  Edge Function: invite-user
//  Permite que um ADMINISTRADOR do sistema convide, reenvie convite ou
//  revogue o acesso de alguém — usando o sistema de convites do Supabase Auth.
//  A chave service_role fica só aqui (servidor); nunca vai para o navegador.
//
//  Como publicar: Supabase → Edge Functions → Deploy a new function →
//  nome "invite-user" → cole este arquivo → Deploy.  (Deixe "Verify JWT" ligado.)
//
//  Chamada (o app fará isso):
//    POST {SUPABASE_URL}/functions/v1/invite-user
//    Authorization: Bearer <token do usuário logado>
//    { "action": "invite" | "resend" | "revoke" | "delete",
//      "email": "pessoa@empresa.com", "name": "Nome", "role": "normal", "team_id": null }
// =====================================================================
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SITE_URL = Deno.env.get('SITE_URL') ?? 'https://csinfra-fiscal.vercel.app'
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
const ROLES = ['admin', 'normal', 'limited', 'guest']

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } })

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })
  if (req.method !== 'POST') return json({ error: 'Use POST.' }, 405)

  const url = Deno.env.get('SUPABASE_URL')!
  const anon = Deno.env.get('SUPABASE_ANON_KEY')!
  const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

  // 1) quem está chamando?
  const authHeader = req.headers.get('Authorization') ?? ''
  const asUser = createClient(url, anon, { global: { headers: { Authorization: authHeader } } })
  const { data: userData, error: userErr } = await asUser.auth.getUser()
  if (userErr || !userData?.user) return json({ error: 'Sessão inválida. Entre novamente.' }, 401)

  // 2) é administrador ativo?
  const admin = createClient(url, service, { auth: { autoRefreshToken: false, persistSession: false } })
  const { data: me } = await admin
    .from('members').select('id, role, status, access_enabled')
    .eq('user_id', userData.user.id).maybeSingle()
  if (!me || me.role !== 'admin' || !me.access_enabled || me.status === 'blocked') {
    return json({ error: 'Somente administradores podem gerenciar convites.' }, 403)
  }

  // 3) entrada
  let body: any
  try { body = await req.json() } catch { return json({ error: 'JSON inválido.' }, 400) }
  const action = String(body.action ?? 'invite')
  const email = String(body.email ?? '').trim().toLowerCase()
  const name = String(body.name ?? '').trim()
  const role = String(body.role ?? 'normal')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json({ error: 'E-mail inválido.' }, 400)
  if (!ROLES.includes(role)) return json({ error: 'Perfil inválido.' }, 400)

  // 4) ações
  if (action === 'invite' || action === 'resend') {
    // 4a) autoriza o e-mail na tabela members (o portão do banco exige isso)
    const { data: existing } = await admin.from('members').select('id, role').ilike('email', email).maybeSingle()
    if (existing) {
      await admin.from('members').update({
        access_enabled: true,
        status: 'invited',
        ...(action === 'invite' ? { role, name: name || undefined, team_id: body.team_id ?? null } : {}),
      }).eq('id', existing.id)
    } else {
      const { error: insErr } = await admin.from('members').insert({
        name: name || email.split('@')[0], email, role, status: 'invited', access_enabled: true, team_id: body.team_id ?? null,
      })
      if (insErr) return json({ error: insErr.message }, 400)
    }
    // 4b) envia o convite pelo Supabase Auth
    const { error: invErr } = await admin.auth.admin.inviteUserByEmail(email, {
      data: { name: name || undefined, role },
      redirectTo: SITE_URL,
    })
    if (invErr) {
      const already = /already|registered|exists/i.test(invErr.message)
      return json({
        error: already
          ? 'Esta pessoa já ativou o convite. Se esqueceu a senha, use “Esqueci minha senha” na tela de login.'
          : invErr.message,
      }, already ? 409 : 400)
    }
    return json({ ok: true, message: 'Convite enviado para ' + email })
  }

  if (action === 'revoke') {
    const { data: target } = await admin.from('members').select('id, user_id').ilike('email', email).maybeSingle()
    if (!target) return json({ error: 'Membro não encontrado.' }, 404)
    // o banco recusa se este for o último administrador
    const { error: upErr } = await admin.from('members')
      .update({ status: 'blocked', access_enabled: false }).eq('id', target.id)
    if (upErr) return json({ error: upErr.message }, 400)
    if (target.user_id) await admin.auth.admin.deleteUser(target.user_id)  // derruba as sessões
    return json({ ok: true, message: 'Acesso de ' + email + ' revogado.' })
  }

  if (action === 'delete') {
    // Exclui a pessoa do sistema E do login (Authentication → Users)
    const { data: target } = await admin.from('members').select('id, user_id').ilike('email', email).maybeSingle()
    if (target && target.id === me.id) return json({ error: 'Você não pode excluir a si mesmo.' }, 400)
    let uid: string | null = target?.user_id ?? null
    if (target) {
      // o banco recusa se este for o último administrador
      const { error: delErr } = await admin.from('members').delete().eq('id', target.id)
      if (delErr) return json({ error: delErr.message }, 400)
    }
    if (!uid) {
      for (let page = 1; page <= 20 && !uid; page++) {
        const { data } = await admin.auth.admin.listUsers({ page, perPage: 200 })
        const u = data?.users?.find((x: any) => (x.email ?? '').toLowerCase() === email)
        if (u) uid = u.id
        if (!data?.users?.length || data.users.length < 200) break
      }
    }
    if (uid) await admin.auth.admin.deleteUser(uid)
    return json({ ok: true, message: email + ' foi removido(a) do sistema e do login.' })
  }

  return json({ error: 'Ação desconhecida.' }, 400)
})
