# Changelog - Proyecto El Rincón

Todos los cambios notables de este proyecto serán documentados en este archivo.

## [1.1.0] - SEO, "Cómo llegar", FAQ y rediseño - 2026-11-10

### Añadido
- **Google Tag Manager** (`GTM-KRT9D248`) en `index.html` con el snippet oficial y `<noscript>`.
- **SEO técnico:** `lang="es"`, canonical, Open Graph y Twitter Card con imagen 1200x630, `robots.txt`, `sitemap.xml`, `meta author`, iconos PWA reales (192/512) y `apple-touch-icon`.
- **Datos estructurados (JSON-LD):** `Restaurant` (dirección, teléfono, coordenadas), `WebSite` (creador), `Menu` con todos los platos y `FAQPage`. El menú y las FAQ se generan en cada build (plugin `seo-prerender` en `vite.config.ts`).
- **Contenido estático en el HTML** (categorías, platos y precios) para que los buscadores lo lean sin JavaScript.
- **Sección «Cómo llegar»:** botones de Google Maps (ruta desde la ubicación del usuario), llamar y ver en Maps, más mapa incrustado.
- **Sección de preguntas frecuentes** generada desde `productos.json` y `src/data/faq.ts`.
- **CTA de crédito en el footer** con enlaces UTM hacia `www.danisid.com`; `creator` del JSON-LD con `sameAs` (LinkedIn, Instagram).
- **Horario** (17:00–03:00, terraza hasta las 00:00) y `priceRange` `€€` en el JSON-LD, en «Cómo llegar» y en las FAQ.
- `netlify.toml` con caché para `/assets/*` y `/products/*`.

### Cambiado
- **Diseño:** contenedor de 600 a 1200 px, rejilla de 3 columnas en escritorio, hero panorámico, navegación centrada y siempre visible, fotos con proporción fija y hover solo con ratón, soporte `prefers-reduced-motion`.
- Arreglados los botones de categoría (usaban variables CSS inexistentes).
- Hero convertido de PNG (1 MB) a WebP (190 KB); imágenes con `width`/`height`, `loading="lazy"` y `alt` descriptivo.
- Título y descripción con "Madrid"; eliminado `user-scalable=no` del viewport.

## [1.0.0] - Producción y Despliegue Final - 2026-06-17

### Añadido
- **Configuración DNS y SSL:** Vinculación exitosa de registros CNAME en Cloudflare y aprovisionamiento de certificado SSL (HTTPS) Let's Encrypt en Netlify para el dominio `elrincontetuan.com`.
- **Generador Automático de QR (Python):** Creación de un script personalizado en Python (`generar_qr.py`) que genera un código QR de alta resolución con corrección de errores (ERROR_CORRECT_H) e incrusta matemáticamente el logotipo del restaurante en el centro.
- **Proyecto Completado:** 100% de la Carta Digital en línea, responsiva y optimizada para uso en entorno real.

## [0.2.0] - Fase 2 y 3 (Desarrollo Activo) - 2026-06-14

### Añadido
- Migración y refactorización a **TypeScript** (`.tsx`) para asegurar un tipado fuerte y mayor mantenibilidad del código base.
- **Arquitectura de Datos Dinámica:** Creación de un backend local `src/data/productos.json` que contiene todos los menús y precios.
- Creación de componentes React modulares: `Header`, `MenuList`, `ProductCard`.
- **Integración Visual mediante IA Generativa:**
  - Generación e inserción de un Hero Header premium (fusión temática Brasil/España) con efectos de degradado y sombreado Glassmorphism interactivo.
  - Generación de **12 Fotografías Gastronómicas Premium** para las principales raciones (Pollo, Pescado, Tequeños, Torreznos, Coxinhas, etc.).
- Soporte en la UI (tarjetas de cristal) para renderizar fotografías de alta calidad en la cabecera de los productos de forma dinámica, con animaciones de *hover*.
- Habilitadas y ordenadas todas las categorías restantes de la carta física en el frontend (`Pastas`, `Platos Combinados`, `Hamburguesas`, `Hot Dogs`, `Pizzas`).
- Generación de **13 fotografías gastronómicas adicionales** (Fase 3) para raciones restantes, pastas, platos combinados y hamburguesas.
- Finalización de las 3 imágenes restantes (Picaña, Hot Dog, Pizza Personalizada) y conversión a formato `.webp`.
- Modificada la tarjeta de Pizzas para utilizar la expresión correcta en español: "Sin borde" y "Borde de queso".
- **Optimizaciones Desktop:** Implementación del patrón de diseño "Ventana de App" (`max-width: 600px` y `margin: 0 auto`) en `.app-container` para garantizar la estética en monitores de PC sin romper el enfoque Mobile First. Además se añadió un sutil fondo radial.
- **Créditos Ultra Luxury:** Creación del componente `Footer.tsx` para los créditos del desarrollador (DANISID) con diseño de alta costura, animaciones doradas fluidas, y salvaguarda de derechos de autor.
- **Progressive Web App (PWA):** Integración de `manifest.json` y meta-etiquetas OpenGraph en el `index.html`.
- **Producción:** Despliegue exitoso en **Netlify** y vinculación del dominio oficial registrado vía Cloudflare (**`elrincontetuan.com`**).

## [0.1.0] - Fase 1 (Inicialización) - 2026-06-14

### Añadido
- Creación de la arquitectura base del proyecto en `/Proyecto_El_Rincon`.
- Organización de recursos gráficos en la subcarpeta `/assets_originales`.
- Se extrajeron y renombraron las fotografías de la sesión (ej. platos, menús físicos, comanda de ticket, notas de ingredientes de pizza).
- Inicialización de la aplicación Web Frontend (`carta-digital`) usando **React y Vite**.
- Configuración de estilos globales premium en `index.css`:
  - Modo oscuro elegante (dark mode).
  - Efectos visuales de tipo cristal (*glassmorphism*).
  - Tipografías modernas (Outfit, Zilla Slab).
  - Efectos *hover* y transiciones animadas para elementos interactivos.
- Creación del `README.md` y este archivo `CHANGELOG.md` para documentar y registrar el avance del desarrollo de la plataforma para El Rincón.
