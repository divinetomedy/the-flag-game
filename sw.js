const CACHE_NAME = "flag-game-v2";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);
const IS_LOCAL_DEV = LOCAL_HOSTS.has(self.location.hostname);
const APP_SHELL = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "manifest.webmanifest",
  "icons/icon.svg",
];

self.addEventListener("install", (event) => {
  if (IS_LOCAL_DEV) {
    self.skipWaiting();
    return;
  }

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith("flag-game-") && (IS_LOCAL_DEV || key !== CACHE_NAME))
          .map((key) => caches.delete(key))
      ))
      .then(() => (IS_LOCAL_DEV ? self.registration.unregister() : undefined))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || IS_LOCAL_DEV) return;

  event.respondWith(
    fetch(event.request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, copy);
        });
      }
      return response;
    }).catch(() => caches.match(event.request))
  );
});
