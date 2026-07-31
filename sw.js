const CACHE='elmaster-v2';
const IMGS=['domina.jpg','elegante.jpg','oscuro.jpg','caballero.jpg'];
const ASSETS=['./','./index.html','./manifest.json',
  ...IMGS.map(f=>'./img/'+f),...IMGS.map(f=>'./'+f)];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(ASSETS.map(a=>c.add(a)))));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));});
