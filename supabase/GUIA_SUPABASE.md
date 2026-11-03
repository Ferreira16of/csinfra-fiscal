# Guia — Banco de dados Supabase com cadastro SOMENTE por convite

Tempo estimado: 20–30 minutos. Você só precisa de um navegador e do e-mail que será o administrador.

## Visão geral (como a segurança funciona)

Três travas, uma por cima da outra:

1. **Cadastro público desligado** no Supabase Auth — ninguém consegue se registrar sozinho.
2. **Portão no banco** (`auth_gate`): mesmo que alguém burle a etapa 1, o banco recusa qualquer e-mail que **você** não tenha autorizado na tabela `members`.
3. **Perfis no banco (RLS)**: Administrador, Normal, Limitado e Convidado valem no servidor, não só na tela. Um usuário Limitado não consegue editar tarefa alheia nem chamando a API direto.

Fluxo de um novo usuário: **você autoriza o e-mail → Supabase envia o convite → a pessoa clica no botão do e-mail (ou digita o código) e cria a senha → entra com e-mail e senha**.

---

## Parte A — Criar o projeto

1. Acesse https://supabase.com → **Start your project** → entre com GitHub ou e-mail.
2. **New project**:
   - **Name:** `controle-tarefas`
   - **Database Password:** gere uma senha forte e **guarde** (gerenciador de senhas).
   - **Region:** *South America (São Paulo)*.
   - Plano **Free** serve para começar.
3. Aguarde ~2 minutos até o projeto ficar pronto.

## Parte B — Criar as tabelas e regras

1. Menu **SQL Editor** → **New query**.
2. Abra o arquivo `supabase_setup.sql`, copie **tudo** e cole.
3. Clique **Run**. Deve aparecer *Success*. (Pode rodar de novo sem medo: não apaga dados.)

## Parte C — Cadastro só por convite

### C1. Desligar o cadastro público
**Authentication → Sign In / Providers → Email** (em algumas versões: *Providers → Email*):
- Desligue **Allow new users to sign up** (“Permitir novos usuários se cadastrarem”).
- Mantenha **Confirm email** ligado.

### C2. Servidor de e-mail (SMTP) — importante
O envio embutido do Supabase é muito limitado e costuma entregar apenas para membros da sua própria organização no Supabase. Para convidar outras pessoas:
**Authentication → Emails → SMTP Settings → Enable custom SMTP** e preencha com um provedor (Resend, Brevo, Amazon SES, Gmail/Google Workspace com senha de app…). Use um remetente do seu domínio, por exemplo `no-reply@csinfra.com.br`.

### C3. Modelos de e-mail com BOTÃO DE LINK (+ código de reserva)
O e-mail precisa levar um **link de confirmação**. Os modelos abaixo trazem um botão que abre o sistema já validando o convite; o código fica como alternativa. **Authentication → Emails → Templates**

**Invite user** — Assunto: `Você foi convidado(a) para o Controle de Tarefas`
```html
<div style="font-family:Segoe UI,Arial,sans-serif;max-width:480px;margin:auto;color:#1a2335">
  <h2>Convite — Controle de Tarefas</h2>
  <p>Olá! Você foi autorizado(a) a acessar o sistema da CS Infra.</p>
  <p style="text-align:center;margin:26px 0">
    <a href="{{ .SiteURL }}/?token_hash={{ .TokenHash }}&type=invite&email={{ .Email }}"
       style="background:#5b8cff;color:#fff;text-decoration:none;font-weight:600;padding:13px 26px;border-radius:10px;display:inline-block">Aceitar convite e criar senha</a>
  </p>
  <p style="color:#667085;font-size:13px">Se o botão não abrir, entre no sistema, escolha <b>“Ativar convite”</b> e use o código:</p>
  <p style="font-size:24px;font-weight:700;letter-spacing:6px;background:#f1f4f9;padding:10px;text-align:center;border-radius:10px">{{ .Token }}</p>
  <p style="color:#667085;font-size:13px">O convite expira em 24 horas. Se você não esperava, ignore.</p>
</div>
```

**Reset password** — Assunto: `Redefinir sua senha`
```html
<div style="font-family:Segoe UI,Arial,sans-serif;max-width:480px;margin:auto;color:#1a2335">
  <h2>Redefinir senha</h2>
  <p style="text-align:center;margin:26px 0">
    <a href="{{ .SiteURL }}/?token_hash={{ .TokenHash }}&type=recovery&email={{ .Email }}"
       style="background:#5b8cff;color:#fff;text-decoration:none;font-weight:600;padding:13px 26px;border-radius:10px;display:inline-block">Criar nova senha</a>
  </p>
  <p style="color:#667085;font-size:13px">Alternativa: em “Esqueci minha senha”, use o código <b>{{ .Token }}</b>.</p>
</div>
```
⚠️ Cole o HTML **exatamente** assim (com `{{ .TokenHash }}`). Se colar só `{{ .Token }}`, o e-mail chega só com o código.

### C4. Validade do convite
**Authentication → Sign In / Providers → Email → Email OTP expiration:** `86400` (24 h).

