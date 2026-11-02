# PROYECTO: Tarjeta Digital v2.0 (PWA & Carrusel 3D) · Mi Tarjeta

**Technical Stack:** Vanilla HTML5 / CSS3 / JavaScript (Vector SVG + CDN Cloudinary)  
**Deployment:** [https://mi-tarjeta.vercel.app/]  
**Autoría / Repositorio:** `theaprendizia2026-256` (GitHub)  

---

## 1. Introducción e Informe de Ingeniería de Software

Este documento formaliza la especificación técnica de la versión 2.0 de **Mi Tarjeta Digital**. Desarrollado bajo la filosofía de **mínimos recursos y máxima eficiencia**, el sistema prescinde por completo de dependencias pesadas y frameworks, implementando una arquitectura de núcleo robusto con simplicidad externa y alta complejidad interna. Su propósito es consolidar la presencia artística y el networking digital mediante una interfaz minimalista de rendimiento extremo, optimizada como Progressive Web App (PWA).

## 2. Previsualización y Arquitectura Visual
<div align="center">
  <img src="https://res.cloudinary.com/deqk2tmer/image/upload/v1793626664/Screenshot_20261102_102936_gqyu2r.jpg" width="250" alt="Captura de Pantalla Mi Tarjeta Digital v2.0">
  <p><i>Layout superior (Above the fold): Carrusel tridimensional dinámico, hub de contactos institucionales y código QR vectorial nativo.</i></p>
</div>

## 3. Problemática y Objetivos de Diseño
Las soluciones de presentación digital tradicionales adolecen de sobrecarga de librerías, tiempos de latencia elevados y dependencias de terceros. Esta arquitectura resuelve la difusión de autor y el acceso a catálogos bajo tres pilares inquebrantables:
- **Autonomía y Despliegue Directo:** Ejecución nativa en el navegador sin fricción de tiendas de aplicaciones corporativas (App Store / Play Store).
- **Resiliencia Operativa Offline:** Persistencia garantizada del *App Shell* mediante estrategias de caché gestionadas por un Service Worker dedicado.
- **Impacto Visual Inmediato (*Above the Fold*):** Exposición simultánea y controlada de 12 obras pictóricas primarias mediante un motor gráfico tridimensional nativo en CSS puro, minimizando la ejecución de scripts.

## 4. Requerimientos del Sistema (Versión 2.0)

### 4.1 Requerimientos Funcionales (RF)
- **RF-1 (Carrusel 3D Dinámico):** Motor tridimensional en CSS3 puro (`style.css`) con control mínimo en JavaScript (`script.js`) para la rotación fluida, secuencial e indexada de 12 pinturas (`--i:0` a `--i:11`), con soporte táctil y de escritorio.
- **RF-2 (Hub de Contactos Institucionales):** Enlaces directos estructurados con iconografía vectorial para Instagram, Telegram, correo electrónico oficial (`oulax@oulax.com`) y redirección al dossier web secundario en Vercel (`mi-galeria2026.vercel.app`).
- **RF-3 (QR Vectorial Nativo):** Inyección directa de código QR en formato SVG puro mediante coordenadas vectoriales (`viewBox 0 0 31 31`), eliminando solicitudes HTTP externas.
- **RF-4 (Motor PWA & Caché):** Implementación de `manifest.json` con soporte *standalone* e integración de `ServiceWorker.js` bajo estrategia de caché *Cache-First*.
- **RF-5 (Ergonomía Adaptativa y Landscape):** Reglas de diseño responsivo basadas en unidades dinámicas del Viewport (`100dvh`) y media queries dedicadas para reajuste en orientación horizontal (`<= 550px`).

### 4.2 Requerimientos No Funcionales (RNF)
- **RNF-1 (Rendimiento Crítico):** Cero utilización de frameworks (React, Vue, Tailwind). Arquitectura puramente basada en Vanilla HTML5/CSS3/JS.
- **RNF-2 (Optimización de Assets en CDN):** Entrega de la capa gráfica artística (12 obras pictóricas) a través de infraestructura Cloudinary, evitando sobrecarga en el repositorio.
- **RNF-3 (Mantenibilidad y Cero Deuda Técnica):** Todo bloque de código o elemento de UI posee una función crítica demostrable; lo redundante es eliminado.

## 5. Casos de Uso del Sistema
- **Escenario A (Networking y Muestra en Terreno):** El espectador interactúa de forma táctil con el carrusel 3D de obras y escanea el código QR vectorial directamente desde la pantalla.
- **Escenario B (Conectividad Intermitente o Nula):** El usuario accede al sistema y consulta la información de contacto gracias al almacenamiento persistente del App Shell en el Service Worker.
- **Escenario C (Derivación a Dossier Artístico):** Acceso secundario al catálogo web minimalista alojado en Vercel para la exploración profunda por categorías.

## 6. Estructura y Arquitectura del Repositorio (`tree`)

El proyecto se organiza en el repositorio GitHub bajo una estructura plana y altamente eficiente[cite: 1]:

```text
├── .gitignore           # Archivos de exclusión del sistema y control de versiones
├── CHANGELOG.md         # Bitácora histórica de evolución técnica (v1.0.0 a v2.0.0)
├── CONTRIBUTING.md      # Guía estricta de desarrollo y normas de cero deuda técnica
├── LICENSE              # Licencia de código abierto MIT (theaprendizia2026-256)
├── README.md            # Informe de ingeniería de software y documentación central
├── ServiceWorker.js     # Controlador de caché offline (Estrategia Cache-First)
├── index.html           # Punto de entrada semántico, inyección de carrusel 3D y SVG
├── manifest.json        # Metadatos PWA, configuración standalone e iconos adaptativos
├── script.js            # Lógica mínima de control para la interacción del sistema
└── style.css            # Motor gráfico CSS3 puro, variables (--i), 100dvh y responsividad
