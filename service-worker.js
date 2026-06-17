const CACHE_NAME = 'typerush-3-0-7';
const ASSETS = ['/', 'index.html', 'style.css', 'app.js', 'manifest.json', 'sw-register.js', 'icons/icon-192.png', 'icons/icon-512.png'];

// Install: cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activate: delete ALL old caches immediately, then claim clients
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      // Force all existing tabs to reload so they get fresh files immediately
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(clients => clients.forEach(client => client.navigate(client.url)))
  );
});

// Fetch: network-first for HTML/JS/CSS so updates are seen instantly.
// Falls back to cache only if network fails (true offline support).
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isCoreAsset = ASSETS.some(a => url.pathname.endsWith(a.replace('/', ''))) || url.pathname === '/';

  if (isCoreAsset && e.request.method === 'GET') {
    // Network-first: bypass HTTP cache with no-store so this truly hits the
    // server every time, instead of getting served a stale copy from the
    // browser's disk cache (this was why updates took days to show up)
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first for images and other static assets
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
