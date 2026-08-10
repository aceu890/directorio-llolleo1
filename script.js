const FOTO_ANON = "./icons/avatar-anon.png";

const FOTOS = [
  "Benjamín Alexander Vásquez Zolorsa.png",
  "Bárbara Elizabeth González Salazar.png",
  "Cristopher Bastian Jofré Campos.png",
  "Edgardo José Abarca Neira.png",
  "Eduardo David Enrique Naranjo Gutiérrez.png",
  "Graciela Del Carmen Arpe Torres.png",
  "Isabella Esperanza Illanes Arpe.png",
  "José Manuel Illanes Ceballos.png",
  "Julio Anibal Ramírez Soto.png",
  "Mario Alejandro Rossel Poblete.png",
  "Martina Francisca Escalante Cornejo.png",
  "Matias Ignacio Vega Abarca.png",
  "Matías Alejandro Fuentes Martinez.png",
  "Matías Valentín Leyes Campos.png",
  "Nahuel Nicolás Leyes Campos.png",
  "Omar Ramon Ayala Roman.png",
  "Roberto Pablo Illanes Postigo.png",
  "Rosales Sánchez, Héctor Manuel.png",
  "Támara Elizabeth González León.png",
  "Walther Ivaniet Urbina Peña.png",
  "Wladimir Antonio Sepúlveda Fuentes.png",
];

