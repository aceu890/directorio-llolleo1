-- Permisos de administración (escritura autenticada)
-- Ejecutar en SQL Editor → Run

grant usage on schema public to anon, authenticated;
grant select on table public.miembros to anon, authenticated;
grant insert, update, delete on table public.miembros to authenticated;

alter table public.miembros enable row level security;

drop policy if exists "Lectura pública de miembros" on public.miembros;
create policy "Lectura pública de miembros"
  on public.miembros
  for select
  to anon, authenticated
  using (true);

drop policy if exists "Escritura autenticada de miembros" on public.miembros;
drop policy if exists "Insert autenticado de miembros" on public.miembros;
drop policy if exists "Update autenticado de miembros" on public.miembros;
drop policy if exists "Delete autenticado de miembros" on public.miembros;

create policy "Insert autenticado de miembros"
  on public.miembros
  for insert
  to authenticated
  with check (true);

create policy "Update autenticado de miembros"
  on public.miembros
  for update
  to authenticated
  using (true)
  with check (true);

create policy "Delete autenticado de miembros"
  on public.miembros
  for delete
  to authenticated
  using (true);
