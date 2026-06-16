import { useEffect, useState } from 'react';
import './CategoryNav.css';

const categories = [
  { id: 'raciones', label: 'Raciones' },
  { id: 'pastas', label: 'Pastas' },
  { id: 'platos-combinados', label: 'Platos Combinados' },
  { id: 'hamburguesas', label: 'Hamburguesas' },
  { id: 'hot-dogs', label: 'Hot Dogs' },
  { id: 'pizzas', label: 'Pizzas' }
];

export function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState<string>('raciones');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Detect scroll to add background styling and active states
  useEffect(() => {
    const handleScroll = () => {
      // Add background to nav when scrolled past header
      setIsScrolled(window.scrollY > 150);

      // Determine which category is currently active based on scroll position
      const scrollPosition = window.scrollY + 120; // offset for the fixed nav

      for (let i = categories.length - 1; i >= 0; i--) {
        const section = document.getElementById(categories[i].id);
        if (section) {
          if (section.offsetTop <= scrollPosition) {
            setActiveCategory(categories[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Subtract header height to not hide the section title
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`category-nav ${isScrolled ? 'scrolled' : ''}`}>
      <ul className="category-list">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => scrollToCategory(cat.id)}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
