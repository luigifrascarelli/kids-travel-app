// ╔══════════════════════════════════════════════════════════════╗
// ║  GABI AVENTURAS — SERVICE WORKER                             ║
// ║  Network-first for app code (HTML/JS/CSS), cache-first for   ║
// ║  fonts. This keeps the app fresh for anyone online while     ║
// ║  still working fully offline once assets have been fetched   ║
// ║  once (e.g. mid-flight, no wifi).                            ║
// ╚══════════════════════════════════════════════════════════════╝

// Bump this string on every deploy that should force a refresh.
// Changing it changes this file's bytes, which is what makes the
// browser notice an update is available at all — a static name
// here means returning visitors can get stuck on an old version
// forever, since the SW itself never looks "changed" to the browser.
const CACHE_NAME = "gabi-aventuras-v2";

// Assets to pre-cache on install (app shell)
const PRECACHE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
];

// Google Fonts — cache on first fetch, serve from cache thereafter.
// Fonts are genuinely static, so cache-first is correct here.
const FONT_CACHE = "gabi-fonts-v1";
const FONT_ORIGINS = [
  "https://fonts.googleapis.com",
  "https://fonts.gstatic.com",
];

// ── Install: pre-cache the app shell, activate immediately ────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: clean up every old cache (any name that isn't the
//    current CACHE_NAME/FONT_CACHE gets deleted) ───────────────
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

// ── Fetch ───────────────────────────────────────────────────────
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and browser-extension requests
  if (request.method !== "GET") return;
  if (url.protocol === "chrome-extension:") return;

  // Fonts: cache-first with dedicated font cache (unchanged — correct for truly static assets)
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

  // App code (HTML navigation, JS, CSS): network-first. Always try
  // the network for the latest version; only fall back to cache
  // when offline. This is what actually keeps the app up to date —
  // cache-first here was the root cause of the site getting stuck.
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => {
            if (cached) return cached;
            if (request.mode === "navigate") {
              return caches.match("/index.html");
            }
            return new Response("", { status: 408 });
          })
        )
    );
    return;
  }

  // Anything else cross-origin: just pass through to the network.
  event.respondWith(fetch(request).catch(() => new Response("", { status: 408 })));
});

// ── Message: force update from app ───────────────────────────
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
