# Estado del Proyecto: El Rincón de Tetuán (CARTA DIGITAL)

## ESTADO ACTUAL: 🚀 100% FINALIZADO Y EN PRODUCCIÓN

### Tareas Completadas:
- ✅ **Código y Diseño Base:** UI Premium Glassmorphism, Responsive (Mobile First y Adaptación a Desktop), Tipografías Modernas, Tema Oscuro de Alta Costura.
- ✅ **Desarrollo Frontend:** React + Vite + TypeScript. Separación de datos (`productos.json`) y componentes.
- ✅ **Inteligencia Artificial Gastronómica:** Generación, curación y optimización (WebP) de más de 25 fotografías de platillos del menú integradas en la plataforma.
- ✅ **PWA (Progressive Web App):** Configuración de `manifest.json` y metaetiquetas para añadir a pantalla de inicio.
- ✅ **Legal y Branding:** Créditos de autor animados y personalizados en el Footer.
- ✅ **Servidor y Despliegue:** Proyecto compilado y desplegado de manera automática a través de GitHub en los CDN de **Netlify**.
- ✅ **Dominio y Redes:** Compra del dominio `elrincontetuan.com`, configuración de proxy y registros DNS CNAME en **Cloudflare**.
- ✅ **Seguridad (SSL/TLS):** Emisión y configuración de certificados HTTPS (Let's Encrypt) exitosa.
- ✅ **Accesibilidad en Sitio:** Desarrollo de un Script de Python (`generar_qr.py`) para generar un Código QR HD personalizado con el logo en el centro.

> [!NOTE]
> El proyecto ha concluido su ciclo de vida de desarrollo activo. La carta digital está lista para ser usada por los clientes del restaurante. Todo mantenimiento futuro se basará en modificar el archivo `productos.json` o actualizar dependencias.


---

## Pendientes tras la actualización SEO (2026-11-10)

- [x] **Commit y push** de los cambios (SEO, Cómo llegar, FAQ, rediseño). Dejar fuera los archivos sin seguimiento ajenos al proyecto.
- [ ] **Revisión visual** en escritorio y móvil (`npm run dev`) y pasar Lighthouse en modo móvil.
- [ ] **Confirmar con el dueño** la dirección y el teléfono publicados (salieron de una ficha de terceros) y si ese número puede ser público.
- [x] **Horario de apertura:** `openingHoursSpecification` en el JSON-LD y pregunta en las FAQ. Confirmar con el dueño que abren los 7 días.
- [ ] **Banner de cookies / Consent Mode** (RGPD) antes de dejar GTM cargando sin consentimiento.
- [x] GTM con el snippet oficial y `<noscript>`. Falta comprobar con el modo Preview que dispara.
- [ ] **Search Console:** añadir la propiedad `elrincontetuan.com` (DNS en Cloudflare), enviar el sitemap y solicitar la indexación de la home.
- [ ] **Perfil de Empresa de Google** del local, con la web enlazada. Gratis, pero fuera del alcance actual (el cliente no lo paga). Si el dueño ya tiene ficha, pedir el enlace corto para `hasMap`/`sameAs`.
- [ ] Eventos GA4/GTM: clic en «Cómo llegar», «Llamar», categorías y enlace de crédito.
- [ ] Opcional: service worker, cabeceras de seguridad en Netlify, página 404, fuentes con `preconnect`, texto de presentación visible bajo el hero.
- [ ] Actualizar el remote de git (el repo aparece movido en GitHub).

- [x] **Volver a `danisid.com`:** hecho; los enlaces usan `https://www.danisid.com/` (el dominio sin www redirige con 301).
