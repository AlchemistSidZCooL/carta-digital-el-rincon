import { buildFaq } from '../data/faq';
import productosData from '../data/productos.json';
import './FAQ.css';

const faq = buildFaq(productosData as Parameters<typeof buildFaq>[0]);

export function FAQ() {
  return (
    <section className="faq-section" id="preguntas-frecuentes" aria-labelledby="faq-title">
      <div className="section-header">
        <h2 className="section-title text-gradient-es" id="faq-title">Preguntas frecuentes</h2>
        <div className="section-divider"></div>
      </div>
      <div className="faq-list">
        {faq.map(({ q, a }) => (
          <details className="faq-item" key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
