import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Producto, Pizza } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Producto | Pizza;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  // Función helper para formatear precios con la coma europea
  const formatPrice = (price: number) => {
    return price.toFixed(2).replace('.', ',') + '€';
  };

  return (
    <div ref={cardRef} className={`product-card glass-panel ${isVisible ? 'is-visible' : ''}`}>
      {product.imagen && (
        <>
          <div 
            className="product-image-container clickable" 
            onClick={() => setIsModalOpen(true)}
          >
            <img src={product.imagen} alt={product.nombre} className="product-image" />
            <div className="product-image-overlay">
              <span>🔍 Ampliar</span>
            </div>
          </div>

          {isModalOpen && createPortal(
            <div className="image-modal-overlay" onClick={() => setIsModalOpen(false)}>
              <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="image-modal-close" onClick={() => setIsModalOpen(false)}>
                  &times;
                </button>
                <img src={product.imagen} alt={product.nombre} className="image-modal-img" />
                <h3 className="image-modal-title">
                  {product.nombre}
                  <span style={{ display: 'block', fontSize: '1.2rem', marginTop: '0.5rem', fontFamily: 'var(--font-body)' }} className="text-gradient-br">
                    {product.categoria === 'Pizzas' ? 
                      `${formatPrice((product as Pizza).precioSinBorda)} | Borde rel. ${formatPrice((product as Pizza).precioConBorda)}` : 
                      formatPrice((product as Producto).precio)
                    }
                  </span>
                </h3>
                {product.descripcion && <p className="image-modal-desc">{product.descripcion}</p>}
              </div>
            </div>,
            document.body
          )}
        </>
      )}
      <div className="product-header">
        <h3 className="product-name">{product.nombre}</h3>
        {product.categoria !== 'Pizzas' ? (
          <span className="product-price text-gradient-es">
            {formatPrice((product as Producto).precio)}
          </span>
        ) : (
          <div className="pizza-prices">
            <span className="price-label">Sin borde de queso: <span className="text-gradient-es">{formatPrice((product as Pizza).precioSinBorda)}</span></span>
            <span className="price-label">Borde de queso: <span className="text-gradient-es">{formatPrice((product as Pizza).precioConBorda)}</span></span>
          </div>
        )}
      </div>

      {product.descripcion && (
        <p className="product-description">{product.descripcion}</p>
      )}

      {/* Solo para Pizzas: mostrar ingredientes */}
      {product.categoria === 'Pizzas' && (
        <div className="pizza-details">
          <div className="pizza-section">
            <h4>Sabores:</h4>
            <p>{(product as Pizza).saboresPrincipales.join(', ')}</p>
          </div>
          <div className="pizza-section">
            <h4>Extras disponibles:</h4>
            <div className="extras-categories">
              {(product as Pizza).extrasDisponibles.map((cat, catIdx) => (
                <div key={catIdx} className="extra-category">
                  <h5>{cat.nombre}</h5>
                  <ul className="extras-list">
                    {cat.opciones.map((extra, idx) => (
                      <li key={idx}>
                        {extra.nombre} <span className="extra-price">(+{formatPrice(extra.precioExtra)})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
