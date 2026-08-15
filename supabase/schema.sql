-- Directorio Llo-Lleo · esquema inicial Supabase
-- Ejecutar en: SQL Editor → New query → Run

create extension if not exists "pgcrypto";

create table if not exists public.miembros (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  organizacion text,
  nacimiento text,
  sexo text,
  oficio text,
  telefono text,
  correo text,
  direccion text,
  coords text,
  llamamiento text,
  familia text,
  bautismo text,
  tiempo_miembro text,
  foto text,
  recien_converso boolean not null default false,
  obispado boolean not null default false,
  sociedad_socorro boolean not null default false,
  quorum_elderes boolean not null default false,
  etiqueta_llamamiento text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists miembros_nombre_unique
  on public.miembros (lower(nombre));

create index if not exists miembros_recien_converso_idx
  on public.miembros (recien_converso)
  where recien_converso = true;

create index if not exists miembros_obispado_idx
  on public.miembros (obispado)
  where obispado = true;

create index if not exists miembros_ss_idx
  on public.miembros (sociedad_socorro)
  where sociedad_socorro = true;

create index if not exists miembros_elderes_idx
  on public.miembros (quorum_elderes)
  where quorum_elderes = true;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists miembros_set_updated_at on public.miembros;
create trigger miembros_set_updated_at
before update on public.miembros
for each row execute function public.set_updated_at();

alter table public.miembros enable row level security;

grant usage on schema public to anon, authenticated;
grant select on table public.miembros to anon, authenticated;
grant insert, update, delete on table public.miembros to authenticated;

drop policy if exists "Lectura pública de miembros" on public.miembros;
create policy "Lectura pública de miembros"
  on public.miembros
  for select
  to anon, authenticated
  using (true);

-- Escritura solo usuarios autenticados (panel admin)
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

comment on table public.miembros is 'Hermanos del Barrio Llo Lleo 1';
