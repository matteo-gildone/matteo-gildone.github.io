// Service Worker Toolbox
importScripts('lib/sw-toolbox/sw-toolbox.js');


// Files to precache
const precacheFiles = [
    '../',    
    '../css/styles.css',
    '../img/logo.svg'
];
toolbox.precache(precacheFiles);

// Install and Activate events
self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// Fetch events
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});