/**
 * Sincroniza fotos + asigna organización por edad eclesiástica (año en curso).
 * Uso: node sync-orgs-fotos.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const YEAR = new Date().getFullYear();

const MESES = {
  ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
  jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11,
};

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function nameTokens(text) {
  return [
    ...new Set(
      normalize(text)
        .replace(/\bdavia\b/g, "da via")
        .replace(/\bda-via\b/g, "da via")
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean)
    ),
  ]
    .sort()
    .join(" ");
}

function nombreDesdeArchivo(filename) {
  const base = filename.replace(/\.[^.]+$/, "").trim();
  if (base.includes(",")) {
    const [apellidos, nombres] = base.split(",").map((p) => p.trim());
    return `${nombres} ${apellidos}`;
  }
  return base;
}

function parseFecha(fecha) {
  if (!fecha) return null;
  const text = String(fecha).trim();
  const match =
    text.match(/^(\d{1,2})\s+de\s+([a-záéíóú]+)\s+de\s+(\d{4})$/i) ||
    text.match(/^(\d{1,2})\s+([a-záéíóú]+)\s+(\d{4})$/i);
  if (!match) return null;
  const day = Number(match[1]);
  const month = MESES[normalize(match[2]).slice(0, 3)];
  const year = Number(match[3]);
  if (month == null) return null;
  return new Date(year, month, day);
}

/** Edad que cumple en el año civil (avance en enero). */
function edadEclesiastica(nacimiento, year = YEAR) {
  const birth = parseFecha(nacimiento);
  if (!birth) return null;
  return year - birth.getFullYear();
}

function esVaron(sexo) {
  return /var[oó]n/i.test(String(sexo || ""));
}

function esMujer(sexo) {
  return /mujer/i.test(String(sexo || ""));
}

/**
 * Organización principal + metadatos para etiquetas/filtros.
 */
