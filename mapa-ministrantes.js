/* Mapa ordenado de hermanos ministrantes → ministrados */

const FOTO_ANON = "./icons/avatar-anon.png";

const statusDot = document.getElementById("mapStatusDot");
const statusLabel = document.getElementById("mapStatusLabel");
const statusMeta = document.getElementById("mapStatusMeta");
const mapSearch = document.getElementById("mapSearch");
const mapBoard = document.getElementById("mapBoard");
const mapBoardCount = document.getElementById("mapBoardCount");

const navOpen = document.getElementById("navOpen");
const sideMenu = document.getElementById("sideMenu");
const sideMenuClose = document.getElementById("sideMenuClose");
const sideMenuBackdrop = document.getElementById("sideMenuBackdrop");

let hermanos = [];
let groups = [];

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function nameTokens(text) {
  return normalize(text)
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .sort()
    .join(" ");
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fotoUrl(filename) {
  return `./fotos/${encodeURIComponent(filename)}`;
}

function getSupabaseConfig() {
  const cfg = window.SUPABASE_CONFIG || {};
  const url = String(cfg.url || "").trim().replace(/\/$/, "");
  const anonKey = String(cfg.anonKey || "").trim();
  if (!url || !anonKey) return null;
  return { url, anonKey };
}

async function fetchMiembros() {
  const cfg = getSupabaseConfig();
  if (cfg) {
    const headers = {
      apikey: cfg.anonKey,
      Authorization: `Bearer ${cfg.anonKey}`,
      Accept: "application/json",
    };
    const tryFetch = async (select) => {
      const endpoint = `${cfg.url}/rest/v1/miembros?select=${select}&order=nombre.asc`;
      const response = await fetch(endpoint, { headers });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Supabase ${response.status}`);
      }
      const rows = await response.json();
      if (!Array.isArray(rows) || !rows.length) throw new Error("Supabase sin miembros");
      return rows;
    };
    try {
      return await tryFetch("id,nombre,foto,hermanos_ministrantes");
    } catch (error) {
      const msg = String(error?.message || error || "");
      if (/hermanos_ministrantes|PGRST204|42703/i.test(msg)) {
        console.warn("[mapa] Columna hermanos_ministrantes ausente; carga sin relaciones.");
        try {
          return await tryFetch("id,nombre,foto");
        } catch (err2) {
          console.warn("[mapa] Fallback local.", err2);
        }
      } else {
        console.warn("[mapa] Supabase no disponible, usando JSON local.", error);
      }
    }
  }
  const response = await fetch("./data/miembros.json", { cache: "no-cache" });
  if (!response.ok) throw new Error(`No se pudo cargar el directorio (${response.status})`);
  const rows = await response.json();
  if (!Array.isArray(rows) || !rows.length) throw new Error("Directorio vacío");
  return rows;
}

function setStatus(state, label, meta) {
  if (statusDot) statusDot.dataset.state = state;
  if (statusLabel) statusLabel.textContent = label;
  if (statusMeta) statusMeta.textContent = meta || "";
}

function slotNombre(slot) {
  if (!slot) return "";
  if (typeof slot === "string") return slot.trim();
  return String(slot.nombre || "").trim();
}

function findByNombre(nombre) {
  const key = nameTokens(nombre);
  if (!key) return null;
  let best = null;
  let bestScore = 0;
  const wanted = key.split(" ");
  for (const h of hermanos) {
    const tokens = nameTokens(h.nombre).split(" ");
    const set = new Set(tokens);
    let hit = 0;
    for (const t of wanted) if (set.has(t)) hit += 1;
    const score = hit / Math.max(wanted.length, tokens.length);
    if (wanted.length >= 2 && wanted.every((t) => set.has(t)) && score > bestScore) {
      bestScore = Math.max(score, 0.9);
      best = h;
    } else if (score > bestScore) {
      bestScore = score;
      best = h;
    }
  }
  return bestScore >= 0.7 ? best : null;
}

function personCard(person, fallbackName) {
  const nombre = person?.nombre || fallbackName || "Sin nombre";
  const foto = person?.foto || FOTO_ANON;
  const href = `./index.html?q=${encodeURIComponent(nombre)}`;
  return `
    <a class="map-person" href="${href}">
      <img
        class="map-person-photo"
        src="${escapeHtml(foto)}"
        alt=""
        loading="lazy"
        onerror="this.onerror=null;this.src='${FOTO_ANON}'"
      />
      <span class="map-person-name">${escapeHtml(nombre)}</span>
    </a>
  `;
}

function companionshipKey(ministrantes) {
  return ministrantes
    .map((p) => String(p.id))
    .sort()
    .join("|");
}

function buildGroups(rows) {
  hermanos = (rows || []).map((row, index) => ({
    id: String(row.id ?? index),
    nombre: row.nombre || "",
    foto: row.foto ? fotoUrl(row.foto) : FOTO_ANON,
    hermanosMinistrantes: row.hermanos_ministrantes || row.hermanosMinistrantes || [],
  }));

  const byCompanionship = new Map();

  for (const ministrado of hermanos) {
    const slots = Array.isArray(ministrado.hermanosMinistrantes)
      ? ministrado.hermanosMinistrantes
      : [];
    const ministrantes = [];
    const seen = new Set();

    for (const slot of slots) {
      const nombre = slotNombre(slot);
      if (!nombre) continue;
      const found = findByNombre(nombre);
      const key = found?.id || normalize(nombre);
      if (seen.has(key)) continue;
      if (found && found.id === ministrado.id) continue;
      seen.add(key);
      ministrantes.push(
        found || {
          id: `name:${nombre}`,
          nombre,
          foto: FOTO_ANON,
        }
      );
    }

    if (!ministrantes.length) continue;
    ministrantes.sort((a, b) =>
      a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
    );

    const key = companionshipKey(ministrantes);
    if (!byCompanionship.has(key)) {
      byCompanionship.set(key, {
        id: key,
        ministrantes,
        ministrados: [],
      });
    }
    const group = byCompanionship.get(key);
    if (!group.ministrados.some((m) => m.id === ministrado.id)) {
      group.ministrados.push(ministrado);
    }
  }

  const result = [...byCompanionship.values()];
  result.forEach((group) => {
    group.ministrados.sort((a, b) =>
      a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
    );
  });
  result.sort((a, b) => {
    const aName = a.ministrantes.map((p) => p.nombre).join(" ");
    const bName = b.ministrantes.map((p) => p.nombre).join(" ");
    return aName.localeCompare(bName, "es", { sensitivity: "base" });
  });

  return result;
}

function matchesQuery(group, query) {
  const q = normalize(query).trim();
  if (!q) return true;
  if (group.ministrados.some((p) => normalize(p.nombre).includes(q))) return true;
  return group.ministrantes.some((p) => normalize(p.nombre).includes(q));
}

function renderBoard(query = "") {
  if (!mapBoard) return;
  const visible = groups.filter((g) => matchesQuery(g, query));

  if (mapBoardCount) {
    mapBoardCount.textContent = visible.length
      ? `${visible.length} compañerismo${visible.length === 1 ? "" : "s"}`
      : "";
  }

  if (!groups.length) {
    mapBoard.innerHTML = `
      <p class="map-empty">
        Todavía no hay asignaciones. En Admin → Hermanos puedes elegir ministrantes
        para cada hermano.
      </p>`;
    return;
  }

  if (!visible.length) {
    mapBoard.innerHTML = `<p class="map-empty">No hay coincidencias con “${escapeHtml(query)}”.</p>`;
    return;
  }

  mapBoard.innerHTML = `
    <div class="map-board-header" aria-hidden="true">
      <div class="map-board-header-col">Ministrantes</div>
      <div class="map-board-header-gap"></div>
      <div class="map-board-header-col">Ministrado(s)</div>
    </div>
    ${visible
      .map(
        (group, index) => `
      <article class="map-row" style="--i:${index}">
        <div class="map-row-col map-row-col--givers">
          <p class="map-row-mobile-label">Ministrantes</p>
          <div class="map-people-stack">
            ${group.ministrantes.map((p) => personCard(p)).join("")}
          </div>
        </div>
        <div class="map-row-arrow" aria-hidden="true">
          <span>ministra a</span>
          <svg class="map-arrow-icon map-arrow-icon--down" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.4">
            <path d="M12 4v14M6 13l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg class="map-arrow-icon map-arrow-icon--right" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M4 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="map-row-col map-row-col--receiver">
          <p class="map-row-mobile-label">Ministrado${group.ministrados.length > 1 ? "s" : ""}</p>
          <div class="map-people-stack">
            ${group.ministrados.map((p) => personCard(p)).join("")}
          </div>
        </div>
      </article>`
      )
      .join("")}
  `;
}

function openMenu() {
  if (!sideMenu) return;
  sideMenu.hidden = false;
  document.body.classList.add("menu-open");
  navOpen?.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  if (!sideMenu) return;
  sideMenu.hidden = true;
  document.body.classList.remove("menu-open");
  navOpen?.setAttribute("aria-expanded", "false");
  navOpen?.focus();
}

navOpen?.addEventListener("click", () => {
  if (sideMenu?.hidden) openMenu();
  else closeMenu();
});
sideMenuClose?.addEventListener("click", closeMenu);
sideMenuBackdrop?.addEventListener("click", closeMenu);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sideMenu && !sideMenu.hidden) closeMenu();
});

mapSearch?.addEventListener("input", () => {
  renderBoard(mapSearch.value || "");
});

async function boot() {
  try {
    setStatus("loading", "Cargando relaciones…", "Directorio y asignaciones");
    const rows = await fetchMiembros();
    groups = buildGroups(rows);
    renderBoard("");

    if (!groups.length) {
      setStatus(
        "ready",
        "Sin relaciones todavía",
        "Asigna ministrantes en Admin → Hermanos"
      );
    } else {
      const people = new Set();
      let ministradosCount = 0;
      groups.forEach((g) => {
        g.ministrantes.forEach((p) => people.add(p.id));
        g.ministrados.forEach((p) => {
          people.add(p.id);
          ministradosCount += 1;
        });
      });
      setStatus(
        "ready",
        "Mapa listo",
        `${groups.length} compañerismo${groups.length === 1 ? "" : "s"} · ${ministradosCount} ministrado${ministradosCount === 1 ? "" : "s"}`
      );
    }
  } catch (error) {
    console.error(error);
    setStatus("error", "No se pudo cargar el mapa", error.message || "Error");
    if (mapBoard) {
      mapBoard.innerHTML = `<p class="map-empty">${escapeHtml(error.message || "Error al cargar")}</p>`;
    }
  }
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

boot();
