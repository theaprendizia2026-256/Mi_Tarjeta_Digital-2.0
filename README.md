```markdown
# PROYECTO: Tarjeta Digital v2.0 (PWA & Carrusel 3D) · Mi Tarjeta
**Technical Stack:** Vanilla HTML5 / CSS3 / JavaScript (Vector SVG + CDN Cloudinary)  
**Deployment:** [https://mi-tarjeta.vercel.app/]  
**Autoría / Repositorio:** `theaprendizia2026-256` (GitHub)[cite: 1]  
**Periodo de Consolidación:** Octubre 2026  

---

## 1. Introducción e Ingeniería de Software
Este documento formaliza la especificación y el informe de ingeniería de software para **Mi Tarjeta Digital v2.0**. Desarrollado bajo la filosofía de **mínimos recursos y máxima eficiencia**, el sistema prescinde de frameworks pesados e implementa un núcleo robusto con simplicidad externa y alta complejidad interna. Su propósito es consolidar la presencia artística y el networking digital mediante una interfaz minimalista de rendimiento extremo, integrable como Progressive Web App (PWA) y optimizada para dispositivos móviles.

## 2. Previsualización y Arquitectura Visual
<div align="center">
  <img src="https://res.cloudinary.com/deqk2tmer/image/upload/v1786105933/Screenshot_20260807_083303_com.brave.browser_mfiakx.jpg" width="250" alt="Captura de Pantalla Mi Tarjeta Digital v2.0">
  <p><i>Layout superior (Above the fold): Carrusel tridimensional dinámico, hub de contactos institucionales y código QR vectorial nativo.</i></p>
</div>

## 3. Problemática y Objetivos de Diseño
Las soluciones de presentación digital tradicionales adolecen de sobrecarga de librerías y tiempos de latencia elevados. Esta arquitectura resuelve la difusión de autor y el acceso a catálogos bajo tres pilares:
- **Autonomía y Despliegue Directo:** Ejecución nativa en el navegador sin fricción de tiendas de aplicaciones corporativas.
- **Resiliencia Operativa Offline:** Persistencia garantizada del *App Shell* mediante estrategias de caché gestionadas por un Service Worker dedicado.
- **Impacto Visual Inmediato (*Above the Fold*):** Exposición simultánea y controlada de 12 obras pictóricas primarias mediante un motor gráfico tridimensional nativo en CSS puro, minimizando la ejecución de scripts.

## 4. Requerimientos del Sistema (Versión 2.0)

### 4.1 Requerimientos Funcionales (RF)
- **RF-1 (Carrusel 3D Dinámico):** Motor tridimensional en CSS3 puro con control JavaScript mínimo para la rotación fluida, secuencial e indexada de 12 pinturas (`--i:0` a `--i:11`), con soporte táctil y de escritorio.
- **RF-2 (Hub de Contactos Institucionales):** Enlaces directos estructurados con iconografía vectorial para Instagram, Telegram, correo electrónico oficial (`oulax@oulax.com`) y redirección al dossier web secundario en Vercel (`mi-galeria2026.vercel.app`).
- **RF-3 (QR Vectorial Nativo):** Inyección directa de código QR en formato SVG puro mediante coordenadas vectoriales (`viewBox 0 0 31 31`), eliminando solicitudes HTTP externas y asegurando el escaneo instantáneo.
- **RF-4 (Motor PWA & Caché):** Implementación de `manifest.json` con soporte *standalone* e integración de `ServiceWorker.js` bajo estrategia de caché *Cache-First*.
- **RF-5 (Ergonomía Adaptativa y Landscape):** Reglas de diseño responsivo basadas en unidades dinámicas del Viewport (`100dvh`) y media queries dedicadas para reajuste en orientación horizontal (`<= 550px`).

### 4.2 Requerimientos No Funcionales (RNF)
- **RNF-1 (Rendimiento Crítico):** Cero utilización de frameworks (React, Vue, Tailwind). Arquitectura puramente basada en Vanilla HTML5/CSS3/JS para garantizar renderizado instantáneo.
- **RNF-2 (Optimización de Assets en CDN):** Externalización y entrega de la capa gráfica artística (12 obras pictóricas) a través de infraestructura Cloudinary, evitando sobrecarga local en el repositorio.
- **RNF-3 (Mantenibilidad y Cero Deuda Técnica):** Estricta adherencia al principio de que todo bloque de código o elemento de UI debe poseer una función crítica demostrable; lo redundante es eliminado.

## 5. Casos de Uso del Sistema
- **Escenario A (Networking y Muestra en Terreno):** El espectador interactúa de forma táctil con el carrusel 3D de obras y escanea el código QR vectorial directamente desde la pantalla para guardar el acceso.
- **Escenario B (Conectividad Intermitente o Nula):** El usuario accede al sistema y consulta la información de contacto y enlaces críticos gracias al almacenamiento persistente del App Shell en el Service Worker.
- **Escenario C (Derivación a Dossier Artístico):** Acceso secundario al catálogo web minimalista alojado en Vercel, permitiendo la exploración profunda por categorías (acuarela, óleo, dibujo).

## 6. Diagrama de Arquitectura y Estructura de Archivos
Según la estructura del repositorio oficial (`theaprendizia2026-256`), el sistema se organiza de forma plana y altamente eficiente[cite: 1]:

```text
├── .gitignore          [cite: 1] # Control de exclusiones de entorno y archivos temporales.
├── CHANGELOG.md        [cite: 1] # Bitácora histórica de evolución técnica (v1.0.0 a v2.0.0).
├── CONTRIBUTING.md     [cite: 1] # Guía estricta de desarrollo y normas de cero deuda técnica.
├── LICENSE             [cite: 1] # Licencia de código abierto MIT (theaprendizia2026-256).
├── README.md           [cite: 1] # Informe técnico y documentación de ingeniería central.
├── ServiceWorker.js    [cite: 1] # Controlador de caché offline para el App Shell (Cache-First).
├── index.html          [cite: 1] # Punto de entrada semántico, inyección de carrusel 3D, SVG y PWA.
├── manifest.json       [cite: 1] # Metadatos PWA, configuración standalone e iconos adaptativos.
├── script.js           [cite: 1] # Lógica de control JavaScript mínima para interacción del sistema.
└── style.css           [cite: 1] # Motor gráfico CSS3 puro, variables de posición (--i), 100dvh y responsive.

```

---

*Informe de ingeniería de software formalizado y sincronizado para la versión estable 2.0.0.*

```

```
