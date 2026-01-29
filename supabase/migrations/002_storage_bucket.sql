-- Create public storage bucket for site screenshots
insert into storage.buckets (id, name, public)
values ('site-screens', 'site-screens', true)
on conflict (id) do update set public = true;

-- Allow public read
do $$ begin
  create policy "Public read site screenshots"
  on storage.objects for select
  using (bucket_id = 'site-screens');
exception when duplicate_object then null; end $$;
