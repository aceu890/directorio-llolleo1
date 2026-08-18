-- Notas / observaciones del administrador sobre cada hermano
-- Ejecutar en Supabase → SQL Editor → Run (completo)

alter table public.miembros
  add column if not exists observaciones text;

comment on column public.miembros.observaciones is
  'Notas del administrador: profesión, gustos, familia, etc.';

-- Asegurar que PostgREST vea la columna nueva
notify pgrst, 'reload schema';

-- Verificación rápida (debe listar la columna):
-- select column_name from information_schema.columns
-- where table_schema = 'public' and table_name = 'miembros' and column_name = 'observaciones';
