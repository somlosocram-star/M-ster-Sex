// EL MÁSTER — service worker
// HTML: network-first (nunca sirve versiones viejas; GitHub Pages cachea ~10 min)
// Estáticos: cache-first, con guardado perezoso
const CACHE='elmaster-v22';
const CORE=['./','index.html','manifest.json','voice-index.json',
  'domina.jpg','elegante.jpg','oscuro.jpg','caballero.jpg','icon-192.png','icon-512.png','heartbeat.mp3'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(CORE.map(a=>c.add(a)))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))).then(()=>self.clients.claim());
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  // documentos: red primero, saltando la caché HTTP
  if(req.mode==='navigate'||req.destination==='document'){
    e.respondWith(
      fetch(req,{cache:'no-store'}).then(r=>{
        const cp=r.clone();
        caches.open(CACHE).then(c=>c.put(req,cp));
        return r;
      }).catch(()=>caches.match(req).then(r=>r||caches.match('index.html')))
    );
    return;
  }
  // resto: caché primero, y al bajar de red se guarda
  e.respondWith(
    caches.match(req).then(hit=>hit||fetch(req).then(r=>{
      if(r.ok&&req.url.startsWith(self.location.origin)){
        const cp=r.clone();
        caches.open(CACHE).then(c=>c.put(req,cp));
      }
      return r;
    }))
  );
});
