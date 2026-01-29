-- MVP: authenticated projects + revisions for per-user workspace

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  user_id uuid not null,
  name text not null
);

create index if not exists projects_user_id_idx on public.projects (user_id);
create index if not exists projects_created_at_idx on public.projects (created_at desc);

create table if not exists public.revisions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  project_id uuid not null references public.projects (id) on delete cascade,
  style_key text not null,
  config jsonb not null,
  screenshot_desktop_path text null,
  screenshot_mobile_path text null
);

create index if not exists revisions_project_id_idx on public.revisions (project_id);
create index if not exists revisions_created_at_idx on public.revisions (created_at desc);

alter table public.projects enable row level security;
alter table public.revisions enable row level security;

-- Projects policies (owner-only)
do $$ begin
  create policy "projects_select_own" on public.projects
    for select using (auth.uid() = user_id);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "projects_insert_own" on public.projects
    for insert with check (auth.uid() = user_id);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "projects_update_own" on public.projects
    for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "projects_delete_own" on public.projects
    for delete using (auth.uid() = user_id);
exception when duplicate_object then null; end $$;

-- Revisions policies (owner-only via project)
do $$ begin
  create policy "revisions_select_own" on public.revisions
    for select using (
      exists (
        select 1 from public.projects p
        where p.id = revisions.project_id and p.user_id = auth.uid()
      )
    );
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "revisions_insert_own" on public.revisions
    for insert with check (
      exists (
        select 1 from public.projects p
        where p.id = revisions.project_id and p.user_id = auth.uid()
      )
    );
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "revisions_update_own" on public.revisions
    for update using (
      exists (
        select 1 from public.projects p
        where p.id = revisions.project_id and p.user_id = auth.uid()
      )
    ) with check (
      exists (
        select 1 from public.projects p
        where p.id = revisions.project_id and p.user_id = auth.uid()
      )
    );
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "revisions_delete_own" on public.revisions
    for delete using (
      exists (
        select 1 from public.projects p
        where p.id = revisions.project_id and p.user_id = auth.uid()
      )
    );
exception when duplicate_object then null; end $$;