### C5. Hospedar o sistema em endereço https (necessário para o link funcionar)
O link do e-mail abre o endereço do sistema, então ele não pode ficar só no disco.
1. Renomeie o arquivo `quire.html` para **`index.html`**.
2. Hospede grátis: **Netlify Drop** (app.netlify.com/drop → arraste a pasta com o `index.html`), GitHub Pages ou Cloudflare Pages.
3. **Authentication → URL Configuration:** coloque o endereço (ex.: `https://controle-cs.netlify.app`) em **Site URL** e em **Redirect URLs**.
Sem hospedagem, o código do e-mail continua funcionando em **Ativar convite**.

## Parte D — Seu usuário administrador (uma única vez)

1. No **SQL Editor**, rode (trocando pelo **seu** e-mail):
```sql
insert into public.members (name, email, role, status, access_enabled, color)
values ('Seu Nome', 'seu.email@empresa.com.br', 'admin', 'invited', true, '#5b8cff')
on conflict (lower(email)) where email is not null do update
  set role = 'admin', access_enabled = true, status = 'invited';
```
2. **Authentication → Users → Add user → Invite user** → o mesmo e-mail.
3. Abra o e-mail, copie o código e use em **Ativar convite** no sistema (a tela de login será entregue na próxima etapa).

> Se o convite der erro *“Database error saving new user”*, é o portão funcionando: o e-mail ainda não está autorizado na tabela `members`.

## Parte E — Convidar outras pessoas

**Opção 1 — Pelo painel do Supabase (já funciona):**
```sql
insert into public.members (name, email, role, status, access_enabled)
values ('Rafael Souza', 'rafael@empresa.com.br', 'limited', 'invited', true);
```
Depois: **Authentication → Users → Invite user** com o mesmo e-mail.
Perfis: `admin`, `normal`, `limited`, `guest`.

**Opção 2 — Pelo próprio sistema (recomendada):** publique a função `functions/invite-user/index.ts`:
**Edge Functions → Deploy a new function →** nome `invite-user` → cole o arquivo → **Deploy**. Com ela, o botão **Convidar** em Configurações → Membros autoriza o e-mail e envia o convite de uma vez, e o botão de revogar derruba o acesso.


## Parte E2 — Acesso por projeto (o que cada pessoa enxerga)

Além do perfil (Administrador, Normal, Limitado, Convidado), cada projeto controla **quem o enxerga** — e isso vale no banco, não só na tela:

| Perfil | Vê |
|---|---|
| Administrador | todos os projetos |
| Normal | projetos **abertos** + os **restritos** em que foi incluído |
| Limitado / Convidado (pessoas de fora) | **somente** os projetos em que foi incluído |

**Como liberar:**
- Ao convidar (Configurações → Membros → Convidar), marque os projetos que a pessoa poderá ver.
- Depois, no cartão do membro → botão **Projetos**, ou em Configurações → **Projeto atual → Quem acessa este projeto** (escolha *Equipe toda* ou *Somente selecionados*).
- Projeto com cadeado 🔒 no menu é restrito. Somente administradores mudam o acesso.

**Importante ao atualizar:** rode novamente o arquivo `supabase_setup.sql` inteiro no SQL Editor (é seguro repetir; não apaga dados). Ele cria a tabela `project_access`, a coluna `restricted` e as novas regras. Projetos já existentes continuam abertos para Administrador e Normal; **Limitado e Convidado deixam de ver projetos até você incluí-los**.

**Excluir uma pessoa no sistema (🗑 no cartão do membro) também exclui o login dela** em Authentication → Users. Isso acontece de dois jeitos que se complementam: o banco apaga o login automaticamente (gatilho criado pelo `supabase_setup.sql`) e a função `invite-user` (ação `delete`) faz o mesmo pelo servidor. Para ativar: rode o SQL de novo e **publique novamente** a função `invite-user` (Edge Functions → invite-user → Code → cole o novo `index.ts` → Deploy).

## Parte E3 — Imagens nas tarefas e avisos por e-mail

**Imagens (descrição da tarefa):** abra uma tarefa e, logo abaixo da descrição, cole (Ctrl+V), arraste ou clique em **Adicionar imagem**. As imagens aparecem como miniaturas; clique para ampliar (setas ← → navegam, Esc fecha). Cada tarefa aceita até 12 imagens (JPG, PNG, GIF ou WebP; fotos grandes são reduzidas automaticamente). Os arquivos ficam num bucket **privado** do Supabase Storage chamado `task-images`, e quem vê a imagem é quem vê o projeto. Para criar o bucket e as regras, rode o `supabase_setup.sql` de novo (seguro repetir).

