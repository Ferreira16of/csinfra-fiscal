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
//    { "action": "invite" | "resend" | "revoke" | "delete" | "notify" | "mail_status",
//      "email": "pessoa@empresa.com", "name": "Nome", "role": "normal", "team_id": null }
// =====================================================================
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { SMTPClient } from 'https://deno.land/x/denomailer@1.6.0/mod.ts'

const SITE_URL = Deno.env.get('SITE_URL') ?? 'https://csinfra-fiscal.vercel.app'
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}
const ROLES = ['admin', 'normal', 'limited', 'guest']

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } })


// ---------------------------------------------------------------------
//  Avisar por e-mail: monta o e-mail NO SERVIDOR a partir dos dados da tarefa
//  (o navegador só escolhe as pessoas e o recado) e envia por SMTP.
//  Segredos necessários (Edge Functions → Secrets):
//  Opção A (mais simples, recomendada) — Resend (resend.com):
//    RESEND_API_KEY  (chave da API)    MAIL_FROM  (ex.: CS Infra <avisos@seudominio.com.br>, domínio verificado no Resend)
//  Opção B — SMTP (Gmail com senha de app, Outlook, etc.):
//    SMTP_USER  SMTP_PASS  SMTP_HOST (padrão smtp.gmail.com)  SMTP_PORT (padrão 465)  SMTP_FROM (ex.: CS Infra <seu.gmail@gmail.com>)
//  O e-mail sai SEMPRE do endereço configurado aqui (não do e-mail de quem clicou); quem clicou vai em "responder para".
// ---------------------------------------------------------------------
const ST_LABEL: Record<string, string> = { todo: 'A fazer', doing: 'Em andamento', review: 'Em revisão', blocked: 'Impedido', done: 'Concluído' }
const PR_LABEL: Record<number, string> = { 1: 'Baixa', 2: 'Média', 3: 'Alta' }
const esc = (s: unknown) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))
const nl2br = (s: string) => esc(s).replace(/\r?\n/g, '<br>')
const fmtDate = (d?: string | null) => (d ? d.split('-').reverse().join('/') : '')

function mailProvider(): { kind: 'resend' | 'smtp' | null; from: string } {
  const rk = Deno.env.get('RESEND_API_KEY'), mf = Deno.env.get('MAIL_FROM') ?? Deno.env.get('SMTP_FROM')
  if (rk && mf) return { kind: 'resend', from: mf }
  const u = Deno.env.get('SMTP_USER'), p = Deno.env.get('SMTP_PASS')
  if (u && p) return { kind: 'smtp', from: Deno.env.get('SMTP_FROM') ?? u }
  return { kind: null, from: '' }
}
async function sendMails(list: { to: string; subject: string; text: string; html: string; replyTo?: string }[]) {
  const pv = mailProvider()
  if (pv.kind === 'resend') {
    for (const m of list) {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST', headers: { Authorization: 'Bearer ' + Deno.env.get('RESEND_API_KEY'), 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: pv.from, to: [m.to], reply_to: m.replyTo, subject: m.subject, html: m.html, text: m.text }),
      })
      if (!r.ok) { let d = ''; try { d = (await r.json()).message ?? '' } catch { /* */ } throw new Error(d || ('Resend respondeu ' + r.status)) }
    }
    return
  }
  const port = Number(Deno.env.get('SMTP_PORT') ?? 465)
  const client = new SMTPClient({ connection: { hostname: Deno.env.get('SMTP_HOST') ?? 'smtp.gmail.com', port, tls: port === 465, auth: { username: Deno.env.get('SMTP_USER')!, password: Deno.env.get('SMTP_PASS')! } } })
  try {
    for (const m of list) await client.send({ from: pv.from, to: m.to, replyTo: m.replyTo, subject: m.subject, content: m.text, html: m.html })
  } finally { try { await client.close() } catch { /* ignore */ } }
}

async function mailStatus({ me, body }: any) {
  const pv = mailProvider()
  if (body.test) {
    if (me.role !== 'admin') return json({ error: 'Só administradores enviam o teste.' }, 403)
    if (!pv.kind) return json({ error: 'smtp_not_configured' }, 501)
    if (!me.email) return json({ error: 'Seu cadastro não tem e-mail.' }, 400)
    try {
      await sendMails([{ to: me.email, subject: 'Teste de envio — CS Infra', text: 'Se você recebeu esta mensagem, o envio de e-mails pelo sistema está funcionando.', html: '<p style="font-family:Segoe UI,Arial,sans-serif">Se você recebeu esta mensagem, o <b>envio de e-mails pelo sistema</b> está funcionando. ✅</p>' }])
    } catch (e) { return json({ error: 'Não foi possível enviar: ' + (e as Error).message }, 502) }
    return json({ ok: true, provider: pv.kind, from: pv.from, message: 'E-mail de teste enviado para ' + me.email })
  }
  return json({ ok: true, provider: pv.kind, from: pv.from })
}

