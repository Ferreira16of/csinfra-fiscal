-- =====================================================================
--  CONTROLE DE TAREFAS (CS Infra) — SETUP DO BANCO NO SUPABASE
--  Cole este arquivo inteiro no  SQL Editor  do Supabase e clique em Run.
--  É seguro rodar de novo (idempotente) — ele não apaga dados.
--
--  O que ele cria:
--    • tabelas (membros, projetos, tarefas, etiquetas, comentários…)
--    • perfis de acesso: admin | normal | limited | guest
--    • CADASTRO POR CONVITE: só entra quem estiver autorizado em "members"
--    • regras de segurança (RLS) aplicadas no próprio banco
--    • histórico (audit_log) e tempo real (Realtime)
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1) TABELAS
-- ---------------------------------------------------------------------
create table if not exists public.teams (
  id          text primary key default substr(replace(gen_random_uuid()::text,'-',''),1,8),
  name        text not null,
  role        text not null default 'limited' check (role in ('limited','guest')),
  created_at  timestamptz not null default now()
);

-- "members" = pessoas do sistema. access_enabled = pode ENTRAR (foi autorizada por você).
-- Pessoas só para atribuir tarefas (sem login) ficam com access_enabled = false.
create table if not exists public.members (
  id              text primary key default substr(replace(gen_random_uuid()::text,'-',''),1,8),
  user_id         uuid unique references auth.users(id) on delete set null,
  name            text not null,
  email           text,
  color           text not null default '#5b8cff',
  capacity        numeric not null default 40,
  role            text not null default 'normal' check (role in ('admin','normal','limited','guest')),
  status          text not null default 'active' check (status in ('invited','active','blocked')),
  access_enabled  boolean not null default false,
  team_id         text references public.teams(id) on delete set null,
  last_login_at   timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
alter table public.members add column if not exists last_login_at timestamptz;
create unique index if not exists members_email_uq on public.members (lower(email)) where email is not null;

create table if not exists public.workspace (
  id            int primary key default 1 check (id = 1),
  org_name      text not null default 'CS Infra',
  system_link   text not null default '',
  default_role  text not null default 'normal' check (default_role in ('admin','normal','limited','guest')),
  rules         jsonb not null default '{}'::jsonb,
  updated_at    timestamptz not null default now()
);
insert into public.workspace (id) values (1) on conflict (id) do nothing;

create table if not exists public.projects (
  id           text primary key default substr(replace(gen_random_uuid()::text,'-',''),1,8),
  name         text not null,
  description  text not null default '',
  color        text,
  start_date   date,
  end_date     date,
  position     double precision not null default 0,
  created_by   uuid default auth.uid(),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  updated_by   uuid
);

-- Pessoa que só vê os projetos em que foi incluída (e os que ela mesma criar), mesmo sendo perfil Normal.
alter table public.members add column if not exists projects_only boolean not null default false;

-- Acesso por projeto: projeto "restrito" só aparece para administradores e para as pessoas listadas.
alter table public.projects add column if not exists restricted boolean not null default false;
-- Imagens anexadas à tarefa (lista de {p: caminho, n: nome, w, h}); os arquivos ficam no Storage (bucket task-images)
alter table public.tasks add column if not exists attachments jsonb not null default '[]'::jsonb;

create table if not exists public.tags (
  id          text primary key default substr(replace(gen_random_uuid()::text,'-',''),1,8),
  name        text not null,
  color       text not null default '#2ba5b5',
  created_at  timestamptz not null default now()
);
create unique index if not exists tags_name_uq on public.tags (lower(name));

create table if not exists public.tasks (
  id                text primary key default substr(replace(gen_random_uuid()::text,'-',''),1,8),
  project_id        text not null references public.projects(id) on delete cascade,
  parent_id         text references public.tasks(id) on delete cascade deferrable initially deferred,
  title             text not null,
  description       text not null default '',
  status            text not null default 'todo' check (status in ('todo','doing','review','blocked','done')),
  priority          smallint not null default 2 check (priority between 1 and 3),
  start_date        date,
  start_time        text,
  due_date          date,
  due_time          text,
  repeat_freq       text check (repeat_freq is null or repeat_freq in ('day','weekdays','week','month','year')),
  repeat_every      int  check (repeat_every is null or repeat_every >= 1),
  estimate_h        numeric not null default 0,
  spent_h           numeric not null default 0,
  timer_started_at  timestamptz,
  is_section        boolean not null default false,
  is_milestone      boolean not null default false,
  position          double precision not null default 0,
  done_at           timestamptz,
  done_log          timestamptz[] not null default '{}',
  created_by        uuid default auth.uid(),
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  updated_by        uuid
);
create index if not exists tasks_project_idx on public.tasks (project_id);
create index if not exists tasks_parent_idx  on public.tasks (parent_id);
create index if not exists tasks_due_idx     on public.tasks (due_date);
create index if not exists tasks_status_idx  on public.tasks (status);

create table if not exists public.task_assignees (
  task_id    text not null references public.tasks(id) on delete cascade,
  member_id  text not null references public.members(id) on delete cascade,
  primary key (task_id, member_id)
);
create index if not exists task_assignees_member_idx on public.task_assignees (member_id);

create table if not exists public.task_tags (
  task_id  text not null references public.tasks(id) on delete cascade,
  tag_id   text not null references public.tags(id)  on delete cascade,
  primary key (task_id, tag_id)
);

create table if not exists public.task_deps (
  task_id        text not null references public.tasks(id) on delete cascade,
  depends_on_id  text not null references public.tasks(id) on delete cascade,
  primary key (task_id, depends_on_id),
  check (task_id <> depends_on_id)
);

create table if not exists public.comments (
  id           text primary key default substr(replace(gen_random_uuid()::text,'-',''),1,8),
  task_id      text not null references public.tasks(id) on delete cascade,
  author_user  uuid not null default auth.uid(),
  author_name  text not null default '',
  body         text not null,
  created_at   timestamptz not null default now()
);
create index if not exists comments_task_idx on public.comments (task_id);

-- favoritas e preferências são PESSOAIS (cada usuário vê só as suas)
create table if not exists public.task_stars (
  task_id  text not null references public.tasks(id) on delete cascade,
  user_id  uuid not null default auth.uid(),
  primary key (task_id, user_id)
);
create table if not exists public.project_access (
  project_id text not null references public.projects(id) on delete cascade,
  member_id  text not null references public.members(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (project_id, member_id)
);
create index if not exists project_access_member_idx on public.project_access (member_id);
create table if not exists public.user_prefs (
  user_id  uuid primary key default auth.uid(),
  prefs    jsonb not null default '{}'::jsonb
);

create table if not exists public.audit_log (
  id          bigserial primary key,
  at          timestamptz not null default now(),
  user_id     uuid default auth.uid(),
  table_name  text not null,
  row_id      text,
  action      text not null,
  old_row     jsonb,
  new_row     jsonb
);
create index if not exists audit_log_at_idx on public.audit_log (at desc);

-- ---------------------------------------------------------------------
-- 2) FUNÇÕES AUXILIARES (perfil de quem está logado)
-- ---------------------------------------------------------------------
-- Perfil efetivo: NULL se a pessoa não está autorizada ou está bloqueada.
create or replace function public.my_role() returns text
language sql stable security definer set search_path = public as $$
  select m.role from public.members m
  where m.user_id = auth.uid() and m.access_enabled and m.status <> 'blocked'
  limit 1
$$;

create or replace function public.my_member_id() returns text
language sql stable security definer set search_path = public as $$
  select m.id from public.members m
  where m.user_id = auth.uid() and m.access_enabled and m.status <> 'blocked'
  limit 1
$$;

-- Pode ver este projeto?
--   admin   : todos
--   normal  : os não restritos + os restritos em que foi incluído (se "projects_only": só os em que foi incluído + os que ele criou)
--   limited / guest (pessoas de fora): somente os projetos em que foi incluído
create or replace function public.my_projects_only() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select m.projects_only from public.members m
                   where m.user_id = auth.uid() and m.access_enabled and m.status <> 'blocked' limit 1), false)
