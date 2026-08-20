const CACHE = "directorio-llo-lleo-v48";
const ASSETS = [
  "./",
  "./index.html",
  "./admin.html",
  "./admin.css",
  "./admin.js",
  "./reconocimiento.html",
  "./reconocimiento.js",
  "./mapa-ministrantes.html",
  "./mapa-ministrantes.js",
  "./styles.css",
  "./script.js",
  "./supabase-config.js",
  "./data/miembros.json",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/avatar-anon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // App shell: network first, cache fallback
  const isShell =
    url.pathname.endsWith("/") ||
    url.pathname.endsWith("/admin.html") ||
    url.pathname.endsWith("/admin.js") ||
    url.pathname.endsWith("/admin.css") ||
    url.pathname.endsWith("/index.html") ||
    url.pathname.endsWith("/reconocimiento.html") ||
    url.pathname.endsWith("/reconocimiento.js") ||
    url.pathname.endsWith("/mapa-ministrantes.html") ||
    url.pathname.endsWith("/mapa-ministrantes.js") ||
    url.pathname.endsWith("/script.js") ||
    url.pathname.endsWith("/styles.css") ||
    url.pathname.endsWith("/supabase-config.js") ||
    url.pathname.endsWith("/miembros.json") ||
    url.pathname.endsWith("/manifest.webmanifest");

  if (isShell || event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(event.request);
          if (cached) return cached;
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
          return Response.error();
        })
    );
    return;
  }

  // Images and other local assets: cache first
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || network;
    })
  );
});
