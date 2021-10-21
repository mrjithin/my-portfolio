const filesToCache = [
  '/',
  '/styles/css/style.css',
  '/styles/css/nav.css',
  '/styles/css/chrome.css',
  'images/logo.svg',
  'index.html',
  '/images/favicon/favicon.ico',
  '/scripts/swquery.js',
  '/scripts/ham.js',
  '/scripts/scroll.js',
  '/scripts/no-right-click.js',
  '/scripts/jquery-3.6.0.min.js',
  '/scripts/contact.js/',
  '/images/social/github.svg',
  '/images/social/reddit.svg',
  '/images/social/codepen.svg',
];

let cacheID = 'root-prod-30';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(cacheID)
    .then(cache => {
      return cache.addAll(filesToCache);
    }).then(() => self.skipWaiting())
  )
});

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheList = [cacheID];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheList.includes(cacheName) && cacheName.startsWith('root')) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  )
});

self.addEventListener('fetch', event => {
  // CHECKS IF THE REQUEST IS FROM THE SAME ORIGIN AND IF NOT THE FUNCTION RETURNS.
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) {
    return;
  }
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)
        .then(response => {
          if (response.status === 404) {
            return caches.match('index.html');
          }
          return caches.open(cacheID)
            .then(cache => {
              cache.put(event.request.url, response.clone());
              return response;
            });
        });
    }).catch(error => {
      console.log('Error, ', error);
      // return caches.match('pages/offline.html');
    })
  );
});