$$;

create or replace function public.can_see_project(p_proj text) returns boolean
language sql stable security definer set search_path = public as $$
  select case public.my_role()
    when 'admin'  then exists (select 1 from public.projects pr where pr.id = p_proj)
    -- normal: os abertos (a menos que seja "só os dele") + os que criou + os restritos/selecionados em que foi incluído
    when 'normal' then exists (select 1 from public.projects pr
                               where pr.id = p_proj
                                 and ( (not pr.restricted and not public.my_projects_only())
                                       or pr.created_by = auth.uid()
                                       or exists (select 1 from public.project_access a
                                                  where a.project_id = pr.id and a.member_id = public.my_member_id()) ))
    when 'limited' then exists (select 1 from public.project_access a where a.project_id = p_proj and a.member_id = public.my_member_id())
    when 'guest'   then exists (select 1 from public.project_access a where a.project_id = p_proj and a.member_id = public.my_member_id())
    else false
  end
$$;

create or replace function public.can_see_task(p_task text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.tasks t where t.id = p_task and public.can_see_project(t.project_id))
$$;

-- Quais pessoas aparecem na lista de membros para quem está logado.
-- admin/normal veem todos; limited/guest veem a si mesmos, quem divide projeto com eles e quem é responsável por tarefas que eles veem.
create or replace function public.can_see_member(p_member text) returns boolean
language sql stable security definer set search_path = public as $$
  select case
    when public.my_role() in ('admin','normal') then true
    when public.my_role() is null then false
    else p_member = public.my_member_id()
      or exists (select 1 from public.project_access a1 join public.project_access a2 on a2.project_id = a1.project_id
                 where a1.member_id = public.my_member_id() and a2.member_id = p_member)
      or exists (select 1 from public.task_assignees ta join public.tasks t on t.id = ta.task_id
                 where ta.member_id = p_member and public.can_see_project(t.project_id))
  end
