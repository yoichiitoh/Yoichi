importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');
if (workbox) {
    workbox.routing.registerRoute('/demo-my-pwa/index.html', workbox.strategies.networkFirst());
    workbox.routing.registerRoute(new RegExp('.*\.js'), workbox.strategies.networkFirst());
    workbox.routing.registerRoute(new RegExp('.*\.css'), workbox.strategies.networkFirst());
    workbox.routing.registerRoute(new RegExp('.*\.png'), workbox.strategies.networkFirst());
}
else {
    console.log('Workbox didn\'t load');
}
