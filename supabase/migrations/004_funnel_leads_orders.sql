-- Funnel: anonymous leads -> generated sites -> payment proof -> order notification

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- brief (quiz answers)
  brief jsonb not null default '{}'::jsonb,
  style_key text null,

  -- contact
  full_name text null,
  phone text null,
  telegram text null,

  -- generated site
  site_id uuid null references public.sites (id) on delete set null,

  -- feedback/payment
  liked boolean null,
  payment_status text not null default 'pending', -- pending|paid|rejected
  payment_proof_path text null
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

-- Public can insert/update their own lead only if they know the id (MVP permissive).
-- For production, add a secret token per lead and require it on update.
do $$ begin
  create policy "leads_insert_public" on public.leads
    for insert
    with check (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "leads_update_public" on public.leads
    for update
    using (true)
    with check (true);
exception when duplicate_object then null; end $$;

-- No public select by default

-- Storage bucket for payment proofs (public read = false)
insert into storage.buckets (id, name, public)
values ('payment-proofs', 'payment-proofs', false)
on conflict (id) do update set public = false;

-- Allow uploads to payment-proofs (server should upload; keep permissive for MVP)
do $$ begin
  create policy "Payment proofs insert"
  on storage.objects for insert
  with check (bucket_id = 'payment-proofs');
exception when duplicate_object then null; end $$;

