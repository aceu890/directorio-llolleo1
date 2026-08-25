-- Jose Miguel Soto Soto: solo foto + quitar duplicados
-- Ejecutar en Supabase → SQL Editor → Run

begin;

update public.miembros
set foto = 'Jose Miguel Soto Soto.jpeg'
where nombre = 'Jose Miguel Soto Soto';

-- El hijo no tiene foto todavía
update public.miembros
set foto = null
where nombre = 'Jose Miguel Soto Gazul';

with ranked as (
  select
    id,
    row_number() over (
      partition by nombre
      order by
        case
          when foto = 'Jose Miguel Soto Soto.jpeg' then 0
          when foto is not null and foto <> '' then 1
          else 2
        end,
        id asc
    ) as rn
  from public.miembros
  where nombre = 'Jose Miguel Soto Soto'
)
delete from public.miembros m
using ranked r
where m.id = r.id
  and r.rn > 1;

commit;
