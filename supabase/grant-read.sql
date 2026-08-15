-- Permisos de lectura para la app (rol anon)
-- Ejecutar en SQL Editor → Run

grant usage on schema public to anon, authenticated;
grant select on table public.miembros to anon, authenticated;
