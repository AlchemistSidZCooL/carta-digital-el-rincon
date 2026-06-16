import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { MenuList } from './components/MenuList';
import { Footer } from './components/Footer';
import productosData from './data/productos.json';
import type { ItemMenu } from './types';

function App() {
  // Aseguramos que TypeScript entienda los datos JSON como nuestro tipo ItemMenu
  const menuItems = productosData as ItemMenu[];

  return (
    <div className="app-container">
      <Header />
      <CategoryNav />
      
      <main className="main-content">
        {/* Renderizamos todas las categorías activadas en el orden de la carta */}
        <MenuList category="Raciones" items={menuItems} />
        <MenuList category="Pastas" items={menuItems} />
        <MenuList category="Platos Combinados" items={menuItems} />
        <MenuList category="Hamburguesas" items={menuItems} />
        <MenuList category="Hot Dogs" items={menuItems} />
        <MenuList category="Pizzas" items={menuItems} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
