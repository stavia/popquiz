/* PopQuiz PWA Service Worker */
/* eslint-disable no-restricted-globals */

const VERSION = 'v1';
const PRECACHE_NAME = `popquiz-precache-${VERSION}`;
const RUNTIME_NAME = `popquiz-runtime-${VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './quiz.html',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-maskable.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PRECACHE_NAME);
      await cache.addAll(PRECACHE_URLS);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== PRECACHE_NAME && key !== RUNTIME_NAME) {
            return caches.delete(key);
          }
          return undefined;
        })
      );
      await self.clients.claim();
    })()
  );
});

function isNavigationRequest(request) {
  return request.mode === 'navigate' || (request.destination === 'document');
}

function isTsvRequest(url) {
  return url.pathname.endsWith('.tsv');
}

// Strategy:
// - HTML navigations: network-first, fallback to cached index.html.
// - TSV (local or GitHub raw): stale-while-revalidate, so it can work offline after first load.
// - Everything else (same-origin): cache-first (runtime), fallback to network.
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Navigations
  if (isNavigationRequest(request)) {
    event.respondWith(
      (async () => {
        try {
          const network = await fetch(request);
          const cache = await caches.open(RUNTIME_NAME);
          cache.put(request, network.clone());
          return network;
        } catch (e) {
          const cache = await caches.open(PRECACHE_NAME);
          const fallback = await cache.match('./index.html');
          return fallback || Response.error();
        }
      })()
    );
    return;
  }

  // TSV data: allow caching cross-origin (opaque) responses too.
  if (isTsvRequest(url) || url.hostname === 'raw.githubusercontent.com') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(RUNTIME_NAME);
        const cached = await cache.match(request);

        const fetchPromise = (async () => {
          try {
            const network = await fetch(request);
            // Cache even opaque responses; they can still be used offline later.
            cache.put(request, network.clone());
            return network;
          } catch (e) {
            return undefined;
          }
        })();

        return cached || (await fetchPromise) || Response.error();
      })()
    );
    return;
  }

  // Same-origin assets/API: cache-first runtime.
  if (url.origin === self.location.origin) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(RUNTIME_NAME);
        const cached = await cache.match(request);
        if (cached) return cached;
        const network = await fetch(request);
        cache.put(request, network.clone());
        return network;
      })()
    );
  }
});
