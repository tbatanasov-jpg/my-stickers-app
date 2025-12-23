const CACHE_NAME = 'travel-album-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/manifest.json',
    // Добави пътища към иконите и логото тук
    // '/icons/icon-192x192.png',
    // '/logo.png' 
];

// Инсталиране на Service Worker и кеширане на ресурсите
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Кеширани файлове');
                return cache.addAll(urlsToCache);
            })
    );
});

// Прихващане на заявки и обслужване от кеша (за офлайн работа)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Връща отговор от кеша, ако е наличен
                if (response) {
                    return response;
                }
                // Иначе прави заявка към мрежата
                return fetch(event.request);
            })
    );
});

// Активиране на Service Worker и почистване на стари кешове
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});