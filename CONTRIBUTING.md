# Guía de Contribución y Desarrollo

¡Gracias por tu interés en contribuir a **Mi Tarjeta Digital v2.0**! Este repositorio se rige bajo el principio de **cero deuda técnica y máximo rendimiento**.

## 📐 Principios de Ingeniería

1. **Vanilla Primero:** No se admiten frameworks pesados (React, Vue, Tailwind, etc.). Todo el código debe ser HTML5, CSS3 y JS Vanilla puro.
2. **Cero Dependencias Innecesarias:** Priorizar SVG nativos y assets optimizados en CDN (Cloudinary) sobre recursos locales pesados.
3. **Cero Deuda Técnica:** Todo componente, código o elemento de UI que no tenga una función crítica demostrable debe ser eliminado. Mínimos recursos, máxima eficiencia.
4. **Optimización Móvil y Táctil:** El carrusel 3D y las interfaces deben probarse en Viewport móvil real (`100dvh`), orientación Landscape y asegurar una respuesta fluida al tacto y al escritorio.

## 🚀 Flujo de Trabajo

1. Haz un **Fork** de este repositorio.
2. Crea una rama para tu característica: `git checkout -b feature/nueva-funcionalidad`.
3. Valida que el `ServiceWorker.js` y el `manifest.json` mantengan una puntuación óptima en auditorías de Google Lighthouse para garantizar la integridad de la PWA.
4. Realiza tus cambios y haz un Commit claro: `git commit -m "feat: optimiza carrusel 3D y enlaces"`.
5. Envía un **Pull Request** detallado.
