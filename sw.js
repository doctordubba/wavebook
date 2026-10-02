/* Wavebook offline shell. Change VERSION when releasing updated site files.
   Only this app's own cache is managed. Personal progress is in localStorage,
   not this cache. Source sites and private backups are never cached here. */
'use strict';
const VERSION = 'a09257239c35';
const SCOPE = self.registration.scope;
const PREFIX = 'wavebook-shell:' + SCOPE + ':';
const CACHE = PREFIX + VERSION;
const URLS = ['index.html','pwa.js','manifest.webmanifest','apple-touch-icon.png','icon-192.png','icon-512.png']
  .map(name => new URL(name, SCOPE).href);
const INDEX = URLS[0];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(URLS.map(url => new Request(url, {cache: 'reload'})));
    // App code and report are inline; taking control cannot mix bundle versions.
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
async function networkOrCache(request, key) {
  const cache = await caches.open(CACHE);
  const abort = new AbortController();
  const timer = setTimeout(() => abort.abort(), 4500);
  try {
    const response = await fetch(request, {cache: 'no-cache', signal: abort.signal});
    if (response.ok) {
      try { await cache.put(key, response.clone()); } catch (_) { /* Storage quota must not break online use. */ }
      return response;
    }
    // Preserve a working app during transient host errors. Do not replace it with an error page.
    const saved = await cache.match(key);
    return saved || response;
  } catch (error) {
    const saved = await cache.match(key);
    if (saved) return saved;
    return new Response('Wavebook is not available offline yet. Reconnect and open it once online.',
      {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  } finally { clearTimeout(timer); }
}
self.addEventListener('fetch', event => {
  const request=event.request;
  if (request.method !== 'GET') return;
  const u=new URL(request.url);
  if (u.origin !== new URL(SCOPE).origin) return;
  const bare=u.origin+u.pathname;
  // Hash routes stay inside this document; other pages must keep their real responses.
  if (request.mode === 'navigate' && (bare === SCOPE || bare === INDEX)) {
    event.respondWith(networkOrCache(request, INDEX));
  } else if (URLS.includes(bare)) {
    event.respondWith(networkOrCache(request, bare));
  }
});
