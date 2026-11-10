import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="luxury-footer">
      <div className="luxury-divider"></div>
      
      <div className="luxury-footer-content">
        <div className="luxury-credits">
          <span className="luxury-label">CONCEPT & DEVELOPMENT</span>
          <a href="https://www.danisid.com/?utm_source=elrincontetuan&utm_medium=footer&utm_campaign=credito" target="_blank" rel="noopener" className="luxury-author">
            DANISID
          </a>
        </div>

        <a
          className="luxury-cta"
          href="https://www.danisid.com/?utm_source=elrincontetuan&utm_medium=footer&utm_campaign=cta_carta_digital"
          target="_blank"
          rel="noopener"
        >
          Carta digital y web diseñadas por Danisid · ¿Quieres una para tu restaurante? →
        </a>

        <div className="luxury-social">
          <a href="https://www.linkedin.com/in/danisidcode/" target="_blank" rel="noopener noreferrer" className="luxury-social-link">
            LINKEDIN
          </a>
          <span className="luxury-dot">•</span>
          <a href="https://www.instagram.com/danielsid/" target="_blank" rel="noopener noreferrer" className="luxury-social-link">
            INSTAGRAM
          </a>
        </div>

        <div className="luxury-copyright">
          <p>© 2026 DANISID. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="luxury-sub">APLICACIÓN Y DISEÑO WEB CREADOS DESDE CERO.</p>
        </div>
      </div>
    </footer>
  );
};