$$;

-- Pode editar esta tarefa?  admin/normal: sim · limited: só as suas (atribuída a ela ou criada por ela)
create or replace function public.can_edit_task(p_task text) returns boolean
language sql stable security definer set search_path = public as $$
  select public.can_see_task(p_task) and case public.my_role()
    when 'admin'   then true
    when 'normal'  then true
    when 'limited' then exists (
        select 1 from public.tasks t
        where t.id = p_task
          and ( t.created_by = auth.uid()
                or exists (select 1 from public.task_assignees a
                           where a.task_id = t.id and a.member_id = public.my_member_id()) ))
    else false
  end
$$;

-- Chamada pelo app logo após o primeiro login: marca o convite como aceito.
create or replace function public.activate_me() returns public.members
language plpgsql security definer set search_path = public as $$
declare r public.members;
begin
  update public.members
     set status = case when status = 'invited' then 'active' else status end,
         last_login_at = now(), updated_at = now()
   where user_id = auth.uid() and access_enabled and status <> 'blocked';
  select * into r from public.members
   where user_id = auth.uid() and access_enabled and status <> 'blocked';
  return r;
end $$;

-- ---------------------------------------------------------------------
-- 3) CADASTRO SOMENTE POR CONVITE (portão em auth.users)
--    Mesmo que alguém consiga chamar o signup, o banco recusa o e-mail
--    que você não autorizou. Sem exceções.
-- ---------------------------------------------------------------------
create or replace function public.auth_gate() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.email is null or not exists (
       select 1 from public.members m
       where lower(m.email) = lower(new.email) and m.access_enabled and m.status <> 'blocked') then
    raise exception 'E-mail nao autorizado. Peca um convite ao administrador.' using errcode = 'P0001';
  end if;
  return new;
end $$;

create or replace function public.auth_link_member() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update public.members set user_id = new.id, updated_at = now()
   where lower(email) = lower(new.email) and user_id is null;
  return new;
end $$;

drop trigger if exists auth_gate_ins on auth.users;
create trigger auth_gate_ins before insert on auth.users
  for each row execute function public.auth_gate();

