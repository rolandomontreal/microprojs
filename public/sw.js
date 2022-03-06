/// <reference lib="WebWorker" />
const CACHE_STATIC_NAME = 'static:0.0.1';
const CACHE_DYNAMIC_NAME = 'dynamic:0.0.1';
const debug = false;

self.addEventListener('install', (event) => {
  if (debug) {
    console.log('[Service Worker] Installing Service Worker...', event);
  }
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then((cache) => {
        if (debug) {
          console.log('[Service Worker] Cache opened: ', cache);
        }
        // cache.addAll([
        //   '/',
        //   '/index.html',
        // ]);
        // cache.add('/');
        // cache.add('/index.html');
      })
      .catch(err => {
        console.log('[Service Worker] Error opening cache: ', err);
      })
  );
});

self.addEventListener('activate', (event) => {
  if (debug) {
    console.log('[Service Worker] Activating Service Worker...', event);
  }
  // Where cleanup cache should be
  event.waitUntil(
    caches.keys()
      .then(keylist =>
        keylist.filter(key => key !== CACHE_DYNAMIC_NAME && key !== CACHE_STATIC_NAME)
      )
      .then(keystodelete => Promise.all(
        keystodelete.map(key => caches.delete(key))
      ))
      .then(res => {
        if (debug) {
          console.log('[Service Worker] Old caches successfully deleted...', res);
        }
      })
      .catch(err => {
        console.log('[Service Worker] Error deleting old caches...', err);
      })
  )
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // console.log('[Service Worker] Fetching something updated...', event);
  // event.respondWith(
  //   caches.match(event.request)
  //     .then(response => {
  //       if (response) {
  //         return response;
  //       }
  //       else {
  //         return fetch(event.request)
  //           .then(res => {
  //             return caches.open(CACHE_DYNAMIC_NAME)
  //               .then(cache => {
  //                 cache.put(event.request.url, res.clone());
  //                 return res;
  //               });
  //           })
  //           .catch(err => {
  //             console.log('[Service Worker] Error fetching...', err);
  //           });
  //       }
  //     })
  // );
});