function resolverOrganizacion(miembro) {
  const edad = edadEclesiastica(miembro.nacimiento);
  const varon = esVaron(miembro.sexo);
  const mujer = esMujer(miembro.sexo);

  if (edad == null) {
    return {
      organizacion: null,
      orgKey: null,
      orgGrupo: null,
      escuelaDominical: null,
      jas: false,
    };
  }

  // Primaria: hasta el 31 dic del año en que cumplen 11
  if (edad <= 11) {
    return {
      organizacion: "Primaria",
      orgKey: "primaria",
      orgGrupo: "primaria",
      escuelaDominical: null,
      jas: false,
    };
  }

  // Jóvenes: enero del año en que cumplen 12 → hasta 17
  if (edad >= 12 && edad <= 17) {
    let organizacion;
    let orgKey;
    if (varon) {
      if (edad <= 13) {
        organizacion = "Cuórum de Diáconos";
        orgKey = "diaconos";
      } else if (edad <= 15) {
        organizacion = "Cuórum de Maestros";
        orgKey = "maestros";
      } else {
        organizacion = "Cuórum de Presbíteros";
        orgKey = "presbiteros";
      }
      return {
        organizacion,
        orgKey,
        orgGrupo: "hj",
        escuelaDominical: "Escuela Dominical · Jóvenes",
        jas: false,
      };
    }
    if (mujer) {
      if (edad <= 13) {
        organizacion = "Edificadoras de Fe";
        orgKey = "edificadoras";
      } else if (edad <= 15) {
        organizacion = "Mensajeras de Esperanza";
        orgKey = "mensajeras";
      } else {
        organizacion = "Guardianas de Luz";
        orgKey = "guardianas";
      }
      return {
        organizacion,
        orgKey,
        orgGrupo: "mj",
        escuelaDominical: "Escuela Dominical · Jóvenes",
        jas: false,
      };
    }
    return {
      organizacion: "Hombres y Mujeres Jóvenes",
      orgKey: "jovenes",
      orgGrupo: "jovenes",
      escuelaDominical: "Escuela Dominical · Jóvenes",
      jas: false,
    };
  }

  // Adultos 18+
  const jas = edad >= 18 && edad <= 35;
  if (varon) {
    return {
      organizacion: "Cuórum de Élderes",
      orgKey: "elderes",
      orgGrupo: "elderes",
      escuelaDominical: "Escuela Dominical · Adultos",
      jas,
    };
  }
  if (mujer) {
    return {
      organizacion: "Sociedad de Socorro",
      orgKey: "ss",
      orgGrupo: "ss",
      escuelaDominical: "Escuela Dominical · Adultos",
      jas,
    };
  }
  return {
    organizacion: "Adultos",
    orgKey: "adultos",
    orgGrupo: "adultos",
    escuelaDominical: "Escuela Dominical · Adultos",
    jas,
  };
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

function fotoMatchScore(fileLabel, hermanoNombre) {
  const fileTok = nameTokens(fileLabel).split(" ").filter(Boolean);
  const hermTok = nameTokens(hermanoNombre).split(" ").filter(Boolean);
  if (!fileTok.length || !hermTok.length) return 0;
  const fileKey = fileTok.slice().sort().join(" ");
  const hermKey = hermTok.slice().sort().join(" ");
  if (fileKey === hermKey) return 1;

  const fileSet = new Set(fileTok);
  const hermSet = new Set(hermTok);
  let hitFile = 0;
  for (const t of fileTok) if (hermSet.has(t)) hitFile++;
  let hitHerm = 0;
  for (const t of hermTok) if (fileSet.has(t)) hitHerm++;
  const fileCovered = hitFile / fileTok.length;
  const hermCovered = hitHerm / hermTok.length;
  if (hermCovered < 0.9 || fileCovered < 0.85) {
    return Math.min(fileCovered, hermCovered) * 0.5;
  }
  return (fileCovered + hermCovered) / 2;
}

const MANUAL_FOTOS = [
  ["Alina Yolanda Gazul Ortega.jpeg", "Alina Yolanda de Soto Gazul"],
];

// --- fotos ---
const disk = fs
  .readdirSync(path.join(root, "fotos"))
  .filter(
    (f) =>
      fs.statSync(path.join(root, "fotos", f)).isFile() && f !== "sin nombre"
  )
  .sort((a, b) => a.localeCompare(b, "es"));

const byKey = new Map();
for (const file of disk) {
  const key =
    nameTokens(nombreDesdeArchivo(file)) ||
    file.replace(/\.[^.]+$/, "").normalize("NFC");
  const prev = byKey.get(key);
  if (!prev) {
    byKey.set(key, file);
    continue;
  }
  const preferJpeg =
    /\.jpe?g$/i.test(file) && !/\.jpe?g$/i.test(prev);
  const preferPng =
    !preferJpeg && /\.png$/i.test(file) && !/\.png$/i.test(prev);
  const preferAccent =
    /[áéíóúñü]/i.test(file) && !/[áéíóúñü]/i.test(prev);
  if (preferJpeg || preferPng || preferAccent) byKey.set(key, file);
}
const uniqueFiles = [...byKey.values()];

const miembros = JSON.parse(
  fs.readFileSync(path.join(root, "data/miembros.json"), "utf8")
);

const pairs = [];
for (const file of uniqueFiles) {
  const label = nombreDesdeArchivo(file);
  for (let i = 0; i < miembros.length; i++) {
    const score = fotoMatchScore(label, miembros[i].nombre);
    if (score >= 0.8) pairs.push({ file, index: i, score });
  }
}
pairs.sort((a, b) => b.score - a.score || a.index - b.index);

const usedFiles = new Set();
const usedIdx = new Set();
const assigned = [];
for (const p of pairs) {
  if (usedFiles.has(p.file) || usedIdx.has(p.index)) continue;
  // Evitar Laura Acevedo Rojas → Laura de Miranda Acevedo
  if (
    /laura elizabeth acevedo rojas/i.test(nombreDesdeArchivo(p.file)) &&
    /laura elizabeth de miranda acevedo/i.test(miembros[p.index].nombre)
  ) {
    continue;
  }
  usedFiles.add(p.file);
  usedIdx.add(p.index);
  assigned.push(p);
}

for (const [file, nombre] of MANUAL_FOTOS) {
  const idx = miembros.findIndex(
    (m) => nameTokens(m.nombre) === nameTokens(nombre)
  );
  if (idx < 0) continue;
  for (let i = assigned.length - 1; i >= 0; i--) {
    if (assigned[i].file === file || assigned[i].index === idx) {
      assigned.splice(i, 1);
    }
  }
  assigned.push({ file, index: idx, score: 1 });
}

const fotoByIndex = new Map(assigned.map((a) => [a.index, a.file]));

const counts = {};
let fotoUpdates = 0;
let orgUpdates = 0;

for (let i = 0; i < miembros.length; i++) {
  const m = miembros[i];
  const file = fotoByIndex.get(i);
  if (file && m.foto !== file) {
    m.foto = file;
    fotoUpdates++;
  }

  const org = resolverOrganizacion(m);
  if (m.organizacion !== org.organizacion) {
    m.organizacion = org.organizacion;
    orgUpdates++;
  } else {
    m.organizacion = org.organizacion;
  }
  // Metadatos auxiliares (no rompen schema si se ignoran en Supabase)
  m.org_key = org.orgKey;
  m.org_grupo = org.orgGrupo;
  m.escuela_dominical = org.escuelaDominical;
  m.jas = org.jas;

  const key = org.orgKey || "sin-fecha";
  counts[key] = (counts[key] || 0) + 1;
}

fs.writeFileSync(
  path.join(root, "data/miembros.json"),
  `${JSON.stringify(miembros, null, 2)}\n`
);

fs.writeFileSync(
  path.join(root, "fotos-index.js"),
  `/* Índice de fotos de perfil — usado por admin (asistencia) */\nwindow.FOTOS_INDEX = {\n  overrides: {\n    "alina de gazul soto yolanda": "Alina Yolanda Gazul Ortega.jpeg",\n  },\n  files: [\n${disk
    .map((f) => `    ${JSON.stringify(f)},`)
    .join("\n")}\n  ],\n};\n`
);

// FOTOS en script.js
let script = fs.readFileSync(path.join(root, "script.js"), "utf8");
const fotosSnip =
  "const FOTOS = [\n" +
  disk.map((f) => `  ${JSON.stringify(f)},`).join("\n") +
  "\n];";
script = script.replace(/const FOTOS = \[[\s\S]*?\];/, fotosSnip);
fs.writeFileSync(path.join(root, "script.js"), script);

// SQL sync fotos + organización
const esc = (s) => String(s ?? "").replace(/'/g, "''");
const lines = [
  "-- Fotos + organización por edad eclesiástica (" + YEAR + ")",
  "-- Ejecutar en Supabase → SQL Editor → Run",
  "",
  "begin;",
];
for (const m of miembros) {
  if (!m.organizacion && !m.foto) continue;
  const sets = [];
  if (m.foto) sets.push(`foto = '${esc(m.foto)}'`);
  if (m.organizacion) sets.push(`organizacion = '${esc(m.organizacion)}'`);
  if (!sets.length) continue;
  lines.push(
    `update public.miembros set ${sets.join(", ")} where nombre = '${esc(m.nombre)}';`
  );
}
lines.push("commit;", "", `-- Año eclesiástico: ${YEAR}`);
lines.push(`-- Fotos actualizadas: ${fotoUpdates}, orgs: ${orgUpdates}`);
fs.writeFileSync(
  path.join(root, "supabase/sync-fotos.sql"),
  `${lines.join("\n")}\n`
);

console.log({
  year: YEAR,
  photos: disk.length,
  matchedPhotos: assigned.length,
  fotoUpdates,
  orgUpdates,
  counts,
});
const marina = miembros.find((m) => /Marina Enriqueta/i.test(m.nombre));
console.log("Marina", marina?.foto, marina?.organizacion, marina?.jas);
