const CACHE = "directorio-llo-lleo-v76";
const ASSETS = [
  "./",
  "./index.html",
  "./admin.html",
  "./admin.css",
  "./admin.js",
  "./fotos-index.js",
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

async function precacheAssets(cache) {
  await Promise.all(
    ASSETS.map(async (asset) => {
      try {
        await cache.add(asset);
      } catch (err) {
        console.warn("[sw] No se pudo precachear", asset, err);
      }
    })
  );
}

function shellPathname(pathname) {
  const p = pathname.replace(/\/+$/, "") || "/";
  return (
    p.endsWith("/") ||
    p.endsWith("/admin.html") ||
    p.endsWith("/admin.js") ||
    p.endsWith("/admin.css") ||
    p.endsWith("/fotos-index.js") ||
    p.endsWith("/index.html") ||
    p.endsWith("/reconocimiento.html") ||
    p.endsWith("/reconocimiento.js") ||
    p.endsWith("/mapa-ministrantes.html") ||
    p.endsWith("/mapa-ministrantes.js") ||
    p.endsWith("/script.js") ||
    p.endsWith("/styles.css") ||
    p.endsWith("/supabase-config.js") ||
    p.endsWith("/miembros.json") ||
    p.endsWith("/manifest.webmanifest")
  );
}

function navigateFallbackUrl(requestUrl) {
  const path = requestUrl.pathname;
  if (path.includes("admin")) return "./admin.html";
  if (path.includes("reconocimiento")) return "./reconocimiento.html";
  if (path.includes("mapa-ministrantes")) return "./mapa-ministrantes.html";
  return "./index.html";
}

async function matchIgnoringSearch(request) {
  const exact = await caches.match(request);
  if (exact) return exact;
  const url = new URL(request.url);
  if (!url.search) return undefined;
  return caches.match(url.pathname + url.hash);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => precacheAssets(cache))
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

  const isShell =
    shellPathname(url.pathname) || event.request.mode === "navigate";

  if (isShell) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => {
              const clean = new Request(url.pathname + url.hash, {
                credentials: event.request.credentials,
                mode: event.request.mode === "navigate" ? "same-origin" : event.request.mode,
              });
              cache.put(clean, clone).catch(() => {
                cache.put(event.request, response.clone()).catch(() => {});
              });
            });
          }
          return response;
        })
        .catch(async () => {
          const cached =
            (await matchIgnoringSearch(event.request)) ||
            (await caches.match(url.pathname)) ||
            (event.request.mode === "navigate"
              ? await caches.match(navigateFallbackUrl(url))
              : undefined);
          return cached || Response.error();
        })
    );
    return;
  }

  // Fotos: red primero para que reemplazos con el mismo nombre se vean al tiro
  const isFoto = url.pathname.includes("/fotos/");
  if (isFoto) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(async () => {
          return (
            (await matchIgnoringSearch(event.request)) ||
            (await caches.match(event.request)) ||
            Response.error()
          );
        })
    );
    return;
  }

  event.respondWith(
    matchIgnoringSearch(event.request).then((cached) => {
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