drop trigger if exists auth_gate_upd on auth.users;
create trigger auth_gate_upd before update of email on auth.users
  for each row when (old.email is distinct from new.email)
  execute function public.auth_gate();

drop trigger if exists auth_link_ins on auth.users;
create trigger auth_link_ins after insert on auth.users
  for each row execute function public.auth_link_member();

-- ---------------------------------------------------------------------
-- 4) TRAVAS DE INTEGRIDADE
-- ---------------------------------------------------------------------
-- updated_at / updated_by automáticos
create or replace function public.touch_row() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  if to_jsonb(new) ? 'updated_by' then new := jsonb_populate_record(new, jsonb_build_object('updated_by', auth.uid())); end if;
  return new;
end $$;
drop trigger if exists touch_tasks on public.tasks;
create trigger touch_tasks before update on public.tasks for each row execute function public.touch_row();
drop trigger if exists touch_projects on public.projects;
create trigger touch_projects before update on public.projects for each row execute function public.touch_row();
drop trigger if exists touch_members on public.members;
create trigger touch_members before update on public.members for each row execute function public.touch_row();
drop trigger if exists touch_workspace on public.workspace;
create trigger touch_workspace before update on public.workspace for each row execute function public.touch_row();

-- Nunca ficar sem administrador ativo
create or replace function public.keep_one_admin() returns trigger
language plpgsql security definer set search_path = public as $$
declare others int;
begin
  if old.role = 'admin' and old.access_enabled and old.status <> 'blocked'
     and (tg_op = 'DELETE' or new.role <> 'admin' or not new.access_enabled or new.status = 'blocked') then
    select count(*) into others from public.members m
     where m.id <> old.id and m.role = 'admin' and m.access_enabled and m.status <> 'blocked';
    if others = 0 then
      raise exception 'Mantenha pelo menos um administrador ativo.' using errcode = 'P0001';
    end if;
  end if;
  if tg_op = 'DELETE' then return old; end if;
  return new;
end $$;
drop trigger if exists keep_one_admin_upd on public.members;
create trigger keep_one_admin_upd before update on public.members for each row execute function public.keep_one_admin();
drop trigger if exists keep_one_admin_del on public.members;
create trigger keep_one_admin_del before delete on public.members for each row execute function public.keep_one_admin();

-- Excluiu a pessoa no sistema → exclui também o login dela (Authentication → Users).
-- (se o banco não permitir, só avisa; a função invite-user também faz isso pelo lado do servidor)
create or replace function public.drop_auth_user() returns trigger
language plpgsql security definer set search_path = public, auth as $$
begin
  begin
    delete from auth.users
     where (old.user_id is not null and id = old.user_id)
        or (old.email is not null and lower(email) = lower(old.email));
  exception when others then
    raise warning 'Nao foi possivel excluir o login de %: %', old.email, sqlerrm;
  end;
  return old;
end $$;
drop trigger if exists drop_auth_user_del on public.members;
create trigger drop_auth_user_del after delete on public.members for each row execute function public.drop_auth_user();

-- Perfil "limitado" não pode trocar o autor nem mover a tarefa de projeto
create or replace function public.protect_task_cols() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.my_role() = 'limited' and
     (new.created_by is distinct from old.created_by or new.project_id <> old.project_id) then
    raise exception 'Perfil limitado nao pode alterar autor ou projeto.' using errcode = 'P0001';
  end if;
  return new;
end $$;
drop trigger if exists protect_task_cols_upd on public.tasks;
create trigger protect_task_cols_upd before update on public.tasks for each row execute function public.protect_task_cols();

-- Perfil Normal que gerencia membros não pode religar o login (user_id) de ninguém
create or replace function public.protect_member_cols() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.my_role() is not null and public.my_role() <> 'admin' then
    if tg_op = 'INSERT' and new.user_id is not null then
      raise exception 'Somente administrador vincula login.' using errcode = 'P0001';
    end if;
    if tg_op = 'UPDATE' and new.user_id is distinct from old.user_id then
      raise exception 'Somente administrador altera o login vinculado.' using errcode = 'P0001';
    end if;
  end if;
  return new;
