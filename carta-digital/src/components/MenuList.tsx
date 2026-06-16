import type { Categoria, ItemMenu } from '../types';
import { ProductCard } from './ProductCard';
import './MenuList.css';

interface MenuListProps {
  category: Categoria;
  items: ItemMenu[];
}

export function MenuList({ category, items }: MenuListProps) {
  // Filtrar los items que pertenecen a esta categoría
  const categoryItems = items.filter(item => item.categoria === category);

  if (categoryItems.length === 0) return null;

  // Create an ID safe string from category name (e.g., "Platos Combinados" -> "platos-combinados")
  const sectionId = category.toLowerCase().replace(/\s+/g, '-');

  return (
    <section className="menu-section" id={sectionId}>
      <div className="section-header">
        <h2 className="section-title text-gradient-es">{category}</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="menu-grid">
        {categoryItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
