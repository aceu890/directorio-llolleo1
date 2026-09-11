-- Agregar hermano: Nicolás Benjamín Maraboli Godoy
-- Ejecutar en Supabase → SQL Editor → Run

insert into public.miembros (
  nombre,
  organizacion,
  nacimiento,
  sexo,
  oficio,
  telefono,
  correo,
  direccion,
  coords,
  llamamiento,
  familia,
  bautismo,
  tiempo_miembro,
  foto,
  recien_converso,
  obispado,
  sociedad_socorro,
  quorum_elderes,
  etiqueta_llamamiento,
  hermanos_ministrantes
)
values (
  'Nicolás Benjamín Maraboli Godoy',
  'Cuórum de Élderes',
  '23 nov 2000',
  'Varón',
  null,
  '9 4116 5353',
  'Nicomaraboli1@gmail.com',
  E'Los Crisantemos 146, Santo Domingo Chile\n2520000 Santo Domingo\nVALPARAÍSO',
  '-33,644928, -71,60768',
  null,
  'Nicolás Benjamín Maraboli Godoy — Varón',
  null,
  null,
  null,
  false,
  false,
  false,
  false,
  null,
  '[
    {"nombre":"David Alejandro Quintanilla Meza"},
    {"nombre":"Daniel Ignacio Wilches Martinez"}
  ]'::jsonb
)
on conflict ((lower(nombre))) do update set
  organizacion = excluded.organizacion,
  nacimiento = excluded.nacimiento,
  sexo = excluded.sexo,
  oficio = excluded.oficio,
  telefono = excluded.telefono,
  correo = excluded.correo,
  direccion = excluded.direccion,
  coords = excluded.coords,
  familia = excluded.familia,
  hermanos_ministrantes = excluded.hermanos_ministrantes,
  updated_at = now();
