const CACHE_NAME = "openfootballfc-v1";

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll([
                    "./",
                    "./index.html",
                    "./style.css",
                    "./src/main.js"
                ]);
            })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
