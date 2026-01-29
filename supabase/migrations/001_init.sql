-- Enable required extensions
create extension if not exists pgcrypto;

-- Sites table: stores brief + generated config
create table if not exists public.sites (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- owner (optional): if you use Supabase Auth later
  user_id uuid null,

  -- raw brief captured from chat
  brief jsonb not null default '{}'::jsonb,

  -- generated site configuration (validated by app)
  config jsonb not null,

  -- style name for quick filtering
  style_key text not null,

  -- optional preview assets (stored in Supabase Storage)
  screenshot_desktop_path text null,
  screenshot_mobile_path text null
);

create index if not exists sites_created_at_idx on public.sites (created_at desc);
create index if not exists sites_style_key_idx on public.sites (style_key);

-- Basic RLS: start permissive for demo (anon can read), but only server should write.
-- For production, tighten this with auth and server-only inserts.
alter table public.sites enable row level security;

do $$ begin
  create policy "sites_select_public" on public.sites
    for select
    using (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "sites_insert_public" on public.sites
    for insert
    with check (true);
exception when duplicate_object then null; end $$;

-- Optional: prevent updates/deletes from anon in the DB layer (recommended)
-- Uncomment if you want immutable rows.
-- do $$ begin
--   create policy "sites_no_update" on public.sites
--     for update using (false);
-- exception when duplicate_object then null; end $$;
--
-- do $$ begin
--   create policy "sites_no_delete" on public.sites
--     for delete using (false);
-- exception when duplicate_object then null; end $$;