async function notifyByEmail({ asUser, admin, me, body }: any) {
  const taskId = String(body.task_id ?? '')
  const memberIds: string[] = Array.isArray(body.member_ids) ? body.member_ids.slice(0, 20).map(String) : []
  if (!taskId || !memberIds.length) return json({ error: 'Escolha ao menos uma pessoa.' }, 400)

  if (!mailProvider().kind) return json({ error: 'smtp_not_configured' }, 501)

  // quem chama precisa poder editar a tarefa (regras do banco)
  const { data: allowed } = await asUser.rpc('can_edit_task', { p_task: taskId })
  if (!allowed) return json({ error: 'Seu perfil não pode enviar avisos desta tarefa.' }, 403)

  const { data: task } = await admin.from('tasks').select('*').eq('id', taskId).maybeSingle()
  if (!task) return json({ error: 'Tarefa não encontrada.' }, 404)
  const { data: proj } = await admin.from('projects').select('name').eq('id', task.project_id).maybeSingle()
  const { data: rcpt } = await admin.from('members').select('id, name, email').in('id', memberIds)
  const to = (rcpt ?? []).filter((m: any) => m.email)
  if (!to.length) return json({ error: 'Ninguém com e-mail entre os escolhidos.' }, 400)

  const wantDet = body.details !== false, wantCom = body.comments === true, wantImg = body.images === true
  const note = String(body.note ?? '').slice(0, 2000)
  const subject = String(body.subject ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, 150) || ('Tarefa: ' + task.title)

  const { data: asg } = await admin.from('task_assignees').select('member_id').eq('task_id', taskId)
  const { data: owners } = asg?.length ? await admin.from('members').select('name').in('id', asg.map((a: any) => a.member_id)) : { data: [] }
  const { data: tgs } = await admin.from('task_tags').select('tag_id').eq('task_id', taskId)
  const { data: tagRows } = tgs?.length ? await admin.from('tags').select('name').in('id', tgs.map((t: any) => t.tag_id)) : { data: [] }
  const { data: cms } = wantCom ? await admin.from('comments').select('author_name, body, created_at').eq('task_id', taskId).order('created_at', { ascending: true }).limit(30) : { data: [] }

  let imgUrls: { n: string; u: string }[] = []
  if (wantImg && Array.isArray(task.attachments) && task.attachments.length) {
    const paths = task.attachments.map((g: any) => g.p)
    const { data: signed } = await admin.storage.from('task-images').createSignedUrls(paths, 60 * 60 * 24 * 7)
    imgUrls = (signed ?? []).map((s: any, i: number) => ({ n: task.attachments[i]?.n ?? 'imagem', u: s.signedUrl })).filter((x: any) => x.u)
  }

  const site = (Deno.env.get('SITE_URL') ?? SITE_URL).replace(/\/$/, '')
  const link = site + '/t/' + encodeURIComponent(taskId)
  const row = (k: string, v: string) => v ? `<tr><td style="padding:4px 14px 4px 0;color:#667085;font-size:13px;white-space:nowrap">${k}</td><td style="padding:4px 0;font-size:14px;color:#101828">${v}</td></tr>` : ''
  const rows = wantDet
    ? row('Projeto', esc(proj?.name)) + row('Status', esc(ST_LABEL[task.status] ?? task.status)) + row('Prioridade', esc(PR_LABEL[task.priority] ?? ''))
      + row('Prazo', esc([fmtDate(task.due_date), task.due_time ? task.due_time.slice(0, 5) : ''].filter(Boolean).join(' às ')))
      + row('Responsáveis', esc((owners ?? []).map((o: any) => o.name).join(', '))) + row('Etiquetas', esc((tagRows ?? []).map((t: any) => t.name).join(', ')))
    : row('Projeto', esc(proj?.name))
  const html = `<div style="background:#f5f6f8;padding:24px 12px;font-family:Segoe UI,Arial,sans-serif"><div style="max-width:600px;margin:auto;background:#fff;border:1px solid #e4e7ec;border-radius:14px;overflow:hidden">
  <div style="padding:18px 24px;border-bottom:1px solid #e4e7ec;font-weight:700;color:#0e7a6e">CS Infra · Controle de Tarefas</div>
  <div style="padding:22px 24px">
   ${note ? `<p style="margin:0 0 18px;font-size:15px;line-height:1.55;color:#101828">${nl2br(note)}</p><p style="margin:0 0 14px;font-size:12px;color:#667085">— ${esc(me.name)}</p>` : `<p style="margin:0 0 14px;font-size:12px;color:#667085">${esc(me.name)} avisou você sobre esta tarefa.</p>`}
   <h2 style="margin:0 0 12px;font-size:20px;color:#101828">${esc(task.title)}</h2>
   <table style="border-collapse:collapse;margin-bottom:6px">${rows}</table>
   ${wantDet && task.description ? `<div style="margin:14px 0;padding:14px;background:#f8f9fb;border-radius:10px;font-size:14px;line-height:1.55;color:#344054">${nl2br(task.description)}</div>` : ''}
   ${imgUrls.length ? `<div style="margin:14px 0">${imgUrls.map((g) => `<a href="${esc(g.u)}"><img src="${esc(g.u)}" alt="${esc(g.n)}" style="max-width:100%;border-radius:10px;border:1px solid #e4e7ec;margin:0 0 10px;display:block"></a>`).join('')}</div>` : ''}
   ${(cms ?? []).length ? `<h3 style="margin:20px 0 8px;font-size:14px;color:#101828">Comentários</h3>${(cms ?? []).map((c: any) => `<div style="padding:10px 12px;background:#f8f9fb;border-radius:10px;margin-bottom:8px;font-size:13.5px;color:#344054"><b>${esc(c.author_name || 'Alguém')}</b> <span style="color:#98a2b3;font-size:12px">${new Date(c.created_at).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short', timeZone: 'America/Sao_Paulo' })}</span><br>${nl2br(c.body)}</div>`).join('')}` : ''}
   <p style="text-align:center;margin:24px 0 4px"><a href="${esc(link)}" style="background:#0e7a6e;color:#fff;text-decoration:none;font-weight:600;padding:12px 24px;border-radius:10px;display:inline-block">Abrir tarefa no sistema</a></p>
  </div></div></div>`
  const text = [note, 'Tarefa: ' + task.title, 'Projeto: ' + (proj?.name ?? ''), wantDet ? 'Status: ' + (ST_LABEL[task.status] ?? task.status) : '', wantDet && task.description ? '\n' + task.description : '',
    (cms ?? []).length ? '\nComentários:\n' + (cms ?? []).map((c: any) => `- ${c.author_name || 'Alguém'}: ${c.body}`).join('\n') : '', '\nAbrir: ' + link].filter(Boolean).join('\n')

  try {
    await sendMails(to.map((r: any) => ({ to: r.email, subject, text, html, replyTo: me.email ?? undefined })))
  } catch (e) {
    return json({ error: 'Não foi possível enviar: ' + (e as Error).message }, 502)
  }
  return json({ ok: true, sent: to.length, message: 'E-mail enviado para ' + to.length + ' pessoa(s).' })
}

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

  // 2) quem é (membro ativo)
  const admin = createClient(url, service, { auth: { autoRefreshToken: false, persistSession: false } })
  const { data: me } = await admin
    .from('members').select('id, name, email, role, status, access_enabled')
    .eq('user_id', userData.user.id).maybeSingle()
  if (!me || !me.access_enabled || me.status === 'blocked') return json({ error: 'Sem acesso ao sistema.' }, 403)

  // 3) entrada
  let body: any
  try { body = await req.json() } catch { return json({ error: 'JSON inválido.' }, 400) }
  const action = String(body.action ?? 'invite')

  // ---- avisar por e-mail (qualquer perfil que possa editar a tarefa) ----
  if (action === 'notify') return await notifyByEmail({ asUser, admin, me, body })
  if (action === 'mail_status') return await mailStatus({ me, body })

  // ---- gestão de convites: somente administrador ----
  if (me.role !== 'admin' && me.role !== 'normal') return json({ error: 'Seu perfil não pode gerenciar convites.' }, 403)
  const email = String(body.email ?? '').trim().toLowerCase()
  const name = String(body.name ?? '').trim()
  const role = String(body.role ?? 'normal')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json({ error: 'E-mail inválido.' }, 400)
  if (!ROLES.includes(role)) return json({ error: 'Perfil inválido.' }, 400)
  if (me.role !== 'admin' && (action === 'revoke' || action === 'delete')) return json({ error: 'Só administradores bloqueiam ou removem pessoas.' }, 403)
  if (me.role !== 'admin') {
    // perfil Normal: nunca cria administradores nem mexe em administradores / em si mesmo
    if (role === 'admin') return json({ error: 'Só administradores criam administradores.' }, 403)
    const { data: tgt0 } = await admin.from('members').select('id, role').ilike('email', email).maybeSingle()
    if (tgt0 && (tgt0.role === 'admin' || tgt0.id === me.id)) return json({ error: 'Só administradores gerenciam administradores (e você não pode alterar a si mesmo).' }, 403)
  }

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
    // 4a-2) projetos escolhidos no convite: a pessoa passa a ver SÓ esses (nenhum marcado = nenhum projeto; ela cria os dela)
    if (action === 'invite' && role !== 'admin' && body.projects_only === true) {
      const { data: tgt } = await admin.from('members').select('id').ilike('email', email).maybeSingle()
      if (tgt) {
        await admin.from('members').update({ projects_only: true }).eq('id', tgt.id)
        const ids: string[] = Array.isArray(body.project_ids) ? body.project_ids.map(String).slice(0, 200) : []
        if (ids.length) {
          let { data: okp } = await admin.from('projects').select('id').in('id', ids)
          if (me.role !== 'admin') {
            // perfil Normal só inclui a pessoa em projetos que ele mesmo enxerga
            const keep: any[] = []
            for (const p of okp ?? []) { const { data: v } = await asUser.rpc('can_see_project', { p_proj: p.id }); if (v) keep.push(p) }
            okp = keep
          }
          const rows = (okp ?? []).map((p: any) => ({ project_id: p.id, member_id: tgt.id }))
          if (rows.length) await admin.from('project_access').upsert(rows, { onConflict: 'project_id,member_id', ignoreDuplicates: true })
        }
      }
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
