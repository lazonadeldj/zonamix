
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('la--zona-del-dj-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        'https://i.ibb.co/0ySxmdZw/logodiscogira.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