const hermanos = [
  {
    nombre: "Benjamín Alexander Vásquez Zolorsa",
    organizacion: "Primaria - Valientes",
    nacimiento: "21 ene 2017",
    sexo: "Varón",
    telefono: "9 5051 3322",
    correo: "Caritofuentes561@gmail.com",
    direccion: "Lidia González 734 Llolleo, San Antonio\nSan Antonio\nVALPARAÍSO",
    coords: "-33,618904, -71,60485",
    llamamiento: "Sin llamamiento",
    familia: "Carolina Andrea Fuentes Inayao — 29 abr 1991 (35)\nBenjamín Alexander Vásquez Zolorsa — 21 ene 2017 (9)",
  },
  {
    nombre: "Wladimir Antonio Sepúlveda Fuentes",
    organizacion: "Cuórum sacerdocio Aarónico",
    nacimiento: "8 jun 2009",
    sexo: "Varón",
    telefono: "9 2161 1327",
    correo: "Caritofuentes561@gmail.com",
    direccion: "Lidia Gonzales #734 Llolleo\n266000 Llo Lleo\nVALPARAÍSO",
    coords: "-33.6189, -71.60484",
    llamamiento: "Sin llamamiento",
  },
  {
    nombre: "Matias Ignacio Vega Abarca",
    organizacion: "Escuela Dominical, Quórum de élderes",
    nacimiento: "2 nov 2005",
    sexo: "Varón",
    oficio: "Presbítero",
    telefono: "9 7735 4687",
    correo: "219679890@gmail.com",
    direccion: "1870 Los Cóndores\n2660344 Llo Lleo\nVALPARAÍSO",
    coords: "-33,619923, -71,59591",
    llamamiento: "Sin llamamiento",
    familia: "Isabella e Ignacio",
  },
  {
    nombre: "Martina Francisca Escalante Cornejo",
    organizacion: "Mujeres Jóvenes, Escuela Dominical",
    nacimiento: "24 mar 2011",
    sexo: "Mujer",
    telefono: "9 2932 4923",
    correo: "martina.escalante.co@gmail.com",
    coords: "-33,619087, -71,599434",
    llamamiento: "Sin llamamiento",
    familia: "No hay información",
  },
  {
    nombre: "Héctor Manuel Rosales Sanchez",
    organizacion: "Quórum de élderes, Escuela Dominical",
    nacimiento: "3 sep 1973",
    sexo: "Varón",
    oficio: "Presbítero",
    telefono: "9 7774 8796",
    correo: "Hectormanuelrosalez0@gmail.com",
    direccion: "Los Vantros 1061 San Antonio VALPARAÍSO\n266000 Llo Lleo\nVALPARAÍSO",
    coords: "-33.620552, -71.598694",
    llamamiento: "Sin llamamientos",
    familia: "Tamara y Joel",
  },
  { nombre: "Mario Alejandro Rossel Poblete", sexo: "Varón" },
  { nombre: "Graciela Del Carmen Arpe Torres", sexo: "Mujer" },
  { nombre: "Isabella Esperanza Illanes Arpe", sexo: "Mujer" },
  { nombre: "José Manuel Illanes Ceballos", sexo: "Varón" },
  { nombre: "Roberto Pablo Illanes Postigo", sexo: "Varón" },
  { nombre: "María Laura Farias Fuentes", sexo: "Mujer" },
  { nombre: "Matías Alejandro Fuentes Martinez", sexo: "Varón" },
  { nombre: "Matias Valentin Leyes Campos", sexo: "Varón" },
  { nombre: "Nahuel Nicolás Leyes Campos", sexo: "Varón" },
  { nombre: "Edgardo Jose Abarca Neira", sexo: "Varón" },
  { nombre: "Omar Ramon Ayala Roman", sexo: "Varón" },
  { nombre: "Eduardo David Enrique Naranjo Gutierrez", sexo: "Varón" },
  { nombre: "Alicia Cecilia Meza Pizarro", sexo: "Mujer" },
  { nombre: "Cristopher Bastian Jofré Campos", sexo: "Varón" },
  { nombre: "Barbara Elizabeth Gonzalez Salazar", sexo: "Mujer" },
  { nombre: "Mateo Ignacio León Silva", sexo: "Varón" },
  { nombre: "Támara Elizabeth Gonzalez Leon", sexo: "Mujer" },
  { nombre: "Julio Anibal Ramírez Soto", sexo: "Varón" },
  { nombre: "Walther Ivaniet Urbina Peña", sexo: "Varón" },
  { nombre: "Fernando Alonso Cerda Poblete", sexo: "Varón" },
  { nombre: "Hector Ignacio León Pinto", sexo: "Varón" },
  { nombre: "Yoel Alejandro Córdova González", sexo: "Varón" },
  { nombre: "Tomas Alejandro Cortez Daza", sexo: "Varón" },
  { nombre: "Gabriela Soledad Contreras Zuñiga", sexo: "Mujer" },
  { nombre: "Josefa Paz Diaz Jeria", sexo: "Mujer" },
  { nombre: "Felipe Esteban Pinto Jauregui", sexo: "Varón" },
  { nombre: "José Miguel Diaz Muñoz", sexo: "Varón" },
  { nombre: "Thiare Andrea Donoso Vilches", sexo: "Mujer" },
  { nombre: "Dominique Dayanet Donoso Vilches", sexo: "Mujer" },
  { nombre: "Claudia Maricel Vilches Arenas", sexo: "Mujer" },
  { nombre: "Pedro Leon Walker Ramirez", sexo: "Varón" },
  { nombre: "David Francisco Flores Contreras", sexo: "Varón" },
  { nombre: "Nancy Del Carmen Varas Nitor", sexo: "Mujer" },
  { nombre: "Pascuala Blanca Arratia Zambrano", sexo: "Mujer" },
  { nombre: "Javiera Antonia Núñez Pineda", sexo: "Mujer" },
  { nombre: "Rosa del Carmen Pardo Basaure", sexo: "Mujer" },
  { nombre: "Hernan Enrique Aravena Martínez", sexo: "Varón" },
  { nombre: "Catalina Ignacia Aravena Toro", sexo: "Mujer" },
  { nombre: "Carlos Fernando Soto Godoy", sexo: "Varón" },
  { nombre: "Pilar De Lourdes Toro Pontigo", sexo: "Mujer" },
  { nombre: "Alejandro Luis Castro Silva", sexo: "Varón" },
  { nombre: "Camilo Andrés Farias Ortega", sexo: "Varón" },
  { nombre: "Manuel Antonio Pailamilla Abarza", sexo: "Varón" },
  { nombre: "Juan Eduardo Acevedo Mendoza", sexo: "Varón" },
  { nombre: "Silvia Del Carmen Delgado Abarzua", sexo: "Mujer" },
  { nombre: "Isidora Ignacia Riquelme Jofre", sexo: "Mujer" },
  { nombre: "Nicolas Gabriel Hauser Rogget", sexo: "Varón" },
  { nombre: "Felipe Octavio Caceres Olivera", sexo: "Varón" },
  { nombre: "Andres Felipe Erazo Salgado", sexo: "Varón" },
];

