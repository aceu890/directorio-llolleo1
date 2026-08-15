/**
 * Exporta miembros enriquecidos desde script.js → JSON + seed SQL
 * Uso: node supabase/export-seed.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const script = fs.readFileSync(path.join(root, "script.js"), "utf8");

function extractArray(name) {
  const match = script.match(new RegExp(`const ${name} = (\\[[\\s\\S]*?\\]);`));
  if (!match) throw new Error(`No se encontró ${name}`);
  return eval(match[1]);
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function nameTokens(text) {
  return normalize(text)
    .replace(/\bdavia\b/g, "da via")
    .replace(/\bda-via\b/g, "da via")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .sort()
    .join(" ");
}

function nombreDesdeArchivo(filename) {
  const base = filename.replace(/\.[^.]+$/, "").trim();
  if (base.includes(",")) {
    const [apellidos, nombres] = base.split(",").map((part) => part.trim());
    return `${nombres} ${apellidos}`;
  }
  return base;
}

function overlapNombreScore(a, b) {
  const A = nameTokens(a).split(" ").filter(Boolean);
  const B = nameTokens(b).split(" ").filter(Boolean);
  if (!A.length || !B.length) return 0;
  const setB = new Set(B);
  let hit = 0;
  for (const t of A) if (setB.has(t)) hit++;
  return hit / Math.max(A.length, B.length);
}

const hermanos = extractArray("hermanos");
const FOTOS = extractArray("FOTOS");
const RECIEN_CONVERSOS = extractArray("RECIEN_CONVERSOS");
const LLAMAMIENTOS_OBISPADO = extractArray("LLAMAMIENTOS_OBISPADO");
const LLAMAMIENTOS_SS = extractArray("LLAMAMIENTOS_SS");
const LLAMAMIENTOS_ELDERES = extractArray("LLAMAMIENTOS_ELDERES");

const recienSet = new Set(RECIEN_CONVERSOS.map((n) => nameTokens(n)));
const obispadoMap = new Map(
  LLAMAMIENTOS_OBISPADO.map((item) => [nameTokens(item.nombre), item])
);
const ssMap = new Map(
  LLAMAMIENTOS_SS.map((item) => [nameTokens(item.nombre), item])
);
const elderesMap = new Map(
  LLAMAMIENTOS_ELDERES.map((item) => [nameTokens(item.nombre), item])
);

const fotoPorNombre = new Map();
for (const file of FOTOS) {
  const fromFile = nombreDesdeArchivo(file);
  fotoPorNombre.set(nameTokens(fromFile), file);

  let best = null;
  let bestScore = 0;
  for (const h of hermanos) {
    const score = overlapNombreScore(fromFile, h.nombre);
    const fileTokens = nameTokens(fromFile).split(" ").filter(Boolean);
    const hermanoTokens = nameTokens(h.nombre).split(" ").filter(Boolean);
    const covers =
      fileTokens.length >= 3 &&
      fileTokens.every((t) => hermanoTokens.includes(t)) &&
      Math.abs(fileTokens.length - hermanoTokens.length) <= 1;
    const effective = covers ? Math.max(score, 0.95) : score;
    if (effective > bestScore) {
      bestScore = effective;
      best = h;
    }
  }
  if (best && bestScore >= 0.85) {
    fotoPorNombre.set(nameTokens(best.nombre), file);
  }
}

function fotoDePerfil(nombre) {
  const key = nameTokens(nombre);
  if (fotoPorNombre.has(key)) return fotoPorNombre.get(key);
  let best = null;
  let bestScore = 0;
  for (const [photoKey, file] of fotoPorNombre) {
    const score = overlapNombreScore(key, photoKey);
    if (score > bestScore) {
      bestScore = score;
      best = file;
    }
  }
  return bestScore >= 0.9 ? best : null;
}

const rows = hermanos.map((h) => {
  const key = nameTokens(h.nombre);
  const cargoObispado = obispadoMap.get(key);
  const cargoSs = ssMap.get(key);
  const cargoElderes = elderesMap.get(key);

  let llamamiento = h.llamamiento || null;
  let etiqueta = null;
  let obispado = false;
  let sociedad_socorro = false;
  let quorum_elderes = false;

  if (cargoObispado) {
    llamamiento = cargoObispado.llamamiento;
    etiqueta = cargoObispado.etiqueta;
    obispado = true;
  } else if (cargoSs) {
    llamamiento = cargoSs.llamamiento;
    etiqueta = cargoSs.etiqueta;
    sociedad_socorro = true;
  } else if (cargoElderes) {
    llamamiento = cargoElderes.llamamiento;
    etiqueta = cargoElderes.etiqueta;
    quorum_elderes = true;
  }

  return {
    nombre: h.nombre,
    organizacion: h.organizacion || null,
    nacimiento: h.nacimiento || null,
    sexo: h.sexo || null,
    oficio: h.oficio || null,
    telefono: h.telefono || null,
    correo: h.correo || null,
    direccion: h.direccion || null,
    coords: h.coords || null,
    llamamiento,
    familia: h.familia || null,
    bautismo: h.bautismo || null,
    tiempo_miembro: h.tiempoMiembro || null,
    foto: fotoDePerfil(h.nombre),
    recien_converso: recienSet.has(key),
    obispado,
    sociedad_socorro,
    quorum_elderes,
    etiqueta_llamamiento: etiqueta,
  };
});

function sqlString(value) {
  if (value == null || value === "") return "null";
  return `'${String(value).replace(/'/g, "''")}'`;
}

function sqlBool(value) {
  return value ? "true" : "false";
}

const insertLines = rows.map((r) => {
  return `(${[
    sqlString(r.nombre),
    sqlString(r.organizacion),
    sqlString(r.nacimiento),
    sqlString(r.sexo),
    sqlString(r.oficio),
    sqlString(r.telefono),
    sqlString(r.correo),
    sqlString(r.direccion),
    sqlString(r.coords),
    sqlString(r.llamamiento),
    sqlString(r.familia),
    sqlString(r.bautismo),
    sqlString(r.tiempo_miembro),
    sqlString(r.foto),
    sqlBool(r.recien_converso),
    sqlBool(r.obispado),
    sqlBool(r.sociedad_socorro),
    sqlBool(r.quorum_elderes),
    sqlString(r.etiqueta_llamamiento),
  ].join(", ")})`;
});

const seedSql = `-- Seed Directorio Llo-Lleo (${rows.length} miembros)
-- Ejecutar DESPUÉS de schema.sql
-- Idempotente: borra e inserta de nuevo

truncate table public.miembros restart identity cascade;

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
  etiqueta_llamamiento
) values
${insertLines.join(",\n")};
`;

const outDir = path.join(root, "supabase");
const dataDir = path.join(root, "data");
fs.mkdirSync(dataDir, { recursive: true });

fs.writeFileSync(path.join(dataDir, "miembros.json"), JSON.stringify(rows, null, 2), "utf8");
fs.writeFileSync(path.join(outDir, "seed.sql"), seedSql, "utf8");

console.log(`Exportados ${rows.length} miembros`);
console.log(`- data/miembros.json`);
console.log(`- supabase/seed.sql`);
console.log(`recién conversos: ${rows.filter((r) => r.recien_converso).length}`);
console.log(`con foto: ${rows.filter((r) => r.foto).length}`);
