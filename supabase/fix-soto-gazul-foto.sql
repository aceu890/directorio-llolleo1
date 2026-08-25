-- Quitar foto errónea del hijo Jose Miguel Soto Gazul
-- (la foto Jose Miguel Soto Soto.jpeg es solo del padre)
-- Ejecutar en Supabase → SQL Editor → Run

update public.miembros
set foto = null
where nombre = 'Jose Miguel Soto Gazul';

-- Asegurar foto del padre
update public.miembros
set foto = 'Jose Miguel Soto Soto.jpeg'
where nombre = 'Jose Miguel Soto Soto';
