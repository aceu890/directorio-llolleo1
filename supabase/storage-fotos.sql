-- Storage de fotos de miembros (dual: nube + carpeta local /fotos)
-- Ejecutar en Supabase → SQL Editor → Run
--
-- Después sube las fotos locales con:
--   set SUPABASE_SERVICE_ROLE_KEY=...   (Project Settings → API → service_role)
--   node upload-fotos-supabase.mjs

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'fotos-miembros',
  'fotos-miembros',
  true,
  15728640,
  array['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Lectura pública (directorio + asistencia)
drop policy if exists "Lectura pública fotos miembros" on storage.objects;
create policy "Lectura pública fotos miembros"
  on storage.objects
  for select
  to public
  using (bucket_id = 'fotos-miembros');

-- Escritura solo usuarios logueados (admin)
drop policy if exists "Upload autenticado fotos miembros" on storage.objects;
create policy "Upload autenticado fotos miembros"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'fotos-miembros');

drop policy if exists "Update autenticado fotos miembros" on storage.objects;
create policy "Update autenticado fotos miembros"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'fotos-miembros')
  with check (bucket_id = 'fotos-miembros');

drop policy if exists "Delete autenticado fotos miembros" on storage.objects;
create policy "Delete autenticado fotos miembros"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'fotos-miembros');