**Avisar por e-mail (botão "Avisar responsáveis" da atividade):** escolha as pessoas, o assunto, um recado e o que vai junto (detalhes, comentários, imagens). Dá para marcar "Guardar o recado como comentário". O e-mail sai **pelo próprio sistema** (não do seu e-mail pessoal) e leva o botão "Abrir atividade no sistema"; as respostas vão para quem enviou o aviso. Para ativar (uma vez só):
1. Publique de novo a função `invite-user` (Edge Functions → invite-user → Code → cole o novo `index.ts` → Deploy).
2. Em **Edge Functions → Secrets** crie **uma** destas opções:
   - **Opção A — Resend (mais simples):** crie conta grátis em resend.com, gere uma *API Key* e verifique seu domínio. Secrets: `RESEND_API_KEY` = a chave e `MAIL_FROM` = `CS Infra <avisos@seudominio.com.br>`.
   - **Opção B — SMTP:** `SMTP_USER`, `SMTP_PASS` (senha de app do Google ou do provedor), `SMTP_FROM` (opcional), `SMTP_HOST`/`SMTP_PORT` se não for Gmail.
3. No sistema: **Configurações → Links e convites → E-mail do sistema** mostra se está ativo e tem o botão **Enviar e-mail de teste para mim**.
Enquanto não estiver configurado, o link "Prefiro abrir no meu programa de e-mail" continua disponível no diálogo.

## Parte E4 — Convidar já com os projetos (acesso só ao que for marcado)
No convite você marca em quais projetos a pessoa entra. Ela passa a ver **somente** esses projetos. Se não marcar nenhum, ela entra **sem projeto** e cria os dela do zero (só ela e os administradores veem o que ela criar). Para as pessoas já cadastradas, em **Membros → Projetos** há a chave "Só vê os projetos marcados". Para ativar: **rode o `supabase_setup.sql` de novo** (seguro repetir; cria a coluna `projects_only` e atualiza a regra de visibilidade) e **publique de novo a função `invite-user`**.

## Parte E5 — Perfil Normal também administra membros
O perfil **Normal** pode convidar, reenviar convite, dar acesso, mudar o perfil (até Normal) e **incluir** pessoas em projetos (Configurações → Membros). **Bloquear acesso, remover definitivamente e tirar alguém de um projeto são só do administrador.** Limites que o próprio banco impõe: Normal **não cria administradores**, **não mexe em administradores** e **não altera o próprio cadastro**; só inclui pessoas em projetos que ele mesmo enxerga. Para ativar: **rode o `supabase_setup.sql` de novo** e **publique de novo a função `invite-user`**.

## Parte E6 — Convite caindo no spam
O e-mail de convite só deixa de ir para o spam se sair de um **remetente do seu próprio domínio, com SPF, DKIM e DMARC configurados**. Por isso, quando o **E-mail do sistema** está ativo (Parte E3: `RESEND_API_KEY` + `MAIL_FROM`), a função `invite-user` passa a enviar o convite por ele — com texto simples, um único botão e o código de reserva — em vez do e-mail genérico do Supabase. Passo a passo:
1. No Resend (resend.com → **Domains → Add Domain**) adicione o domínio da empresa (ex.: `csinfra.com.br`) e crie no seu DNS os registros que ele mostrar (**SPF** e **DKIM**). Espere ficar **Verified**.
2. Crie também o registro **DMARC** (TXT em `_dmarc.seudominio.com.br`), por exemplo: `v=DMARC1; p=none; rua=mailto:ti@seudominio.com.br`.
3. Em **Edge Functions → Secrets**, `MAIL_FROM` precisa ser desse domínio, ex.: `CS Infra <avisos@seudominio.com.br>` (nunca um `@gmail.com`/`@outlook.com`: esses não autorizam o seu servidor e vão para o spam).
4. Publique de novo a função `invite-user` e reenvie o convite. Peça à pessoa para marcar como **"Não é spam"** na primeira vez e adicionar o remetente aos contatos.
5. Para conferir a nota do e-mail, envie um convite para o endereço que o site mail-tester.com mostrar.
Sem o e-mail do sistema ativo, o convite continua saindo pelo Supabase Auth (Authentication → Emails → SMTP Settings: use o mesmo provedor/domínio verificado e edite o modelo "Invite user" com um assunto claro).

## Parte F — Tirar o acesso de alguém
- Pelo sistema (depois da integração) ou no SQL: `update public.members set status = 'blocked', access_enabled = false where email = 'fulano@empresa.com.br';`
- Em **Authentication → Users** você também pode excluir o usuário (derruba as sessões).
- O banco **não deixa** remover, bloquear ou rebaixar o último administrador.

## Parte G — Chaves (já configuradas no arquivo)
O `quire.html` entregue já contém a Project URL e a chave **anon** do seu projeto (públicas por desenho; a proteção está no RLS). ⚠️ Nunca coloque a chave **`service_role`** em arquivo nenhum.

**Convites pelo site:** Configurações → Membros → **Enviar convite** (requer a função da Parte E, opção 2). A função só aceita chamadas de administradores.

## Parte H — Cuidados
- **Backup:** no plano Free não há backup automático garantido; exporte periodicamente (Excel/JSON no sistema) ou use *Database → Backups* em planos pagos.
- **Pausa:** projetos Free sem uso por cerca de 7 dias podem ser pausados (basta reativar no painel).
- **Hospedagem:** cada pessoa precisa abrir o sistema. Pode ser o arquivo HTML compartilhado ou hospedado (GitHub Pages, Netlify, Cloudflare Pages — gratuitos).
- Guarde a senha do banco e o acesso à sua conta Supabase: quem controla o painel controla os dados.