const directory = document.getElementById("directory");
const searchInput = document.getElementById("search");
const resultsMeta = document.getElementById("resultsMeta");
const emptyState = document.getElementById("emptyState");
const detail = document.getElementById("detail");
const detailContent = document.getElementById("detailContent");
const detailClose = document.getElementById("detailClose");

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

const fotoPorNombre = new Map(
  FOTOS.map((file) => [nameTokens(nombreDesdeArchivo(file)), fotoUrl(file)])
);

function fotoDePerfil(nombre) {
  return fotoPorNombre.get(nameTokens(nombre)) || FOTO_ANON;
}

hermanos.forEach((hermano, index) => {
  hermano.id = index;
  hermano.foto = fotoDePerfil(hermano.nombre);
});

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

function createCard(hermano, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.style.setProperty("--i", Math.min(index, 20));
  card.innerHTML = `
    <img
      class="card-photo"
      src="${hermano.foto || FOTO_ANON}"
      alt="Foto de ${escapeHtml(hermano.nombre)}"
      onerror="this.onerror=null;this.src='${FOTO_ANON}'"
      loading="lazy"
      width="400"
      height="448"
    />
    <div class="card-body">
      <h2 class="card-name">${escapeHtml(hermano.nombre)}</h2>
      <p class="card-age">${escapeHtml(edadTexto(hermano))}</p>
      <p class="card-org">${escapeHtml(show(hermano.organizacion))}</p>
      <button class="card-btn" type="button" data-id="${hermano.id}">
        Más detalles
      </button>
    </div>
  `;
  return card;
}

function openDetail(hermano) {
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

  items += detailItem("Familia", escapeHtml(show(hermano.familia)));

  detailContent.innerHTML = `
    <img
      class="detail-hero"
      src="${hermano.foto || FOTO_ANON}"
      alt="Foto de ${escapeHtml(hermano.nombre)}"
      onerror="this.onerror=null;this.src='${FOTO_ANON}'"
    />
    <div class="detail-body">
      <h2 class="detail-name" id="detailName">${escapeHtml(hermano.nombre)}</h2>
      <p class="detail-org">${escapeHtml(show(hermano.organizacion))}</p>
      <div class="detail-list">${items}</div>
    </div>
  `;

  detail.hidden = false;
  document.body.classList.add("detail-open");
  detailClose.focus();
}

function closeDetail() {
  if (detail.hidden) return;
  detail.hidden = true;
  document.body.classList.remove("detail-open");
  detailContent.innerHTML = "";
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
  ].join(" ");
}

function render(list) {
  directory.replaceChildren();
  const total = hermanos.length;

  if (!list.length) {
    resultsMeta.textContent = `0 de ${total} hermanos`;
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  resultsMeta.textContent =
    list.length === total
      ? `${total} hermanos`
      : `${list.length} de ${total} hermanos`;

  const fragment = document.createDocumentFragment();
  list.forEach((hermano, index) => {
    fragment.appendChild(createCard(hermano, index));
  });
  directory.appendChild(fragment);
}

function filterHermanos(query) {
  const q = normalize(query.trim());
  if (!q) return hermanos;
  return hermanos.filter((h) => normalize(searchableText(h)).includes(q));
}

directory.addEventListener("click", (event) => {
  const button = event.target.closest(".card-btn");
  if (!button) return;
  const hermano = hermanos.find((h) => String(h.id) === button.dataset.id);
  if (hermano) openDetail(hermano);
});

detailClose.addEventListener("click", closeDetail);

detail.addEventListener("click", (event) => {
  if (event.target === detail) closeDetail();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetail();
});

searchInput.addEventListener("input", () => {
  render(filterHermanos(searchInput.value));
});

render(hermanos);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
