# Informe de sesión: SEO y tráfico a danisid.com
**Fecha:** 2026-11-10 · **Commit:** `811b23a` (en `main`, subido a GitHub; Netlify despliega solo)

## Hecho
- **SEO técnico:** JSON-LD `Restaurant`, `Menu`, `FAQPage` y `WebSite` (menú y FAQ generados en cada build por `seo-prerender` en `vite.config.ts`), OG/Twitter, canonical, `sitemap.xml`, `robots.txt`, iconos PWA, hero en WebP, `netlify.toml`.
- **Contenido:** secciones «Cómo llegar» (mapa y botones) y FAQ (`src/data/faq.ts`).
- **Horario:** 17:00–03:00 todos los días, terraza hasta las 00:00 (JSON-LD, «Cómo llegar» y FAQ). `priceRange` `€€`, verificado con `productos.json` (mediana 13,50 €).
- **Tráfico a danisid.com:** enlaces del footer con UTM, `meta author` y `creator` con `sameAs` (LinkedIn, Instagram), todo hacia `https://www.danisid.com/` (el dominio sin www redirige con 301).
- **GTM** (`GTM-KRT9D248`): snippet oficial y `<noscript>`.
- **Docs:** `CHANGELOG`, `TAREAS_PENDIENTES`, `IDEAS_FASE_2` y `COTIZACION_PROYECTO` (nueva sección SEO: 250 € estimados, total 2.250 €; Perfil de Empresa de Google como servicio adicional no incluido).

## Decisiones
- **Google Business Profile:** fuera de alcance, porque el cliente no lo paga. Se deja como mejora futura. Si el dueño ya tiene ficha, pedir el enlace corto para `hasMap`/`sameAs`.
- El proyecto es de **portfolio**: el objetivo es ganar habilidad y un caso de estudio en danisid.com.
- `.vault_rincon.md` (nota personal) se sacó del repo a `~/vault_rincon_notas.md`. No se borró.

## Pendiente (próxima sesión)
1. Comprobar el deploy en `elrincontetuan.com` (horario, FAQ, footer).
2. Search Console: propiedad, sitemap y solicitud de indexación de la home.
3. Confirmar con el dueño que abren los 7 días, y pedir permiso para el portfolio.
4. Probar GTM en modo Preview. Añadir banner de cookies / Consent Mode (RGPD).
5. Lighthouse móvil (antes/después) para el caso de estudio. Escribir el caso de estudio en danisid.com con enlace a `elrincontetuan.com`.
6. Actualizar el remote: `git remote set-url origin git@github.com:AlchemistSidZCooL/carta-digital-el-rincon.git`.
7. Archivos sin seguimiento ajenos al proyecto (`ESTANDAR_ESTRUCTURA_LUXURY.md`, `informe_migracion_antigravity.md`): decidir si se mueven fuera o se añaden a `.gitignore`.