end $$;
drop trigger if exists protect_member_cols_ins on public.members;
create trigger protect_member_cols_ins before insert on public.members for each row execute function public.protect_member_cols();
drop trigger if exists protect_member_cols_upd on public.members;
create trigger protect_member_cols_upd before update on public.members for each row execute function public.protect_member_cols();

-- Projeto restrito: criar restrito é só do administrador; já a restrição (quem vê) pode ser mudada por quem gerencia membros (admin/normal)
create or replace function public.protect_project_cols() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.my_role() is not null and public.my_role() <> 'admin' then
    if tg_op = 'INSERT' and new.restricted then
      raise exception 'Somente administrador cria projeto restrito.' using errcode = 'P0001';
    end if;
  end if;
  return new;
end $$;
drop trigger if exists protect_project_cols_ins on public.projects;
create trigger protect_project_cols_ins before insert on public.projects for each row execute function public.protect_project_cols();
drop trigger if exists protect_project_cols_upd on public.projects;
create trigger protect_project_cols_upd before update on public.projects for each row execute function public.protect_project_cols();

-- Histórico de alterações (tarefas, projetos e membros)
create or replace function public.audit_row() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.audit_log(table_name, row_id, action, old_row, new_row)
  values (tg_table_name,
          coalesce((to_jsonb(new)->>'id'), (to_jsonb(old)->>'id')),
          tg_op,
          case when tg_op in ('UPDATE','DELETE') then to_jsonb(old) end,
          case when tg_op in ('INSERT','UPDATE') then to_jsonb(new) end);
  if tg_op = 'DELETE' then return old; end if;
  return new;
end $$;
drop trigger if exists audit_tasks on public.tasks;
create trigger audit_tasks after insert or update or delete on public.tasks for each row execute function public.audit_row();
drop trigger if exists audit_projects on public.projects;
create trigger audit_projects after insert or update or delete on public.projects for each row execute function public.audit_row();
drop trigger if exists audit_members on public.members;
create trigger audit_members after insert or update or delete on public.members for each row execute function public.audit_row();

-- ---------------------------------------------------------------------
-- 5) SEGURANÇA (RLS) — as regras de perfil valem no banco, não só na tela
-- ---------------------------------------------------------------------
alter table public.teams          enable row level security;
alter table public.members        enable row level security;
alter table public.workspace      enable row level security;
alter table public.projects       enable row level security;
alter table public.project_access  enable row level security;
alter table public.tags           enable row level security;
alter table public.tasks          enable row level security;
alter table public.task_assignees enable row level security;
alter table public.task_tags      enable row level security;
alter table public.task_deps      enable row level security;
alter table public.comments       enable row level security;
alter table public.task_stars     enable row level security;
alter table public.user_prefs     enable row level security;
alter table public.audit_log      enable row level security;

-- limpa políticas antigas (para poder rodar o script de novo)
do $$ declare r record; begin
  for r in select policyname, tablename from pg_policies where schemaname = 'public' loop
    execute format('drop policy if exists %I on public.%I', r.policyname, r.tablename);
  end loop;
end $$;

-- teams / workspace / tags: todos os autorizados leem; admin (teams, workspace) e admin/normal (tags) alteram
create policy teams_read    on public.teams     for select to authenticated using (public.my_role() is not null);
create policy teams_write   on public.teams     for all    to authenticated using (public.my_role() = 'admin') with check (public.my_role() = 'admin');
create policy ws_read       on public.workspace for select to authenticated using (public.my_role() is not null);
create policy ws_write      on public.workspace for update to authenticated using (public.my_role() = 'admin') with check (public.my_role() = 'admin');
create policy tags_read     on public.tags      for select to authenticated using (public.my_role() is not null);
create policy tags_write    on public.tags      for all    to authenticated using (public.my_role() in ('admin','normal')) with check (public.my_role() in ('admin','normal'));

