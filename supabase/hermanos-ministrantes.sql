-- ============================================================
-- Hermanos ministrantes · ejecutar UNA vez en Supabase
-- ============================================================
-- 1) Abre tu proyecto en supabase.com
-- 2) Ve a: SQL Editor → New query
-- 3) Pega TODO este archivo y pulsa Run
-- 4) Debe decir Success
-- 5) Vuelve al Admin → edita el hermano → asigna ministrantes → Guardar
-- ============================================================

alter table public.miembros
  add column if not exists hermanos_ministrantes jsonb not null default '[]'::jsonb;

comment on column public.miembros.hermanos_ministrantes is
  'Lista JSON de compañeros ministrantes, ej: [{"nombre":"Juan Pérez"},{"nombre":"Pedro López"}]';

-- Recargar el esquema de la API para que vea la columna nueva
notify pgrst, 'reload schema';

-- Verificación (debe devolver 1 fila con hermanos_ministrantes):
select column_name, data_type
from information_schema.columns
where table_schema = 'public'
  and table_name = 'miembros'
  and column_name = 'hermanos_ministrantes';
