-- Asistencia a la reunión sacramental
-- Ejecutar en Supabase → SQL Editor → Run (completo)

create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.asistencia_sacramental (
  id uuid primary key default gen_random_uuid(),
  fecha date not null,
  miembro_id uuid not null references public.miembros (id) on delete cascade,
  presente boolean not null default true,
  notas text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'asistencia_sacramental_fecha_miembro_unique'
  ) then
    alter table public.asistencia_sacramental
      add constraint asistencia_sacramental_fecha_miembro_unique
      unique (fecha, miembro_id);
  end if;
end $$;

create index if not exists asistencia_sacramental_fecha_idx
  on public.asistencia_sacramental (fecha);

create index if not exists asistencia_sacramental_miembro_idx
  on public.asistencia_sacramental (miembro_id);

create index if not exists asistencia_sacramental_fecha_presente_idx
  on public.asistencia_sacramental (fecha)
  where presente = true;

drop trigger if exists asistencia_set_updated_at on public.asistencia_sacramental;
create trigger asistencia_set_updated_at
before update on public.asistencia_sacramental
for each row execute function public.set_updated_at();

alter table public.asistencia_sacramental enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on table public.asistencia_sacramental to authenticated;

drop policy if exists "Lectura autenticada de asistencia" on public.asistencia_sacramental;
drop policy if exists "Insert autenticado de asistencia" on public.asistencia_sacramental;
drop policy if exists "Update autenticado de asistencia" on public.asistencia_sacramental;
drop policy if exists "Delete autenticado de asistencia" on public.asistencia_sacramental;
drop policy if exists "Lectura pública de asistencia" on public.asistencia_sacramental;

create policy "Lectura autenticada de asistencia"
  on public.asistencia_sacramental
  for select
  to authenticated
  using (true);

create policy "Insert autenticado de asistencia"
  on public.asistencia_sacramental
  for insert
  to authenticated
  with check (true);

create policy "Update autenticado de asistencia"
  on public.asistencia_sacramental
  for update
  to authenticated
  using (true)
  with check (true);

create policy "Delete autenticado de asistencia"
  on public.asistencia_sacramental
  for delete
  to authenticated
  using (true);

comment on table public.asistencia_sacramental is
  'Asistencia a la reunión sacramental: una fila por (fecha, miembro) cuando está presente';

notify pgrst, 'reload schema';
