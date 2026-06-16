import './Header.css';
import heroImg from '../assets/hero_generated.png';

export function Header() {
  return (
    <header className="hero-header">
      <div className="hero-image-wrapper">
        <img 
          src={heroImg} 
          alt="El Rincón - Ilustración de portada" 
          className="hero-image"
        />
        
        {/* Textos superpuestos en el letrero de madera */}
        <div className="hero-text-overlay">
          <h1 className="hero-title">EL RINCÓN</h1>
          <p className="hero-subtitle">
            <span className="text-gradient-br">BRASIL</span> + <span className="text-gradient-es">ESPAÑA</span> COCINA
          </p>
        </div>

        {/* Gradiente de fundido */}
        <div className="hero-fade-bottom"></div>
      </div>
    </header>
  );
}