-- members: todos os autorizados veem a equipe; só admin cadastra, muda perfil e bloqueia
create policy members_read  on public.members  for select to authenticated using (public.can_see_member(id));
drop policy if exists members_write on public.members;
drop policy if exists members_write_admin on public.members;
drop policy if exists members_ins_normal on public.members;
drop policy if exists members_upd_normal on public.members;
drop policy if exists members_del_normal on public.members;
create policy members_write_admin on public.members for all to authenticated using (public.my_role() = 'admin') with check (public.my_role() = 'admin');
-- perfil Normal também gerencia membros, mas nunca administradores nem a si mesmo, e não cria administradores
create policy members_ins_normal on public.members for insert to authenticated with check (public.my_role() = 'normal' and role <> 'admin');
create policy members_upd_normal on public.members for update to authenticated
  using (public.my_role() = 'normal' and role <> 'admin' and id <> public.my_member_id())
  with check (public.my_role() = 'normal' and role <> 'admin');
create policy members_del_normal on public.members for delete to authenticated
  using (public.my_role() = 'normal' and role <> 'admin' and id <> public.my_member_id());

-- projects: admin/normal criam e editam; só admin exclui
create policy projects_read   on public.projects for select to authenticated using (public.can_see_project(id));
create policy projects_insert on public.projects for insert to authenticated with check (public.my_role() in ('admin','normal'));
create policy projects_update on public.projects for update to authenticated using (public.my_role() in ('admin','normal') and public.can_see_project(id)) with check (public.my_role() in ('admin','normal'));
-- quem pode ver quais projetos: só administrador altera; cada pessoa lê as próprias linhas
drop policy if exists pa_read on public.project_access;
drop policy if exists pa_write on public.project_access;
create policy pa_read  on public.project_access for select to authenticated using (public.my_role() in ('admin','normal') or member_id = public.my_member_id());
-- admin: tudo · normal: só em projetos que enxerga e só para pessoas que não são administradoras
create policy pa_write on public.project_access for all    to authenticated
  using (public.my_role() = 'admin' or (public.my_role() = 'normal' and public.can_see_project(project_id)
         and not exists (select 1 from public.members m where m.id = member_id and m.role = 'admin')))
  with check (public.my_role() = 'admin' or (public.my_role() = 'normal' and public.can_see_project(project_id)
         and not exists (select 1 from public.members m where m.id = member_id and m.role = 'admin')));
create policy projects_delete on public.projects for delete to authenticated using (public.my_role() = 'admin');

-- tasks: todos leem · admin/normal/limited criam · edição conforme o perfil · admin/normal excluem
create policy tasks_read   on public.tasks for select to authenticated using (public.can_see_project(project_id));
create policy tasks_insert on public.tasks for insert to authenticated
  with check (public.my_role() in ('admin','normal','limited') and created_by = auth.uid() and public.can_see_project(project_id));
create policy tasks_update on public.tasks for update to authenticated
  using (public.can_edit_task(id)) with check (public.can_edit_task(id));
create policy tasks_delete on public.tasks for delete to authenticated using (public.my_role() in ('admin','normal') and public.can_see_project(project_id));

-- vínculos da tarefa (responsáveis, etiquetas, dependências) seguem a regra de edição da tarefa
create policy ta_read   on public.task_assignees for select to authenticated using (public.can_see_task(task_id));
create policy ta_write  on public.task_assignees for all    to authenticated
  using (public.can_see_task(task_id) and (public.can_edit_task(task_id) or (public.my_role() = 'limited' and exists (select 1 from public.tasks t where t.id = task_id and t.created_by = auth.uid()))))
  with check (public.can_edit_task(task_id));
create policy tt_read   on public.task_tags      for select to authenticated using (public.can_see_task(task_id));
create policy tt_write  on public.task_tags      for all    to authenticated using (public.can_edit_task(task_id)) with check (public.can_edit_task(task_id));
create policy td_read   on public.task_deps      for select to authenticated using (public.can_see_task(task_id));
create policy td_write  on public.task_deps      for all    to authenticated using (public.can_edit_task(task_id)) with check (public.can_edit_task(task_id));

