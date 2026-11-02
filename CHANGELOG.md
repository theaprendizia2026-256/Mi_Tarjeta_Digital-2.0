# Historial de Cambios (Changelog) - Mi Tarjeta Digital

Todas las modificaciones notables de este proyecto serán documentadas en este archivo.

## [1.0.0] - 2026-08-07

### Añadido
- **Arquitectura Base:** Implementación de marcado HTML5 semántico y motor gráfico en CSS3 Vanilla puro.
- **PWA Engine:** Integración de `manifest.json` con soporte para instalación *standalone* e iconos adaptativos bajo el identificador `Mi_Tarjeta`.
- **Service Worker:** Controlador `ServiceWorker.js` configurado con estrategia de caché *Cache-First* para el App Shell (`index.html`, `style.css`, `manifest.json`).
- **QR Vectorial Integrado:** Inyección directa de QR nativo en SVG puro mediante coordenadas de píxeles (`viewBox 0 0 31 31`) para garantía de escaneo sin dependencias externas.
- **Hub de Contactos:** Módulo optimizado con enlaces directos a Instagram, Telegram, Sitio Web Vercel (`mi-galeria2026.vercel.app`) y correo Outlook.
- **Soporte Landscape:** Media query dedicada para reajuste ergonómico de elementos en pantallas horizontales o de baja altura (`<= 550px`).
- **Integración CDN:** Conexión de FontAwesome 6.4.0 para iconografía vectorial y Cloudinary para entrega de assets de imagen.

## [2.0.0] - 2026-10-26

### Añadido
- **Carrusel 3D Dinámico:** Implementación de un motor tridimensional en CSS puro con lógica JavaScript mínima para la rotación fluida de 12 pinturas principales, optimizado para interacción táctil y de escritorio.
- **Estructura de Muestra Artística:** Rediseño del flujo visual *above the fold* para priorizar la galería de obras sobre la presentación corporativa tradicional.

### Modificado
- **Rediseño del Hub de Contactos:** Reemplazo de enlaces textuales por iconografía limpia de logos institucionales (Instagram, Telegram, Correo Outlook) para priorizar el canal principal de la comunidad.
- **Jerarquía de Bloques:** Reordenamiento táctico integrando el carrusel superior, enlaces directos, el dossier web secundario en Vercel, código QR vectorial, frase de identidad y firma de autoría en GitHub.
- **Mantenimiento de PWA:** Conservación de la compatibilidad y estructura base orientada a PWA como opción activa de despliegue y caché.
