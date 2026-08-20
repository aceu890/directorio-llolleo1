const FOTO_ANON = "./icons/avatar-anon.png";

const FOTOS = [
  "Alicia Cecilia Meza Pizarro.jpeg",
  "Alicia del Carmen de Peña Jerez.png",
  "Andrea Francisca de Fuentes Molina.png",
  "Bárbara Elizabeth González Salazar.png",
  "Benjamín Alexander Vásquez Zolorsa.png",
  "Cristian Alexander Cortez Benavente.png",
  "Cristopher Bastian Jofré Campos.jpeg",
  "Cristopher Bastian Jofré Campos.png",
  "Da Vía Rubio Lucas Maximiliano.jpeg",
  "Dafnhe Monserrat Echaniz Maripangui.png",
  "Daniela Beatriz Jeria Nuñez.png",
  "David Francisco Flores Contreras.jpeg",
  "David Joel Ramos Torres.jpeg",
  "Diego Aaron Miranda Acevedo.jpeg",
  "Edgardo José Abarca Neira.png",
  "Eduardo Alberto Castillo Fuentes.png",
  "Eduardo David Enrique Naranjo Gutiérrez.png",
  "Elias Benjamin Torres Jimenez.png",
  "Elvira del Carmen Núñez Ureta.jpeg",
  "Emma Maritza de Pineda Urra.jpeg",
  "Eugenia Margarita de Wilches Martínez.jpeg",
  "Fernanda Belén Meza Soto.png",
  "Fernando Andrés Soto Gazul.png",
  "Francesco Alejandro Davía Rubio.jpeg",
  "Gonzalo Aaron Miranda Acevedo.jpeg",
  "Graciela Del Carmen Arpe Torres.jpeg",
  "Héctor Ignacio León Pinto.png",
  "Hernan Enrique Aravena Martínez.jpeg",
  "Ignacio Aaron Miranda Acevedo.jpeg",
  "Iris del Pilar Duque Cáceres.jpeg",
  "Isabella Esperanza Illanes Arpe.png",
  "Jesús Alberto Torres Benavente.png",
  "Joaquín Ignacio Torres Jiménez.png",
  "José Manuel Illanes Ceballos.png",
  "Julio Anibal Ramírez Soto.png",
  "Laura Elizabeth Acevedo Rojas.png",
  "León Baltazar maureira peñailillo.png",
  "Leonardo Esteban Wilches Martínez.jpeg",
  "Leonardo Nelson Wilches Santibáñez.png",
  "Luciano Rafael Antonio Hernández Inostroza.jpeg",
  "Lucresia del Carmen de Delgado Atenas.jpeg",
  "Luis Alberto Cornejo Mancilla.png",
  "Manuel Antonio Pailamilla Abarza.jpeg",
  "Marco Antonio Hernandez Ruiz.png",
  "Margarita del Pilar de Meza Soto.jpeg",
  "Maria Cristina Jimenez Ramirez.png",
  "María Cristina Jiménez Ramírez.png",
  "Mario Alejandro Rossel Poblete.png",
  "Marisol Andrea de Hernandez Inostroza.jpeg",
  "Martina Francisca Escalante Cornejo.png",
  "Mateo Alonso Hernández Inostroza.png",
  "Matías Alejandro Fuentes Martinez.png",
  "Matias Ignacio Vega Abarca.png",
  "Matías Valentín Leyes Campos.png",
  "Nahomi Maira Pañailillo Meza.png",
  "Nahuel Nicolás Leyes Campos.png",
  "Nancy de Lourdes de Acevedo Rojas.jpeg",
  "Nicolás Aarón Miranda Acevedo.jpeg",
  "Omar Ramon Ayala Roman.png",
  "Paola Andrea de Castillo Silva.jpeg",
  "Pascuala Blanca Arratia Zambrano.jpeg",
  "Pilar de Lourdes Toro Pontigo.jpeg",
  "Raúl Antonio Arce Huerta.png",
  "Roberto Pablo Illanes Postigo.png",
  "Romina Rubio Luna.jpeg",
  "Rosales Sánchez, Héctor Manuel.png",
  "Santiago Solanille Clavero.png",
  "Támara Elizabeth González León.png",
  "Verónica Elizabeth de Peñailillo Meza.png",
  "Víctor Manuel Román Jiménez.png",
  "Víctor Orlando Acevedo Nacaratte.png",
  "Walther Ivaniet Urbina Peña.jpeg",
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
  ss: "Sociedad de Socorro",
  "ss-pres": "Presidencia SS",
  elderes: "Quórum de élderes",
  "elderes-pres": "Presidencia élderes",
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

function fotoUrl(filename) {
  return `./fotos/${encodeURIComponent(filename)}`;
}

/** Si el archivo en BD ya no existe, usa otra extensión con el mismo nombre. */
function resolveFotoArchivo(filename) {
  const name = String(filename || "").trim();
  if (!name) return null;
  if (FOTOS.includes(name)) return name;
  const base = name.replace(/\.[^.]+$/, "");
  const alt = FOTOS.find((f) => f.replace(/\.[^.]+$/, "") === base);
  return alt || name;
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

const fotoPorNombre = new Map();

for (const file of FOTOS) {
  const fromFile = nombreDesdeArchivo(file);
  const url = fotoUrl(file);
  fotoPorNombre.set(nameTokens(fromFile), url);

  // Emparejar también con el nombre canónico del directorio
  let best = null;
  let bestScore = 0;
  for (const h of hermanos) {
    const score = overlapNombreScore(fromFile, h.nombre);
    const fileTokens = nameTokens(fromFile).split(" ").filter(Boolean);
    const hermanoTokens = nameTokens(h.nombre).split(" ").filter(Boolean);
    const covers =
      fileTokens.length >= 3 &&
      fileTokens.every((t) => hermanoTokens.includes(t)) &&
      // Evitar asignar la foto a un pariente con nombre parecido
      Math.abs(fileTokens.length - hermanoTokens.length) <= 1;
    const effective = covers ? Math.max(score, 0.95) : score;
    if (effective > bestScore) {
      bestScore = effective;
      best = h;
    }
  }
  if (best && bestScore >= 0.85) {
    fotoPorNombre.set(nameTokens(best.nombre), url);
  }
}

function fotoDePerfil(nombre) {
  const key = nameTokens(nombre);
  if (fotoPorNombre.has(key)) return fotoPorNombre.get(key);

  let bestUrl = null;
  let bestScore = 0;
  for (const [photoKey, url] of fotoPorNombre) {
    const score = overlapNombreScore(key, photoKey);
    if (score > bestScore) {
      bestScore = score;
      bestUrl = url;
    }
  }
  return bestScore >= 0.9 ? bestUrl : FOTO_ANON;
}

let hermanosPorNombre = new Map();

function mapMiembroRow(row, index) {
  const fotoArchivo = resolveFotoArchivo(row.foto);
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
    foto: fotoArchivo ? fotoUrl(fotoArchivo) : fotoDePerfil(row.nombre || ""),
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
  hermanosPorNombre = new Map(
    hermanos.map((h) => [nameTokens(h.nombre), h])
  );
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
  try {
    const remote = await fetchMiembrosFromSupabase();
    if (remote) {
      setHermanosFromRows(remote);
      console.info(`[directorio] ${hermanos.length} miembros desde Supabase`);
      return "supabase";
    }
  } catch (error) {
    console.warn("[directorio] Supabase no disponible, usando datos locales.", error);
  }

  const local = await fetchMiembrosFromLocalJson();
  setHermanosFromRows(local);
  console.info(`[directorio] ${hermanos.length} miembros desde data/miembros.json`);
  return "local";
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

function esVaron(hermano) {
  return /var[oó]n/i.test(String(hermano?.sexo || ""));
}

function esMujer(hermano) {
  return /mujer/i.test(String(hermano?.sexo || ""));
}

function esAdulto(hermano) {
  const edad = calcEdad(hermano?.nacimiento);
  return edad != null && edad >= 18;
}

/** Quórum de élderes completo: varones de 18 años o más */
function enQuorumElderes(hermano) {
  return esVaron(hermano) && esAdulto(hermano);
}

/** Sociedad de Socorro completa: mujeres de 18 años o más */
function enSociedadSocorro(hermano) {
  return esMujer(hermano) && esAdulto(hermano);
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
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
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
        src="${hermano.foto || FOTO_ANON}"
        alt="Foto de ${escapeHtml(hermano.nombre)}"
        onerror="this.onerror=null;this.src='${FOTO_ANON}'"
        loading="lazy"
        width="400"
        height="400"
      />
      ${cardBadges(hermano)}
    </button>
    <div class="card-body">
      <h2 class="card-name">${escapeHtml(hermano.nombre)}</h2>
      <p class="card-age">${escapeHtml(edadTexto(hermano))}</p>
      <p class="card-org">${escapeHtml(show(hermano.organizacion))}</p>
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
      const foto = matched?.foto || FOTO_ANON;
      const nombre = matched
        ? escapeHtml(matched.nombre)
        : nombreSlot
          ? escapeHtml(nombreSlot)
          : "";
      return `
        <article class="ministrante-card">
          <img
            class="ministrante-photo"
            src="${foto}"
            alt="${matched || nombreSlot ? `Foto de ${escapeHtml(matched?.nombre || nombreSlot)}` : "Hermano ministrante por asignar"}"
            onerror="this.onerror=null;this.src='${FOTO_ANON}'"
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
    ? `<a href="tel:+56${String(hermano.telefono).replace(/\D/g, "")}">${escapeHtml(hermano.telefono)}</a>`
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
    ${detailItem("Fecha de nacimiento", escapeHtml(nacimientoText))}
    ${detailItem("Sexo", escapeHtml(show(hermano.sexo)))}
  `;

  if (hermano.sexo === "Varón") {
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
      src="${hermano.foto || FOTO_ANON}"
      alt="Foto de ${escapeHtml(hermano.nombre)}"
      onerror="this.onerror=null;this.src='${FOTO_ANON}'"
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
    h.sociedadSocorro ? "presidencia sociedad de socorro" : "",
    h.quorumElderes ? "presidencia quorum de elderes" : "",
    h.etiquetaLlamamiento || "",
  ].join(" ");
}

function tieneFoto(h) {
  const foto = String(h?.foto || "").trim();
  return Boolean(foto) && foto !== FOTO_ANON;
}

function applyFilters() {
  const q = normalize(searchInput.value.trim());
  let list = hermanos;

  if (activeFilter === "con-foto") {
    list = list.filter((h) => tieneFoto(h));
  } else if (activeFilter === "recien") {
    list = list.filter((h) => h.recienConverso);
  } else if (activeFilter === "obispado") {
    list = list.filter((h) => h.obispado);
  } else if (activeFilter === "ss") {
    list = list.filter((h) => enSociedadSocorro(h));
  } else if (activeFilter === "ss-pres") {
    list = list.filter((h) => h.sociedadSocorro);
  } else if (activeFilter === "elderes") {
    list = list.filter((h) => enQuorumElderes(h));
  } else if (activeFilter === "elderes-pres") {
    list = list.filter((h) => h.quorumElderes);
  }

  if (q) {
    list = list.filter((h) => normalize(searchableText(h)).includes(q));
  }

  return list;
}

function render(list) {
  directory.replaceChildren();
  const total = hermanos.length;
  const totalConFoto = hermanos.filter((h) => tieneFoto(h)).length;
  const totalRecien = hermanos.filter((h) => h.recienConverso).length;
  const totalObispado = hermanos.filter((h) => h.obispado).length;
  const totalSs = hermanos.filter((h) => enSociedadSocorro(h)).length;
  const totalSsPres = hermanos.filter((h) => h.sociedadSocorro).length;
  const totalElderes = hermanos.filter((h) => enQuorumElderes(h)).length;
  const totalElderesPres = hermanos.filter((h) => h.quorumElderes).length;

  const scopeMap = {
    "con-foto": {
      total: totalConFoto,
      label: "con foto",
      empty: `0 de ${totalConFoto} con foto`,
    },
    recien: { total: totalRecien, label: "recién conversos", empty: `0 de ${totalRecien} recién conversos` },
    obispado: { total: totalObispado, label: "del obispado", empty: `0 de ${totalObispado} del obispado` },
    ss: { total: totalSs, label: "de Sociedad de Socorro", empty: `0 de ${totalSs} de Sociedad de Socorro` },
    "ss-pres": {
      total: totalSsPres,
      label: "de Presidencia SS",
      empty: `0 de ${totalSsPres} de Presidencia SS`,
    },
    elderes: {
      total: totalElderes,
      label: "del quórum de élderes",
      empty: `0 de ${totalElderes} del quórum de élderes`,
    },
    "elderes-pres": {
      total: totalElderesPres,
      label: "de Presidencia élderes",
      empty: `0 de ${totalElderesPres} de Presidencia élderes`,
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
  requestAnimationFrame(updateScrollControls);
}

directory.addEventListener("click", (event) => {
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

searchInput.addEventListener("input", refresh);

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
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q && searchInput) {
      searchInput.value = q;
    }
    refresh();
  } catch (error) {
    console.error(error);
    if (resultsMeta) {
      resultsMeta.textContent = "No se pudo cargar el directorio.";
    }
    if (emptyState) {
      emptyState.hidden = false;
      emptyState.textContent =
        "Revisa supabase-config.js o el archivo data/miembros.json.";
    }
  }
}

boot();

/* ---------- Desplazamiento del directorio ---------- */
const scrollControls = document.getElementById("scrollControls");
const scrollUp = document.getElementById("scrollUp");
const scrollDown = document.getElementById("scrollDown");

function getScrollMax() {
  return Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
}

function updateScrollControls() {
  if (!scrollControls || !scrollUp || !scrollDown) return;

  const max = getScrollMax();
  const y = window.scrollY || document.documentElement.scrollTop || 0;
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
