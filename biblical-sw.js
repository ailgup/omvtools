/* Biblical Meditation PWA service worker (GitHub Pages-friendly) */
/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'biblical-meditation-pwa-v1';

// Keep this list small; audio is cached on-demand.
const PRECACHE_URLS = [
  './biblical-meditation.html',
  './biblical-manifest.webmanifest',
  './biblical-sw.js',
  './icons/biblical-icon.svg',
  './icons/biblical-maskable.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => (k === CACHE_NAME ? Promise.resolve() : caches.delete(k))));
      await self.clients.claim();
    })()
  );
});

function isSameOrigin(reqUrl) {
  return reqUrl.origin === self.location.origin;
}

function isAudioClip(reqUrl) {
  return isSameOrigin(reqUrl) && reqUrl.pathname.includes('/audio_clips/');
}

function isNavigation(req) {
  return req.mode === 'navigate';
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // SPA-like behavior for refresh/navigation while offline.
  if (isNavigation(req)) {
    event.respondWith(
      caches.match('./biblical-meditation.html').then((cached) => cached || fetch(req))
    );
    return;
  }

  // Cache-first for audio clips to speed repeated playback.
  if (isAudioClip(url)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        });
      })
    );
    return;
  }

  // Stale-while-revalidate for other GET requests (including external CSS/fonts),
  // so the app stays usable offline after first load.
  if (req.method === 'GET') {
    event.respondWith(
      caches.match(req).then((cached) => {
        const fetchPromise = fetch(req)
          .then((res) => {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
            return res;
          })
          .catch(() => cached);
        return cached || fetchPromise;
      })
    );
  }
});