-- comments: todos os perfis (inclusive convidado) comentam; cada um edita/apaga o seu; admin apaga qualquer um
create policy comments_read   on public.comments for select to authenticated using (public.can_see_task(task_id));
create policy comments_insert on public.comments for insert to authenticated with check (public.my_role() is not null and author_user = auth.uid() and public.can_see_task(task_id));
create policy comments_update on public.comments for update to authenticated using (author_user = auth.uid()) with check (author_user = auth.uid());
create policy comments_delete on public.comments for delete to authenticated using (author_user = auth.uid() or public.my_role() = 'admin');

-- favoritas e preferências: pessoais
create policy stars_all  on public.task_stars for all to authenticated using (user_id = auth.uid() and public.my_role() is not null) with check (user_id = auth.uid() and public.my_role() is not null);
create policy prefs_all  on public.user_prefs for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- imagens das tarefas (Storage): bucket privado; caminho = <id do projeto>/<id da tarefa>/<arquivo>
do $$
begin
  if to_regclass('storage.buckets') is not null then
    insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
    values ('task-images', 'task-images', false, 5242880, array['image/jpeg','image/png','image/gif','image/webp'])
    on conflict (id) do update set public = false, file_size_limit = 5242880,
      allowed_mime_types = array['image/jpeg','image/png','image/gif','image/webp'];
    execute 'drop policy if exists ti_read on storage.objects';
    execute 'drop policy if exists ti_insert on storage.objects';
    execute 'drop policy if exists ti_delete on storage.objects';
    execute $p$create policy ti_read on storage.objects for select to authenticated
      using (bucket_id = 'task-images' and public.can_see_project((storage.foldername(name))[1]))$p$;
    execute $p$create policy ti_insert on storage.objects for insert to authenticated
      with check (bucket_id = 'task-images' and public.my_role() in ('admin','normal','limited')
                  and public.can_see_project((storage.foldername(name))[1]))$p$;
    execute $p$create policy ti_delete on storage.objects for delete to authenticated
      using (bucket_id = 'task-images' and public.my_role() in ('admin','normal')
             and public.can_see_project((storage.foldername(name))[1]))$p$;
  end if;
end $$;

-- histórico: só administrador lê (ninguém escreve direto; só os gatilhos)
create policy audit_read on public.audit_log for select to authenticated using (public.my_role() = 'admin');

-- ---------------------------------------------------------------------
-- 6) PERMISSÕES DE ACESSO À API
-- ---------------------------------------------------------------------
revoke all on all tables    in schema public from anon;
revoke all on all sequences in schema public from anon;
revoke all on all functions in schema public from anon;
revoke execute on function public.activate_me() from public;
grant  execute on function public.activate_me() to authenticated;
grant  execute on function public.my_role(), public.my_member_id(), public.can_edit_task(text), public.can_see_project(text), public.can_see_task(text), public.can_see_member(text) to authenticated;

-- ---------------------------------------------------------------------
-- 7) TEMPO REAL (as telas dos outros usuários atualizam sozinhas)
-- ---------------------------------------------------------------------
do $$
declare t text;
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    foreach t in array array['tasks','projects','members','tags','comments','task_assignees','task_tags','task_deps','workspace','teams','project_access'] loop
      begin
        execute format('alter publication supabase_realtime add table public.%I', t);
      exception when duplicate_object then null;
      end;
    end loop;
  end if;
end $$;

-- ---------------------------------------------------------------------
-- 8) PRIMEIRO ADMINISTRADOR  ← EDITE E RODE ESTE BLOCO UMA ÚNICA VEZ
--    Troque pelo SEU e-mail. Depois vá em Authentication → Users →
--    "Invite user" e convide esse mesmo e-mail.
-- ---------------------------------------------------------------------
-- insert into public.members (name, email, role, status, access_enabled, color)
-- values ('Seu Nome', 'seu.email@empresa.com.br', 'admin', 'invited', true, '#5b8cff')
-- on conflict (lower(email)) where email is not null do update
--   set role = 'admin', access_enabled = true, status = 'invited';
