import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { buildFaq } from './src/data/faq'

const SITE = 'https://elrincontetuan.com'

interface Item {
  id: string; nombre: string; descripcion?: string; precio?: number;
  precioSinBorda?: number; categoria: string; imagen?: string;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// SEO: inyecta en el HTML (build y dev) el contenido de la carta y su JSON-LD,
// para que los buscadores lo lean sin ejecutar JavaScript. React lo reemplaza al montar.
function seoPrerender(): Plugin {
  return {
    name: 'seo-prerender',
    transformIndexHtml(html) {
      const items: Item[] = JSON.parse(readFileSync('src/data/productos.json', 'utf-8'))
      const cats = [...new Set(items.map(i => i.categoria))]
      const price = (i: Item) => i.precio ?? i.precioSinBorda ?? 0

      const body = cats.map(c => `
        <section id="${c.toLowerCase().replace(/\s+/g, '-')}">
          <h2>${esc(c)}</h2>
          <ul>${items.filter(i => i.categoria === c).map(i =>
            `<li><h3>${esc(i.nombre)}</h3>${i.descripcion ? `<p>${esc(i.descripcion)}</p>` : ''}<p>${price(i).toFixed(2).replace('.', ',')} €</p></li>`
          ).join('')}</ul>
        </section>`).join('')

      const staticHtml = `<div class="seo-static"><h1>El Rincón de Tetuán · Carta digital</h1>
        <p>Cocina brasileña y española en Madrid, barrio de Tetuán. Calle del Marqués de Viana, 11. Tel. 624 25 64 51.</p>${body}</div>`

      const menu = {
        '@context': 'https://schema.org',
        '@type': 'Menu',
        name: 'Carta de El Rincón de Tetuán',
        url: `${SITE}/`,
        inLanguage: 'es',
        hasMenuSection: cats.map(c => ({
          '@type': 'MenuSection',
          name: c,
          hasMenuItem: items.filter(i => i.categoria === c).map(i => ({
            '@type': 'MenuItem',
            name: i.nombre,
            ...(i.descripcion && { description: i.descripcion }),
            ...(i.imagen && { image: `${SITE}${i.imagen}` }),
            offers: { '@type': 'Offer', price: price(i).toFixed(2), priceCurrency: 'EUR' },
          })),
        })),
      }

      const faqLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: buildFaq(items).map(f => ({
          '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }

      return html
        .replace('<div id="root"></div>', `<div id="root">${staticHtml}</div>`)
        .replace('</head>', `    <script type="application/ld+json">${JSON.stringify(menu)}</script>\n    <script type="application/ld+json">${JSON.stringify(faqLd)}</script>\n  </head>`)
    },
  }
}

export default defineConfig({
  plugins: [react(), seoPrerender()],
})
