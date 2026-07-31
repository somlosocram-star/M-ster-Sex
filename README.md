# El Máster

Juego erótico para parejas (PWA) — una voz sintetizada ("el Máster") dirige la sesión con órdenes cronometradas que suben de intensidad por niveles.

## Características

- **Modo 1: un solo dispositivo** — el Máster habla por el altavoz y ambos escuchan
- **4 Másters a elegir**: La Dómina, La Elegante, El Oscuro, El Caballero — cada uno con foto, personalidad, tono de voz (pitch/velocidad) y frases propias
- **5 niveles de intensidad**: Tensión → Contacto → Piel → Fuego → Sin límites
- **Inventario de ropa**: al inicio cada uno declara lo que lleva puesto; el Máster solo da órdenes coherentes con lo que queda y las prendas "caen" cuando ordena quitarlas
- **Cronómetros automáticos**: cada orden tiene su tiempo (visible con anillo de cuenta atrás, o invisible para órdenes de hablar)
- **Avance automático de nivel** cada 4 órdenes, con frases de transición
- Controles discretos: subir/bajar intensidad, otra orden, pausa de seguridad
- **PWA**: instalable, funciona offline (service worker), 100% local y privado — ningún dato sale del dispositivo

## Estructura

```
index.html      → toda la app (HTML + CSS + JS)
manifest.json   → configuración PWA
sw.js           → service worker (cache offline)
img/            → retratos de los 4 Másters
```

## Despliegue

Es una web estática: sirve la carpeta con cualquier hosting estático (GitHub Pages, Netlify, Vercel…). Para GitHub Pages: sube el contenido a un repo y actívalo en *Settings → Pages*.

## Requisitos

- Navegador con Web Speech API (Chrome/Edge/Android, Safari iOS) para la voz del Máster
- HTTPS (o localhost) para que el service worker y la instalación PWA funcionen

## Privacidad

Sin cuentas, sin servidor, sin analítica. Todo ocurre en el navegador del dispositivo.

## Roadmap

- [ ] Modo 2: dos dispositivos sincronizados con órdenes privadas por auriculares
- [ ] Música de ambiente
- [ ] PIN de entrada y modo camuflaje
- [ ] Editor de órdenes personalizadas
