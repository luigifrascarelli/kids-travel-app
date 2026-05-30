// ╔══════════════════════════════════════════════════════════════╗
// ║  GABI AVENTURAS — SERVICE WORKER                             ║
// ║  Cache-first strategy. All app assets cached on install.     ║
// ╚══════════════════════════════════════════════════════════════╝

const CACHE_NAME = "gabi-aventuras-v1";

// Assets to pre-cache on install (app shell)
const PRECACHE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  // Vite builds hashed JS/CSS — we catch those dynamically below
];

// Google Fonts — cache on first fetch, serve from cache thereafter
const FONT_CACHE = "gabi-fonts-v1";
const FONT_ORIGINS = [
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
];

// ── Install: pre-cache the app shell ─────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: clean up old caches ────────────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== CACHE_NAME && k !== FONT_CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first for everything ────────────────────────
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and browser-extension requests
  if (request.method !== "GET") return;
  if (url.protocol === "chrome-extension:") return;

  // Fonts: cache-first with dedicated font cache
  if (FONT_ORIGINS.some((origin) => request.url.startsWith(origin))) {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // App assets: cache-first, fall back to network, cache new assets
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          // Only cache same-origin successful responses
          if (
            response.ok &&
            url.origin === self.location.origin
          ) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          // Offline fallback: return cached index.html for navigation requests
          if (request.mode === "navigate") {
            return caches.match("/index.html");
          }
          // For other failed requests, just fail silently
          return new Response("", { status: 408 });
        });
    })
  );
});

// ── Message: force update from app ───────────────────────────
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
