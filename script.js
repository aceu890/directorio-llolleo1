const FOTO_ANON = "./icons/avatar-anon.png";

/** Emparejamientos manuales cuando el archivo no coincide 1:1 con el padrón */
const FOTO_OVERRIDES = {
  "alina de gazul soto yolanda": "Alina Yolanda Gazul Ortega.jpeg",
};

const FOTOS = [
  "643322059_10240714748943640_1804666815657664619_n.jpg",
  "Alfredo Elias Mondaca Riveros.jpg",
  "Alicia Cecilia Meza Pizarro.jpg",
  "Alicia del Carmen de Peña Jerez.jpg",
  "Alina Yolanda Gazul Ortega.jpeg",
  "Andrea Francisca de Fuentes Molina.png",
  "Bárbara Elizabeth González Salazar.png",
  "Benjamín Alexander Vásquez Zolorsa.png",
  "Cesar Aaron Miranda Cabello.jpg",
  "Cristian Alexander Cortez Benavente.png",
  "Cristopher Bastian Jofré Campos.jpg",
  "Da Vía Rubio Lucas Maximiliano.jpeg",
  "Dafnhe Monserrat Echaniz Maripangui.png",
  "Daniela Beatriz Jeria Nuñez.jpg",
  "David Francisco Flores Contreras.jpeg",
  "David Joel Ramos Torres.jpg",
  "Diego Aaron Miranda Acevedo.jpg",
  "Edgardo José Abarca Neira.png",
  "Eduardo Alberto Castillo Fuentes.png",
  "Eduardo David Enrique Naranjo Gutiérrez.png",
  "Elias Benjamin Torres Jimenez.jpg",
  "Elvira del Carmen Núñez Ureta.jpg",
  "Emma Maritza de Pineda Urra.jpg",
  "Eugenia Margarita de Wilches Martínez.jpeg",
  "Fernanda Belén Meza Soto.jpg",
  "Fernando Andrés Soto Gazul.png",
  "Francesco Alejandro Davía Rubio.jpeg",
  "Gonzalo Aaron Miranda Acevedo.jpg",
  "Graciela Del Carmen Arpe Torres.jpg",
  "Gustavo Adolfo Gana Luna.png",
  "Héctor Ignacio León Pinto.png",
  "Hernan Enrique Aravena Martínez.jpg",
  "Ignacio Aaron Miranda Acevedo.jpeg",
  "Iris del Pilar Duque Cáceres.jpeg",
  "Isabella Esperanza Illanes Arpe.png",
  "Jesús Alberto Torres Benavente.png",
  "Joaquín Ignacio Torres Jiménez.png",
  "José Manuel Illanes Ceballos.png",
  "Jose Miguel Soto Soto.jpeg",
  "Julio Anibal Ramírez Soto.png",
  "Katherine Yamilet Marquez Grande.jpg",
  "Laura Elizabeth Acevedo Rojas.png",
  "León Baltazar maureira peñailillo.png",
  "Leonardo Esteban Wilches Martínez.jpg",
  "Leonardo Nelson Wilches Santibáñez.jpg",
  "Luciano Rafael Antonio Hernández Inostroza.jpg",
  "Lucresia del Carmen de Delgado Atenas.jpg",
  "Luis Alberto Cornejo Mancilla.jpg",
  "Manuel Antonio Pailamilla Abarza.jpg",
  "Marco Antonio Hernandez Ruiz.png",
  "Margarita del Pilar de Meza Soto.jpg",
  "Maria Cristina Jimenez Ramirez.jpg",
  "Marina Enriqueta Martinez Castillo.png",
  "Mario Alejandro Rossel Poblete.png",
  "Marisol Andrea de Hernandez Inostroza.jpg",
  "Maritza Viviana Martinez de Flores.jpg",
  "Martina Francisca Escalante Cornejo.png",
  "Mateo Alonso Hernández Inostroza.png",
  "Matías Alejandro Fuentes Martinez.png",
  "Matias Ignacio Vega Abarca.png",
  "Matías Valentín Leyes Campos.png",
  "Mauricio Fernando Flores Rojas.jpg",
  "Nahomi Maira Pañailillo Meza.jpg",
  "Nahuel Nicolás Leyes Campos.png",
  "Nancy de Lourdes de Acevedo Rojas.png",
  "Nicolás Aarón Miranda Acevedo.jpg",
  "Omar Ramon Ayala Roman.png",
  "Paola Andrea de Castillo Silva.jpg",
  "Pascuala Blanca Arratia Zambrano.jpg",
  "Pilar de Lourdes Toro Pontigo.jpg",
  "Raúl Antonio Arce Huerta.png",
  "Rene Alberto Gana Gatica.jpg",
  "Rene Axel Gana Luna.jpg",
  "Roberto Pablo Illanes Postigo.png",
  "Romina Rubio Luna.jpeg",
  "Rosales Sánchez, Héctor Manuel.png",
  "Santiago Solanille Clavero.jpg",
  "Silvana del Carmen de Gana Luna.jpg",
  "Támara Elizabeth González León.png",
  "Verónica Elizabeth de Peñailillo Meza.png",
  "Víctor Manuel Román Jiménez.png",
  "Víctor Orlando Acevedo Nacaratte.jpg",
  "Walther Ivaniet Urbina Peña.png",
  "Wladimir Antonio Sepúlveda Fuentes.png",
];

let hermanos = [];

const directory = document.getElementById("directory");
const searchInput = document.getElementById("search");
const resultsMeta = document.getElementById("resultsMeta");
const emptyState = document.getElementById("emptyState");
const detail = document.getElementById("detail");
const detailContent = document.getElementById("detailContent");
const detailClose = document.getElementById("detailClose");
const detailBack = document.getElementById("detailBack");
const detailForward = document.getElementById("detailForward");
const ministrantes = document.getElementById("ministrantes");
const ministrantesContent = document.getElementById("ministrantesContent");
const ministrantesClose = document.getElementById("ministrantesClose");
const filterButtons = document.querySelectorAll(".filter-btn, .filter-option");
const filtersOpen = document.getElementById("filtersOpen");
const filtersModal = document.getElementById("filtersModal");
const filtersClose = document.getElementById("filtersClose");
const filtersTriggerValue = document.getElementById("filtersTriggerValue");
const navOpen = document.getElementById("navOpen");
const sideMenu = document.getElementById("sideMenu");
const sideMenuClose = document.getElementById("sideMenuClose");
const sideMenuBackdrop = document.getElementById("sideMenuBackdrop");
const navFiltersMobile = document.getElementById("navFiltersMobile");
const navFiltersDesktop = document.getElementById("navFiltersDesktop");

const FILTER_LABELS = {
  todos: "Todos",
  "con-foto": "Con foto",
  recien: "Recién conversos",
  obispado: "Obispado",
  primaria: "Primaria",
  hj: "Hombres Jóvenes",
  mj: "Mujeres Jóvenes",
  diaconos: "Diáconos",
  maestros: "Maestros",
  presbiteros: "Presbíteros",
  edificadoras: "Edificadoras de Fe",
  mensajeras: "Mensajeras de Esperanza",
  guardianas: "Guardianas de Luz",
  ss: "Sociedad de Socorro",
  "ss-pres": "Presidencia SS",
  elderes: "Quórum de élderes",
  "elderes-pres": "Presidencia élderes",
  jas: "Jóvenes Adultos Solteros",
  "ed-jovenes": "Escuela Dominical · Jóvenes",
  "ed-adultos": "Escuela Dominical · Adultos",
};

let activeFilter = "todos";
let detailHistory = [];
let detailHistoryIndex = -1;

const ICONO_AMIGO = `
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 18.5c.8-2.8 2.9-4.3 5.5-4.3s4.7 1.5 5.5 4.3" stroke-linecap="round" />
    <circle cx="17" cy="9" r="2.6" />
    <path d="M14.2 18.5c.5-1.9 1.9-3.1 3.8-3.1 1.3 0 2.4.5 3.1 1.5" stroke-linecap="round" />
  </svg>
`;

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
    const [apellidos, nombres] = base.split(",").map((part) => part.trim());
    return `${nombres} ${apellidos}`;
  }
  return base;
}

function fotoUrl(filename) {
  const name = String(filename || "").trim();
  if (!name) return FOTO_ANON;
  if (typeof window.fotoLocalUrl === "function") {
    const local = window.fotoLocalUrl(name);
    if (local) return local;
  }
  if (/^https?:\/\//i.test(name) || name.startsWith("./") || name.startsWith("/")) {
    return name;
  }
  return `./fotos/${name
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/\?/g, "%3F")
    .replace(/ /g, "%20")}`;
}

/** Resuelve el archivo real en /fotos; null si no hay nombre. */
function resolveFotoArchivo(filename) {
  let name = String(filename || "")
    .trim()
    .replace(/^(\.\/)?fotos\//i, "");
  if (!name) return null;
  try {
    name = decodeURIComponent(name);
  } catch {
    /* keep */
  }

  const catalog =
    Array.isArray(window.FOTOS_INDEX?.files) && window.FOTOS_INDEX.files.length
      ? window.FOTOS_INDEX.files
      : FOTOS;

  if (catalog.includes(name)) return name;

  const base = name.replace(/\.[^.]+$/, "").normalize("NFC");
  const baseKey = nameTokens(base);
  const sameBase = catalog.filter((f) => {
    const fBase = f.replace(/\.[^.]+$/, "").normalize("NFC");
    return fBase === base || nameTokens(fBase) === baseKey;
  });
  if (!sameBase.length) return name;

  // Preferir jpg/jpeg (reemplazos actuales) y luego png
  return (
    sameBase.find((f) => /\.jpe?g$/i.test(f)) ||
    sameBase.find((f) => /\.png$/i.test(f)) ||
    sameBase[0]
  );
}

function fotoCandidatesFor(archivoOrUrl) {
  const resolved = resolveFotoArchivo(archivoOrUrl);
  const seed = resolved || archivoOrUrl;
  if (typeof window.fotoAltCandidates === "function") {
    return window.fotoAltCandidates(seed);
  }
  return resolved ? [resolved] : [];
}

/** Atributos <img> con fallback automático de extensión + nube */
function fotoImgAttrs(archivoOrUrl) {
  const raw = String(archivoOrUrl || "").trim();
  if (!raw || raw === FOTO_ANON) {
    return `src="${escapeHtml(FOTO_ANON)}" data-candidates="" data-cloud="" data-anon="${escapeHtml(FOTO_ANON)}" data-foto-stage="anon" onerror="this.onerror=null;this.src='${escapeHtml(FOTO_ANON)}'"`;
  }

  const cands = fotoCandidatesFor(raw);
  const primary = cands[0] || resolveFotoArchivo(raw) || raw;
  const local = fotoUrl(primary);
  const cloud =
    typeof window.fotoCloudUrl === "function"
      ? window.fotoCloudUrl(primary) || ""
      : "";
  const cloudCands = cands
    .map((f) =>
      typeof window.fotoCloudUrl === "function" ? window.fotoCloudUrl(f) : ""
    )
    .filter(Boolean);
  const uniqueCloud = [...new Set(cloudCands)];

  return `src="${escapeHtml(local)}" data-candidates="${escapeHtml(cands.join("|"))}" data-cand-index="0" data-cloud="${escapeHtml(cloud)}" data-cloud-candidates="${escapeHtml(uniqueCloud.join("|"))}" data-cloud-index="-1" data-anon="${escapeHtml(FOTO_ANON)}" data-foto-stage="local" onerror="window.fotoImgFallback&&window.fotoImgFallback(this)"`;
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

/** Empareja archivo→hermano: el nombre del hermano debe estar bien cubierto por el archivo. */
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

  // Evita asignar foto del padre a un hijo con apellido extra (p. ej. Soto Soto → Soto Gazul)
  if (hermCovered < 0.9 || fileCovered < 0.85) {
    return Math.min(fileCovered, hermCovered) * 0.5;
  }
  return (fileCovered + hermCovered) / 2;
}

const fotoPorNombre = new Map();

function uniqueFotoFiles() {
  const byKey = new Map();
  for (const file of FOTOS) {
    const label = nombreDesdeArchivo(file);
    const key = nameTokens(label) || file.replace(/\.[^.]+$/, "").normalize("NFC");
    const prev = byKey.get(key);
    if (!prev) {
      byKey.set(key, file);
      continue;
    }
    const preferJpeg = /\.jpe?g$/i.test(file) && !/\.jpe?g$/i.test(prev);
    const preferPng =
      !preferJpeg && /\.png$/i.test(file) && !/\.png$/i.test(prev);
    const preferAccent =
      /[áéíóúñü]/i.test(file) && !/[áéíóúñü]/i.test(prev);
    if (preferJpeg || preferPng || preferAccent) byKey.set(key, file);
  }
  return [...byKey.values()];
}

function rebuildFotoPorNombre() {
  fotoPorNombre.clear();
  if (!hermanos.length) return;

  const files = uniqueFotoFiles();
  const pairs = [];
  for (const file of files) {
    const label = nombreDesdeArchivo(file);
    for (let i = 0; i < hermanos.length; i++) {
      const score = fotoMatchScore(label, hermanos[i].nombre);
      if (score >= 0.8) {
        pairs.push({ file, index: i, score });
      }
    }
  }
  pairs.sort((a, b) => b.score - a.score || a.index - b.index);

  const usedFiles = new Set();
  const usedIndexes = new Set();
  for (const pair of pairs) {
    if (usedFiles.has(pair.file) || usedIndexes.has(pair.index)) continue;
    usedFiles.add(pair.file);
    usedIndexes.add(pair.index);
    const url = fotoUrl(pair.file);
    const hermono = hermanos[pair.index];
    fotoPorNombre.set(nameTokens(hermono.nombre), url);
    fotoPorNombre.set(nameTokens(nombreDesdeArchivo(pair.file)), url);
  }

  // Overrides manuales (p. ej. Alina Gazul Ortega → Alina de Soto Gazul)
  for (const [tokenKey, file] of Object.entries(FOTO_OVERRIDES)) {
    if (!FOTOS.includes(file)) continue;
    const url = fotoUrl(file);
    fotoPorNombre.set(tokenKey, url);
    const hermono = hermanos.find((h) => nameTokens(h.nombre) === tokenKey);
    if (hermono) fotoPorNombre.set(nameTokens(hermono.nombre), url);
  }
}

function fotoDePerfil(nombre) {
  const key = nameTokens(nombre);
  if (fotoPorNombre.has(key)) return fotoPorNombre.get(key);

  let bestUrl = null;
  let bestScore = 0;
  for (const [photoKey, url] of fotoPorNombre) {
    const score = fotoMatchScore(photoKey, key);
    if (score > bestScore) {
      bestScore = score;
      bestUrl = url;
    }
  }
  return bestScore >= 0.9 ? bestUrl : FOTO_ANON;
}

let hermanosPorNombre = new Map();
let filterTotalsCache = null;

function mapMiembroRow(row, index) {
  return {
    id: row.id ?? index,
    nombre: row.nombre || "",
    organizacion: row.organizacion || "",
    nacimiento: row.nacimiento || "",
    sexo: row.sexo || "",
    oficio: row.oficio || "",
    telefono: row.telefono || "",
    correo: row.correo || "",
    direccion: row.direccion || "",
    coords: row.coords || "",
    llamamiento: row.llamamiento || "",
    familia: row.familia || "",
    bautismo: row.bautismo || "",
    tiempoMiembro: row.tiempo_miembro || row.tiempoMiembro || "",
    observaciones: row.observaciones || "",
    foto: String(row.foto || "").trim(),
    recienConverso: !!(row.recien_converso ?? row.recienConverso),
    obispado: !!row.obispado,
    sociedadSocorro: !!(row.sociedad_socorro ?? row.sociedadSocorro),
    quorumElderes: !!(row.quorum_elderes ?? row.quorumElderes),
    etiquetaLlamamiento:
      row.etiqueta_llamamiento || row.etiquetaLlamamiento || "",
    hermanosMinistrantes: row.hermanos_ministrantes || row.hermanosMinistrantes || [],
  };
}

function setHermanosFromRows(rows) {
  hermanos = (rows || []).map((row, index) => mapMiembroRow(row, index));
  rebuildFotoPorNombre();
  hermanos = hermanos.map((h) => {
    const override = FOTO_OVERRIDES[nameTokens(h.nombre)];
    const fromDb = resolveFotoArchivo(
      String(h.foto || "")
        .replace(/^https?:\/\/[^/]+/i, "")
        .replace(/^(\.\/)?fotos\//i, "")
    );
    const matchedUrl = fotoPorNombre.get(nameTokens(h.nombre));
    let matchedFile = null;
    if (matchedUrl && matchedUrl !== FOTO_ANON) {
      try {
        matchedFile = decodeURIComponent(matchedUrl.replace(/^\.\/fotos\//i, ""));
      } catch {
        matchedFile = matchedUrl.replace(/^\.\/fotos\//i, "");
      }
    }
    // Preferir override → match por nombre (FOTOS) → campo DB
    const archivo = override || matchedFile || fromDb || null;
    const foto = archivo
      ? fotoUrl(archivo)
      : fotoDePerfil(h.nombre) || FOTO_ANON;
    return aplicarOrganizacion({ ...h, foto, fotoArchivo: archivo || "" });
  });
  hermanosPorNombre = new Map(
    hermanos.map((h) => [nameTokens(h.nombre), h])
  );
  filterTotalsCache = null;
}

function getSupabaseConfig() {
  const cfg = window.SUPABASE_CONFIG || {};
  const url = String(cfg.url || "").trim().replace(/\/$/, "");
  const anonKey = String(cfg.anonKey || "").trim();
  if (!url || !anonKey) return null;
  return { url, anonKey };
}

async function fetchMiembrosFromSupabase() {
  const cfg = getSupabaseConfig();
  if (!cfg) return null;

  const endpoint = `${cfg.url}/rest/v1/miembros?select=*&order=nombre.asc`;
  const response = await fetch(endpoint, {
    headers: {
      apikey: cfg.anonKey,
      Authorization: `Bearer ${cfg.anonKey}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Supabase ${response.status}`);
  }

  const rows = await response.json();
  if (!Array.isArray(rows) || !rows.length) {
    throw new Error("Supabase sin miembros");
  }
  return rows;
}

async function fetchMiembrosFromLocalJson() {
  const response = await fetch("./data/miembros.json", { cache: "no-cache" });
  if (!response.ok) throw new Error(`JSON local ${response.status}`);
  const rows = await response.json();
  if (!Array.isArray(rows) || !rows.length) {
    throw new Error("JSON local vacío");
  }
  return rows;
}

async function loadHermanos() {
  const errors = [];

  if (location.protocol === "file:") {
    throw new Error(
      "Estás abriendo el sitio como archivo (file://). Usa Live Server o un servidor local."
    );
  }

  // 1) Local primero: funciona offline y no depende de la red
  try {
    const local = await fetchMiembrosFromLocalJson();
    setHermanosFromRows(local);
    console.info(`[directorio] ${hermanos.length} miembros desde data/miembros.json`);

    // Actualiza en segundo plano desde Supabase si hay red
    fetchMiembrosFromSupabase()
      .then((remote) => {
        if (!remote || !remote.length) return;
        setHermanosFromRows(remote);
        refresh();
        console.info(`[directorio] actualizado desde Supabase (${hermanos.length})`);
      })
      .catch((err) => {
        console.warn("[directorio] Supabase en segundo plano no disponible.", err);
      });

    return "local";
  } catch (error) {
    errors.push(error);
    console.warn("[directorio] JSON local no disponible.", error);
  }

  // 2) Fallback nube
  try {
    const remote = await fetchMiembrosFromSupabase();
    if (remote) {
      setHermanosFromRows(remote);
      console.info(`[directorio] ${hermanos.length} miembros desde Supabase`);
      return "supabase";
    }
  } catch (error) {
    errors.push(error);
    console.warn("[directorio] Supabase no disponible.", error);
  }

  const detail = errors
    .map((e) => e && e.message)
    .filter(Boolean)
    .join(" · ");
  throw new Error(detail || "No se pudieron cargar los miembros");
}

function findHermanoByNombre(nombre) {
  const key = nameTokens(nombre);
  if (!key) return null;
  const exact = hermanosPorNombre.get(key);
  if (exact) return exact;

  const wanted = key.split(" ");
  if (wanted.length < 2) return null;

  let best = null;
  let bestScore = 0;
  for (const h of hermanos) {
    const tokens = nameTokens(h.nombre).split(" ");
    const set = new Set(tokens);
    let hit = 0;
    for (const t of wanted) if (set.has(t)) hit++;
    const score = hit / Math.max(wanted.length, tokens.length);
    const coversShort =
      wanted.length <= tokens.length
        ? wanted.every((t) => set.has(t))
        : tokens.every((t) => wanted.includes(t));
    if (coversShort && wanted.length >= 3) return h;
    if (score > bestScore) {
      bestScore = score;
      best = h;
    }
  }
  return bestScore >= 0.75 ? best : null;
}

function nombreDesdeLineaFamilia(line) {
  let text = String(line || "").trim();
  if (!text) return null;
  text = text.split(/\s+[—–]\s+/)[0].trim();
  text = text.replace(/\s+-\s+(?=\d|[Vv]arón|[Mm]ujer)/, " — ").split(/\s+[—–]\s+/)[0].trim();
  text = text.replace(/\s*\(\d{1,3}\)\s*$/, "").trim();
  text = text.replace(/\s+(Varón|Mujer)\s*$/i, "").trim();
  return text || null;
}

function familiaHtml(familia, currentId) {
  if (!familia || !String(familia).trim()) return escapeHtml("—");

  return String(familia)
    .split("\n")
    .map((line) => {
      const raw = line.trim();
      if (!raw) return "";
      const nombre = nombreDesdeLineaFamilia(raw);
      const match = nombre ? findHermanoByNombre(nombre) : null;
      if (!match || match.id === currentId) {
        return `<span class="family-line">${escapeHtml(raw)}</span>`;
      }

      const dashParts = raw.split(/\s+[—–]\s+/);
      const rest =
        dashParts.length > 1
          ? ` — ${escapeHtml(dashParts.slice(1).join(" — "))}`
          : "";
      return `<span class="family-line"><button type="button" class="family-link" data-id="${match.id}">${escapeHtml(match.nombre)}</button>${rest}</span>`;
    })
    .filter(Boolean)
    .join("");
}

function parseFecha(fecha) {
  if (!fecha) return null;
  const text = String(fecha).trim();
  const match =
    text.match(/^(\d{1,2})\s+de\s+([a-zA-Záéíóú]+)\s+de\s+(\d{4})$/i) ||
    text.match(/^(\d{1,2})\s+([a-zA-Záéíóú]+)\s+(\d{4})$/i);
  if (!match) return null;
  const day = Number(match[1]);
  const monthKey = normalize(match[2]).slice(0, 3);
  const year = Number(match[3]);
  const month = MESES[monthKey];
  if (month == null) return null;
  return new Date(year, month, day);
}

function calcEdad(nacimiento) {
  const birth = parseFecha(nacimiento);
  if (!birth) return null;

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const hadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  if (!hadBirthday) age -= 1;
  return age;
}

/** Edad que cumple en el año civil (avances de organización en enero). */
function edadEclesiastica(nacimiento, year = new Date().getFullYear()) {
  const birth = parseFecha(nacimiento);
  if (!birth) return null;
  return year - birth.getFullYear();
}

function esVaron(hermano) {
  return /var[oó]n/i.test(String(hermano?.sexo || ""));
}

function esMujer(hermano) {
  return /mujer/i.test(String(hermano?.sexo || ""));
}

/**
 * Organización del barrio según edad eclesiástica y sexo.
 * Primaria → HJ/MJ (clases) → SS / Cuórum de Élderes (+ JAS 18–35).
 */
function resolverOrganizacion(hermano) {
  const edad = edadEclesiastica(hermano?.nacimiento);
  const varon = esVaron(hermano);
  const mujer = esMujer(hermano);

  if (edad == null) {
    return {
      organizacion: String(hermano?.organizacion || "").trim() || "",
      orgKey: "",
      orgGrupo: "",
      escuelaDominical: "",
      jas: false,
    };
  }

  if (edad <= 11) {
    return {
      organizacion: "Primaria",
      orgKey: "primaria",
      orgGrupo: "primaria",
      escuelaDominical: "",
      jas: false,
    };
  }

  if (edad >= 12 && edad <= 17) {
    if (varon) {
      if (edad <= 13) {
        return {
          organizacion: "Cuórum de Diáconos",
          orgKey: "diaconos",
          orgGrupo: "hj",
          escuelaDominical: "Escuela Dominical · Jóvenes",
          jas: false,
        };
      }
      if (edad <= 15) {
        return {
          organizacion: "Cuórum de Maestros",
          orgKey: "maestros",
          orgGrupo: "hj",
          escuelaDominical: "Escuela Dominical · Jóvenes",
          jas: false,
        };
      }
      return {
        organizacion: "Cuórum de Presbíteros",
        orgKey: "presbiteros",
        orgGrupo: "hj",
        escuelaDominical: "Escuela Dominical · Jóvenes",
        jas: false,
      };
    }
    if (mujer) {
      if (edad <= 13) {
        return {
          organizacion: "Edificadoras de Fe",
          orgKey: "edificadoras",
          orgGrupo: "mj",
          escuelaDominical: "Escuela Dominical · Jóvenes",
          jas: false,
        };
      }
      if (edad <= 15) {
        return {
          organizacion: "Mensajeras de Esperanza",
          orgKey: "mensajeras",
          orgGrupo: "mj",
          escuelaDominical: "Escuela Dominical · Jóvenes",
          jas: false,
        };
      }
      return {
        organizacion: "Guardianas de Luz",
        orgKey: "guardianas",
        orgGrupo: "mj",
        escuelaDominical: "Escuela Dominical · Jóvenes",
        jas: false,
      };
    }
  }

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
    organizacion: String(hermano?.organizacion || "").trim() || "Adultos",
    orgKey: "adultos",
    orgGrupo: "adultos",
    escuelaDominical: "Escuela Dominical · Adultos",
    jas,
  };
}

function aplicarOrganizacion(hermano) {
  const org = resolverOrganizacion(hermano);
  return {
    ...hermano,
    organizacion: org.organizacion,
    orgKey: org.orgKey,
    orgGrupo: org.orgGrupo,
    escuelaDominical: org.escuelaDominical,
    jas: org.jas,
  };
}

function esAdulto(hermano) {
  const edad = edadEclesiastica(hermano?.nacimiento);
  return edad != null && edad >= 18;
}

/** Quórum de élderes completo: varones de 18 años o más (edad eclesiástica) */
function enQuorumElderes(hermano) {
  return esVaron(hermano) && esAdulto(hermano);
}

/** Sociedad de Socorro completa: mujeres de 18 años o más */
function enSociedadSocorro(hermano) {
  return esMujer(hermano) && esAdulto(hermano);
}

function enPrimaria(hermano) {
  return hermano?.orgGrupo === "primaria" || hermano?.orgKey === "primaria";
}

function enHombresJovenes(hermano) {
  return hermano?.orgGrupo === "hj";
}

function enMujeresJovenes(hermano) {
  return hermano?.orgGrupo === "mj";
}

function enJas(hermano) {
  return !!hermano?.jas;
}

function orgBadgeClass(orgKey) {
  switch (orgKey) {
    case "primaria":
      return "badge-org badge-org--primaria";
    case "diaconos":
    case "maestros":
    case "presbiteros":
      return "badge-org badge-org--hj";
    case "edificadoras":
    case "mensajeras":
    case "guardianas":
      return "badge-org badge-org--mj";
    case "ss":
      return "badge-org badge-org--ss";
    case "elderes":
      return "badge-org badge-org--elderes";
    default:
      return "badge-org";
  }
}

function calcTiempoMiembro(bautismo) {
  const start = parseFecha(bautismo);
  if (!start) return null;

  const today = new Date();
  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  if (today.getDate() < start.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (years < 0) return null;

  if (years === 0 && months === 0) return "Menos de 1 mes";
  if (years === 0) return months === 1 ? "1 mes" : `${months} meses`;
  if (months === 0) return years === 1 ? "1 año" : `${years} años`;
  const anios = years === 1 ? "1 año" : `${years} años`;
  const meses = months === 1 ? "1 mes" : `${months} meses`;
  return `${anios} y ${meses}`;
}

function show(value) {
  return value && String(value).trim() ? value : "—";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function edadTexto(hermano) {
  const edad = calcEdad(hermano.nacimiento);
  if (edad != null) return `${edad} años`;
  return "Edad —";
}

function detailItem(label, valueHtml) {
  return `
    <div class="detail-item">
      <span class="detail-label">${escapeHtml(label)}</span>
      <div class="detail-value">${valueHtml}</div>
    </div>
  `;
}

function llamamientoBadgeClass(hermano) {
  if (hermano.sociedadSocorro) return "badge-ss";
  if (hermano.quorumElderes) return "badge-elderes";
  if (hermano.obispado) return "badge-llamamiento";
  return "badge-llamamiento";
}

function cardBadges(hermano) {
  const badges = [];
  if (hermano.organizacion) {
    badges.push(
      `<span class="${orgBadgeClass(hermano.orgKey)}">${escapeHtml(hermano.organizacion)}</span>`
    );
  }
  if (hermano.jas) {
    badges.push(`<span class="badge-org badge-org--jas">JAS</span>`);
  }
  if (hermano.etiquetaLlamamiento) {
    badges.push(
      `<span class="${llamamientoBadgeClass(hermano)}">${escapeHtml(hermano.etiquetaLlamamiento)}</span>`
    );
  }
  if (hermano.recienConverso) {
    badges.push(`<span class="badge-recien">Recién converso</span>`);
  }
  return badges.length ? `<div class="card-badges">${badges.join("")}</div>` : "";
}

function detailBadges(hermano) {
  const badges = [];
  if (hermano.organizacion) {
    badges.push(
      `<span class="${orgBadgeClass(hermano.orgKey)}">${escapeHtml(hermano.organizacion)}</span>`
    );
  }
  if (hermano.jas) {
    badges.push(`<span class="badge-org badge-org--jas">JAS · 18 a 35</span>`);
  }
  if (hermano.escuelaDominical) {
    badges.push(
      `<span class="badge-org badge-org--ed">${escapeHtml(hermano.escuelaDominical)}</span>`
    );
  }
  if (hermano.etiquetaLlamamiento) {
    badges.push(
      `<span class="${llamamientoBadgeClass(hermano)}">${escapeHtml(hermano.etiquetaLlamamiento)}</span>`
    );
  }
  if (hermano.recienConverso) {
    badges.push(`<span class="badge-recien">Recién converso</span>`);
  }
  return badges.length
    ? `<p class="detail-badge">${badges.join("")}</p>`
    : "";
}

function createCard(hermano, index) {
  const card = document.createElement("article");
  const classes = ["card"];
  if (hermano.recienConverso) classes.push("is-recien");
  if (hermano.obispado) classes.push("is-obispado");
  if (hermano.sociedadSocorro) classes.push("is-ss");
  if (hermano.quorumElderes) classes.push("is-elderes");
  card.className = classes.join(" ");
  card.style.setProperty("--i", Math.min(index, 20));
  card.innerHTML = `
    <button class="card-photo-wrap" type="button" data-id="${hermano.id}" aria-label="Ver detalles de ${escapeHtml(hermano.nombre)}">
      <img
        class="card-photo"
        ${fotoImgAttrs(hermano.fotoArchivo || hermano.foto)}
        alt="Foto de ${escapeHtml(hermano.nombre)}"
        loading="lazy"
        width="400"
        height="400"
      />
    </button>
    <div class="card-body">
      <h2 class="card-name">${escapeHtml(hermano.nombre)}</h2>
      ${cardBadges(hermano)}
      <p class="card-age">${escapeHtml(edadTexto(hermano))}</p>
      <div class="card-actions">
        <button class="card-btn" type="button" data-id="${hermano.id}">
          Más detalles
        </button>
        <button class="card-btn-ministrantes" type="button" data-ministrantes="${hermano.id}">
          ${ICONO_AMIGO}
          Hermanos ministrantes
        </button>
      </div>
    </div>
  `;
  return card;
}

function openMinistrantes(hermano) {
  const assigned = (hermano.hermanosMinistrantes || []).filter(
    (slot) => slot && (typeof slot === "string" ? slot.trim() : slot.nombre)
  );
  const slots = assigned.length ? assigned : [null, null];

  const cards = slots
    .map((slot) => {
      const nombreSlot =
        typeof slot === "string" ? slot : slot?.nombre || "";
      const matched = nombreSlot ? findHermanoByNombre(nombreSlot) : null;
      const nombre = matched
        ? escapeHtml(matched.nombre)
        : nombreSlot
          ? escapeHtml(nombreSlot)
          : "";
      return `
        <article class="ministrante-card">
          <img
            class="ministrante-photo"
            ${fotoImgAttrs(matched?.fotoArchivo || matched?.foto || "")}
            alt="${matched || nombreSlot ? `Foto de ${escapeHtml(matched?.nombre || nombreSlot)}` : "Hermano ministrante por asignar"}"
          />
          <p class="ministrante-name">${nombre || "&nbsp;"}</p>
        </article>
      `;
    })
    .join("");

  ministrantesContent.innerHTML = `
    <h2 class="ministrantes-title" id="ministrantesTitle">Hermanos ministrantes</h2>
    <p class="ministrantes-subtitle">De ${escapeHtml(hermano.nombre)}</p>
    <div class="ministrantes-grid">${cards}</div>
    ${
      assigned.length
        ? ""
        : `<p class="ministrantes-note">Aún no hay hermanos ministrantes asignados.</p>`
    }
  `;

  ministrantes.hidden = false;
  document.body.classList.add("detail-open");
  ministrantesClose.focus();
}

function closeMinistrantes() {
  if (ministrantes.hidden) return;
  ministrantes.hidden = true;
  ministrantesContent.innerHTML = "";
  if (detail.hidden) {
    document.body.classList.remove("detail-open");
  }
}

function updateDetailNav() {
  if (!detailBack || !detailForward) return;
  const canNavigate = detailHistory.length > 1;
  detailBack.disabled = !canNavigate;
  detailForward.disabled = !canNavigate;
}

function openDetail(hermano, options = {}) {
  const fromHistory = options.fromHistory === true;

  if (!fromHistory) {
    const currentId = detailHistory[detailHistoryIndex];
    if (currentId !== hermano.id) {
      detailHistory = detailHistory.slice(0, detailHistoryIndex + 1);
      detailHistory.push(hermano.id);
      detailHistoryIndex = detailHistory.length - 1;
    }
  }

  const edad = calcEdad(hermano.nacimiento);
  const nacimientoText = hermano.nacimiento
    ? `${hermano.nacimiento}${edad != null ? ` (${edad} años)` : ""}`
    : "—";
  const tiempoMiembro =
    hermano.tiempoMiembro || calcTiempoMiembro(hermano.bautismo);

  const telefonoHtml = hermano.telefono
    ? `<a href="${telHref(hermano.telefono)}">${escapeHtml(hermano.telefono)}</a>`
    : "—";
  const correoHtml = hermano.correo
    ? `<a href="mailto:${escapeHtml(hermano.correo)}">${escapeHtml(hermano.correo)}</a>`
    : "—";

  let items = `
    ${detailItem(
      "Estado",
      hermano.recienConverso ? "Recién converso" : "Miembro del barrio"
    )}
    ${detailItem("Organización", escapeHtml(show(hermano.organizacion)))}
    ${
      hermano.escuelaDominical
        ? detailItem("Escuela Dominical", escapeHtml(hermano.escuelaDominical))
        : ""
    }
    ${hermano.jas ? detailItem("Jóvenes Adultos Solteros", "Sí (18 a 35 años)") : ""}
    ${detailItem("Fecha de nacimiento", escapeHtml(nacimientoText))}
    ${detailItem("Sexo", escapeHtml(show(hermano.sexo)))}
  `;

  if (normalize(hermano.sexo) === "varon") {
    items += detailItem("Oficio en el sacerdocio", escapeHtml(show(hermano.oficio)));
  }

  items += `
    ${detailItem("Llamamiento", escapeHtml(show(hermano.llamamiento)))}
    ${detailItem("Fecha de bautismo", escapeHtml(show(hermano.bautismo)))}
    ${detailItem("Tiempo como miembro", escapeHtml(show(tiempoMiembro)))}
    ${detailItem("Teléfono", telefonoHtml)}
    ${detailItem("Correo", correoHtml)}
    ${detailItem("Dirección", escapeHtml(show(hermano.direccion)))}
  `;

  if (hermano.coords) {
    items += detailItem("Ubicación", escapeHtml(hermano.coords));
  }

  items += detailItem("Familia", familiaHtml(hermano.familia, hermano.id));

  if (hermano.observaciones) {
    items += detailItem(
      "Notas",
      escapeHtml(hermano.observaciones).replace(/\n/g, "<br />")
    );
  }

  detailContent.innerHTML = `
    <img
      class="detail-hero"
      ${fotoImgAttrs(hermano.fotoArchivo || hermano.foto)}
      alt="Foto de ${escapeHtml(hermano.nombre)}"
    />
    <div class="detail-body">
      <h2 class="detail-name" id="detailName">${escapeHtml(hermano.nombre)}</h2>
      ${detailBadges(hermano)}
      <p class="detail-org">${escapeHtml(show(hermano.organizacion))}</p>
      <div class="detail-list">${items}</div>
    </div>
  `;

  detail.hidden = false;
  document.body.classList.add("detail-open");
  const panel = detail.querySelector(".detail-panel");
  if (panel) panel.scrollTop = 0;
  updateDetailNav();
  detailClose.focus();
}

function goDetailHistory(step) {
  const total = detailHistory.length;
  if (total <= 1) return;
  const nextIndex = (detailHistoryIndex + step + total) % total;
  const hermano = hermanos.find((h) => h.id === detailHistory[nextIndex]);
  if (!hermano) return;
  detailHistoryIndex = nextIndex;
  openDetail(hermano, { fromHistory: true });
}

function closeDetail() {
  if (detail.hidden) return;
  detail.hidden = true;
  document.body.classList.remove("detail-open");
  detailContent.innerHTML = "";
  detailHistory = [];
  detailHistoryIndex = -1;
  updateDetailNav();
}

function searchableText(h) {
  return [
    h.nombre,
    h.organizacion,
    h.orgKey,
    h.orgGrupo,
    h.escuelaDominical,
    h.jas ? "jas jovenes adultos solteros" : "",
    h.nacimiento,
    h.sexo,
    h.oficio,
    h.llamamiento,
    h.bautismo,
    h.tiempoMiembro,
    h.telefono,
    h.correo,
    h.direccion,
    h.coords,
    h.familia,
    h.observaciones,
    h.recienConverso ? "recien converso recienconversos" : "",
    h.obispado ? "obispado llamamiento" : "",
    enSociedadSocorro(h) ? "sociedad de socorro ss" : "",
    enQuorumElderes(h) ? "quorum de elderes elderes" : "",
    enPrimaria(h) ? "primaria ninos" : "",
    enHombresJovenes(h) ? "hombres jovenes hj" : "",
    enMujeresJovenes(h) ? "mujeres jovenes mj" : "",
    h.sociedadSocorro ? "presidencia sociedad de socorro" : "",
    h.quorumElderes ? "presidencia quorum de elderes" : "",
    h.etiquetaLlamamiento || "",
  ].join(" ");
}

/** Distancia de edición (typos). Optimizada para tokens cortos. */
function levenshtein(a, b) {
  if (a === b) return 0;
  const aLen = a.length;
  const bLen = b.length;
  if (!aLen) return bLen;
  if (!bLen) return aLen;
  if (Math.abs(aLen - bLen) > 3) return 99;
  let prev = new Array(bLen + 1);
  let curr = new Array(bLen + 1);
  for (let j = 0; j <= bLen; j++) prev[j] = j;
  for (let i = 1; i <= aLen; i++) {
    curr[0] = i;
    const ca = a.charCodeAt(i - 1);
    for (let j = 1; j <= bLen; j++) {
      const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    const tmp = prev;
    prev = curr;
    curr = tmp;
  }
  return prev[bLen];
}

function maxEditDistance(tokenLen) {
  if (tokenLen <= 2) return 0;
  if (tokenLen <= 4) return 1;
  if (tokenLen <= 8) return 2;
  return 3;
}

function fuzzyTokenMatch(queryToken, candidateToken) {
  if (!queryToken || !candidateToken) return false;
  if (candidateToken.includes(queryToken) || queryToken.includes(candidateToken)) {
    return true;
  }
  if (
    candidateToken.startsWith(queryToken) ||
    queryToken.startsWith(candidateToken)
  ) {
    return true;
  }
  const maxDist = maxEditDistance(Math.min(queryToken.length, candidateToken.length));
  if (Math.abs(queryToken.length - candidateToken.length) > maxDist) return false;
  return levenshtein(queryToken, candidateToken) <= maxDist;
}

/**
 * Puntaje de búsqueda aproximada.
 * 0 = no coincide. Mayor = más relevante.
 */
function searchMatchScore(h, q) {
  if (!q) return 1;
  const nombre = normalize(h.nombre || "");
  const blob = normalize(searchableText(h));

  if (nombre.includes(q)) return 200 - Math.min(nombre.indexOf(q), 50);
  if (blob.includes(q)) return 120;

  const qTokens = q.split(/\s+/).filter(Boolean);
  if (!qTokens.length) return 0;

  const nameTokensList = nombre.split(/\s+/).filter(Boolean);
  const blobTokensList = blob.split(/\s+/).filter(Boolean);

  let matched = 0;
  let nameHits = 0;
  let distPenalty = 0;

  for (const qt of qTokens) {
    let best = Infinity;
    let hitName = false;
    for (const t of nameTokensList) {
      if (fuzzyTokenMatch(qt, t)) {
        hitName = true;
        best = Math.min(best, levenshtein(qt, t));
      }
    }
    if (hitName) {
      matched++;
      nameHits++;
      distPenalty += best === Infinity ? 0 : best;
      continue;
    }
    for (const t of blobTokensList) {
      if (fuzzyTokenMatch(qt, t)) {
        best = Math.min(best, levenshtein(qt, t));
        matched++;
        distPenalty += best === Infinity ? 0 : best;
        break;
      }
    }
  }

  if (matched < qTokens.length) return 0;
  return 80 + nameHits * 10 - distPenalty;
}

function tieneFoto(h) {
  const foto = String(h?.foto || "").trim();
  return Boolean(foto) && foto !== FOTO_ANON;
}

function telHref(telefono) {
  const raw = String(telefono || "").trim();
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "tel:";
  if (raw.startsWith("+")) return `tel:+${digits}`;
  if (digits.startsWith("56") && digits.length >= 11) return `tel:+${digits}`;
  if (digits.length === 9 || digits.length === 8) return `tel:+56${digits}`;
  return `tel:${digits}`;
}

function getFilterTotals() {
  if (filterTotalsCache) return filterTotalsCache;
  const byKey = (key) => hermanos.filter((h) => h.orgKey === key).length;
  filterTotalsCache = {
    total: hermanos.length,
    conFoto: hermanos.filter((h) => tieneFoto(h)).length,
    recien: hermanos.filter((h) => h.recienConverso).length,
    obispado: hermanos.filter((h) => h.obispado).length,
    primaria: hermanos.filter((h) => enPrimaria(h)).length,
    hj: hermanos.filter((h) => enHombresJovenes(h)).length,
    mj: hermanos.filter((h) => enMujeresJovenes(h)).length,
    diaconos: byKey("diaconos"),
    maestros: byKey("maestros"),
    presbiteros: byKey("presbiteros"),
    edificadoras: byKey("edificadoras"),
    mensajeras: byKey("mensajeras"),
    guardianas: byKey("guardianas"),
    ss: hermanos.filter((h) => enSociedadSocorro(h)).length,
    ssPres: hermanos.filter((h) => h.sociedadSocorro).length,
    elderes: hermanos.filter((h) => enQuorumElderes(h)).length,
    elderesPres: hermanos.filter((h) => h.quorumElderes).length,
    jas: hermanos.filter((h) => enJas(h)).length,
    edJovenes: hermanos.filter((h) =>
      /j[oó]venes/i.test(String(h.escuelaDominical || ""))
    ).length,
    edAdultos: hermanos.filter((h) =>
      /adultos/i.test(String(h.escuelaDominical || ""))
    ).length,
  };
  return filterTotalsCache;
}

function applyFilters() {
  const q = normalize(String(searchInput?.value || "").trim());
  let list = hermanos;

  if (activeFilter === "con-foto") {
    list = list.filter((h) => tieneFoto(h));
  } else if (activeFilter === "recien") {
    list = list.filter((h) => h.recienConverso);
  } else if (activeFilter === "obispado") {
    list = list.filter((h) => h.obispado);
  } else if (activeFilter === "primaria") {
    list = list.filter((h) => enPrimaria(h));
  } else if (activeFilter === "hj") {
    list = list.filter((h) => enHombresJovenes(h));
  } else if (activeFilter === "mj") {
    list = list.filter((h) => enMujeresJovenes(h));
  } else if (
    ["diaconos", "maestros", "presbiteros", "edificadoras", "mensajeras", "guardianas"].includes(
      activeFilter
    )
  ) {
    list = list.filter((h) => h.orgKey === activeFilter);
  } else if (activeFilter === "ss") {
    list = list.filter((h) => enSociedadSocorro(h));
  } else if (activeFilter === "ss-pres") {
    list = list.filter((h) => h.sociedadSocorro);
  } else if (activeFilter === "elderes") {
    list = list.filter((h) => enQuorumElderes(h));
  } else if (activeFilter === "elderes-pres") {
    list = list.filter((h) => h.quorumElderes);
  } else if (activeFilter === "jas") {
    list = list.filter((h) => enJas(h));
  } else if (activeFilter === "ed-jovenes") {
    list = list.filter((h) => /j[oó]venes/i.test(String(h.escuelaDominical || "")));
  } else if (activeFilter === "ed-adultos") {
    list = list.filter((h) => /adultos/i.test(String(h.escuelaDominical || "")));
  }

  if (q) {
    const scored = list
      .map((h) => ({ h, score: searchMatchScore(h, q) }))
      .filter((row) => row.score > 0);
    scored.sort(
      (a, b) =>
        b.score - a.score ||
        String(a.h.nombre || "").localeCompare(String(b.h.nombre || ""), "es")
    );
    list = scored.map((row) => row.h);
  }

  return list;
}

function render(list) {
  if (!directory) return;
  directory.replaceChildren();
  const totals = getFilterTotals();
  const total = totals.total;

  const scopeMap = {
    "con-foto": {
      total: totals.conFoto,
      label: "con foto",
      empty: `0 de ${totals.conFoto} con foto`,
    },
    recien: {
      total: totals.recien,
      label: "recién conversos",
      empty: `0 de ${totals.recien} recién conversos`,
    },
    obispado: {
      total: totals.obispado,
      label: "del obispado",
      empty: `0 de ${totals.obispado} del obispado`,
    },
    primaria: {
      total: totals.primaria,
      label: "de Primaria",
      empty: `0 de ${totals.primaria} de Primaria`,
    },
    hj: {
      total: totals.hj,
      label: "de Hombres Jóvenes",
      empty: `0 de ${totals.hj} de Hombres Jóvenes`,
    },
    mj: {
      total: totals.mj,
      label: "de Mujeres Jóvenes",
      empty: `0 de ${totals.mj} de Mujeres Jóvenes`,
    },
    diaconos: {
      total: totals.diaconos,
      label: "del Cuórum de Diáconos",
      empty: `0 de ${totals.diaconos} diáconos`,
    },
    maestros: {
      total: totals.maestros,
      label: "del Cuórum de Maestros",
      empty: `0 de ${totals.maestros} maestros`,
    },
    presbiteros: {
      total: totals.presbiteros,
      label: "del Cuórum de Presbíteros",
      empty: `0 de ${totals.presbiteros} presbíteros`,
    },
    edificadoras: {
      total: totals.edificadoras,
      label: "Edificadoras de Fe",
      empty: `0 de ${totals.edificadoras} edificadoras`,
    },
    mensajeras: {
      total: totals.mensajeras,
      label: "Mensajeras de Esperanza",
      empty: `0 de ${totals.mensajeras} mensajeras`,
    },
    guardianas: {
      total: totals.guardianas,
      label: "Guardianas de Luz",
      empty: `0 de ${totals.guardianas} guardianas`,
    },
    ss: {
      total: totals.ss,
      label: "de Sociedad de Socorro",
      empty: `0 de ${totals.ss} de Sociedad de Socorro`,
    },
    "ss-pres": {
      total: totals.ssPres,
      label: "de Presidencia SS",
      empty: `0 de ${totals.ssPres} de Presidencia SS`,
    },
    elderes: {
      total: totals.elderes,
      label: "del quórum de élderes",
      empty: `0 de ${totals.elderes} del quórum de élderes`,
    },
    "elderes-pres": {
      total: totals.elderesPres,
      label: "de Presidencia élderes",
      empty: `0 de ${totals.elderesPres} de Presidencia élderes`,
    },
    jas: {
      total: totals.jas,
      label: "JAS (18–35)",
      empty: `0 de ${totals.jas} JAS`,
    },
    "ed-jovenes": {
      total: totals.edJovenes,
      label: "de Escuela Dominical · Jóvenes",
      empty: `0 de ${totals.edJovenes} en ED Jóvenes`,
    },
    "ed-adultos": {
      total: totals.edAdultos,
      label: "de Escuela Dominical · Adultos",
      empty: `0 de ${totals.edAdultos} en ED Adultos`,
    },
  };

  const scope = scopeMap[activeFilter] || {
    total,
    label: "hermanos",
    empty: `0 de ${total} hermanos`,
  };

  if (!list.length) {
    resultsMeta.textContent = scope.empty;
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  resultsMeta.textContent =
    list.length === scope.total
      ? `${list.length} ${scope.label}`
      : `${list.length} de ${scope.total} ${scope.label}`;

  const fragment = document.createDocumentFragment();
  list.forEach((hermano, index) => {
    fragment.appendChild(createCard(hermano, index));
  });
  directory.appendChild(fragment);
}

function refresh() {
  render(applyFilters());
  try {
    requestAnimationFrame(updateScrollControls);
  } catch {
    updateScrollControls();
  }
}

directory?.addEventListener("click", (event) => {
  const ministrantesBtn = event.target.closest(".card-btn-ministrantes");
  if (ministrantesBtn) {
    const hermano = hermanos.find(
      (h) => String(h.id) === ministrantesBtn.dataset.ministrantes
    );
    if (hermano) openMinistrantes(hermano);
    return;
  }

  const openBtn = event.target.closest(".card-btn, .card-photo-wrap");
  if (!openBtn) return;
  const hermano = hermanos.find((h) => String(h.id) === openBtn.dataset.id);
  if (hermano) openDetail(hermano);
});

detailClose.addEventListener("click", closeDetail);
detailBack.addEventListener("click", () => goDetailHistory(-1));
detailForward.addEventListener("click", () => goDetailHistory(1));
ministrantesClose.addEventListener("click", closeMinistrantes);

detail.addEventListener("click", (event) => {
  const familyLink = event.target.closest(".family-link");
  if (familyLink) {
    event.preventDefault();
    const hermano = hermanos.find((h) => String(h.id) === familyLink.dataset.id);
    if (hermano) openDetail(hermano);
    return;
  }
  if (event.target === detail) closeDetail();
});

ministrantes.addEventListener("click", (event) => {
  if (event.target === ministrantes) closeMinistrantes();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (sideMenu && !sideMenu.hidden) {
      closeSideMenu();
      return;
    }
    if (filtersModal && !filtersModal.hidden) {
      closeFiltersModal();
      return;
    }
    if (!ministrantes.hidden) {
      closeMinistrantes();
      return;
    }
    if (!detail.hidden) closeDetail();
    return;
  }
  if (detail.hidden || !ministrantes.hidden) return;
  if (event.key === "ArrowLeft") goDetailHistory(-1);
  if (event.key === "ArrowRight") goDetailHistory(1);
});

let searchDebounceTimer = 0;
searchInput.addEventListener("input", () => {
  window.clearTimeout(searchDebounceTimer);
  searchDebounceTimer = window.setTimeout(refresh, 160);
});

function syncFilterUi() {
  filterButtons.forEach((btn) => {
    const on = btn.dataset.filter === activeFilter;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });

  if (filtersTriggerValue) {
    filtersTriggerValue.textContent = FILTER_LABELS[activeFilter] || "Todos";
  }
  if (filtersOpen) {
    filtersOpen.dataset.active = activeFilter;
    filtersOpen.classList.toggle("is-filtered", activeFilter !== "todos");
  }
}

function openSideMenu() {
  if (!sideMenu) return;
  sideMenu.hidden = false;
  document.body.classList.add("menu-open");
  navOpen?.setAttribute("aria-expanded", "true");
  sideMenuClose?.focus();
}

function closeSideMenu() {
  if (!sideMenu || sideMenu.hidden) return;
  sideMenu.hidden = true;
  document.body.classList.remove("menu-open");
  navOpen?.setAttribute("aria-expanded", "false");
  navOpen?.focus();
}

function openFiltersModal() {
  if (!filtersModal) return;
  closeSideMenu();
  filtersModal.hidden = false;
  document.body.classList.add("filters-open");
  if (filtersOpen) filtersOpen.setAttribute("aria-expanded", "true");
  filtersClose?.focus();
}

function closeFiltersModal() {
  if (!filtersModal || filtersModal.hidden) return;
  filtersModal.hidden = true;
  document.body.classList.remove("filters-open");
  if (filtersOpen) {
    filtersOpen.setAttribute("aria-expanded", "false");
    filtersOpen.focus();
  }
}

function setActiveFilter(nextFilter, { closeModal = false } = {}) {
  activeFilter = nextFilter || "todos";
  syncFilterUi();
  refresh();
  if (closeModal) closeFiltersModal();
}

function highlightDesktopFilters() {
  const desktopFilters = document.querySelector(".filters--desktop");
  if (!desktopFilters) return false;
  const visible = getComputedStyle(desktopFilters).display !== "none";
  if (!visible) return false;
  closeSideMenu();
  desktopFilters.scrollIntoView({ behavior: "smooth", block: "nearest" });
  desktopFilters.classList.remove("is-pulse");
  void desktopFilters.offsetWidth;
  desktopFilters.classList.add("is-pulse");
  window.setTimeout(() => desktopFilters.classList.remove("is-pulse"), 750);
  return true;
}

navOpen?.addEventListener("click", () => {
  if (sideMenu?.hidden) openSideMenu();
  else closeSideMenu();
});

sideMenuClose?.addEventListener("click", closeSideMenu);
sideMenuBackdrop?.addEventListener("click", closeSideMenu);

navFiltersMobile?.addEventListener("click", () => {
  if (!highlightDesktopFilters()) openFiltersModal();
});
navFiltersDesktop?.addEventListener("click", () => {
  if (!highlightDesktopFilters()) openFiltersModal();
});

filtersOpen?.addEventListener("click", () => {
  if (filtersModal?.hidden) openFiltersModal();
  else closeFiltersModal();
});

filtersClose?.addEventListener("click", closeFiltersModal);

filtersModal?.addEventListener("click", (event) => {
  if (event.target === filtersModal) closeFiltersModal();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const fromSheet = btn.classList.contains("filter-option");
    setActiveFilter(btn.dataset.filter || "todos", { closeModal: fromSheet });
  });
});

syncFilterUi();

async function boot() {
  if (resultsMeta) {
    resultsMeta.textContent = "Cargando directorio…";
  }
  try {
    await loadHermanos();
  } catch (error) {
    console.error(error);
    if (resultsMeta) {
      resultsMeta.textContent = "No se pudo cargar el directorio.";
    }
    if (emptyState) {
      emptyState.hidden = false;
      const msg = String(error && error.message ? error.message : "");
      emptyState.textContent = /file:\/\//i.test(location.href) || /file:\/\//i.test(msg)
        ? "Ábrelo con Live Server (no como archivo file://)."
        : msg || "Revisa supabase-config.js o el archivo data/miembros.json.";
    }
    return;
  }

  try {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q && searchInput) {
      searchInput.value = q;
    }
    refresh();
    if (q) {
      const exact = findHermanoByNombre(q);
      const filtered = applyFilters();
      const openTarget =
        exact ||
        (filtered.length === 1
          ? filtered[0]
          : filtered.find((h) => nameTokens(h.nombre) === nameTokens(q)));
      if (openTarget) openDetail(openTarget);
    }
  } catch (error) {
    console.error("[directorio] Error al renderizar:", error);
    if (resultsMeta && hermanos.length) {
      resultsMeta.textContent = `${hermanos.length} hermanos`;
    }
  }
}

boot();

/* ---------- Desplazamiento del directorio ---------- */
const scrollControls = document.getElementById("scrollControls");
const scrollUp = document.getElementById("scrollUp");
const scrollDown = document.getElementById("scrollDown");

function getScrollMax() {
  try {
    const root = document.documentElement;
    const height = root && typeof root.scrollHeight === "number" ? root.scrollHeight : 0;
    const view =
      typeof window.innerHeight === "number"
        ? window.innerHeight
        : root && typeof root.clientHeight === "number"
          ? root.clientHeight
          : 0;
    return Math.max(0, height - view);
  } catch {
    return 0;
  }
}

function updateScrollControls() {
  if (!scrollControls || !scrollUp || !scrollDown) return;

  const max = getScrollMax();
  const y =
    (typeof window.scrollY === "number" ? window.scrollY : 0) ||
    document.documentElement?.scrollTop ||
    0;
  const canScroll = max > 80;

  scrollControls.hidden = !canScroll;
  if (!canScroll) return;

  scrollUp.disabled = y <= 8;
  scrollDown.disabled = y >= max - 8;
}

function scrollDirectory(direction) {
  const max = getScrollMax();
  const next = direction < 0 ? 0 : max;
  window.scrollTo({ top: next, behavior: "smooth" });
}

scrollUp?.addEventListener("click", () => scrollDirectory(-1));
scrollDown?.addEventListener("click", () => scrollDirectory(1));

window.addEventListener("scroll", updateScrollControls, { passive: true });
window.addEventListener("resize", updateScrollControls);
window.addEventListener("load", updateScrollControls);
updateScrollControls();

/* ---------- PWA: instalación ---------- */
const installBtn = document.getElementById("installBtn");
const installBanner = document.getElementById("installBanner");
const installBannerBtn = document.getElementById("installBannerBtn");
const installDismiss = document.getElementById("installDismiss");
const installHint = document.getElementById("installHint");

let deferredInstallPrompt = null;
const INSTALL_DISMISS_KEY = "directorio-install-dismissed";

function isStandaloneApp() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function isIos() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function showInstallUi(mode) {
  if (isStandaloneApp()) return;
  if (localStorage.getItem(INSTALL_DISMISS_KEY) === "1" && mode === "banner") {
    return;
  }

  if (installBtn) installBtn.hidden = false;

  if (mode === "banner" && installBanner) {
    if (isIos()) {
      installHint.textContent =
        "En Safari: Compartir → Agregar a pantalla de inicio.";
      installBannerBtn.hidden = true;
    } else {
      installHint.textContent =
        "Agrégalo a tu pantalla de inicio para usarlo como app.";
      installBannerBtn.hidden = false;
    }
    installBanner.hidden = false;
  }
}

async function promptInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (choice.outcome === "accepted") {
      if (installBanner) installBanner.hidden = true;
      if (installBtn) installBtn.hidden = true;
    }
    return;
  }

  if (isIos()) {
    showInstallUi("banner");
    installHint.textContent =
      "En Safari: toca Compartir y luego “Agregar a pantalla de inicio”.";
  }
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  showInstallUi("banner");
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (installBanner) installBanner.hidden = true;
  if (installBtn) installBtn.hidden = true;
  localStorage.removeItem(INSTALL_DISMISS_KEY);
});

if (installBtn) {
  installBtn.addEventListener("click", promptInstall);
}
if (installBannerBtn) {
  installBannerBtn.addEventListener("click", promptInstall);
}
if (installDismiss) {
  installDismiss.addEventListener("click", () => {
    if (installBanner) installBanner.hidden = true;
    localStorage.setItem(INSTALL_DISMISS_KEY, "1");
  });
}

// iOS no dispara beforeinstallprompt: mostrar ayuda tras unos segundos
if (!isStandaloneApp() && isIos() && localStorage.getItem(INSTALL_DISMISS_KEY) !== "1") {
  window.setTimeout(() => showInstallUi("banner"), 1800);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
