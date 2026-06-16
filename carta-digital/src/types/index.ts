export type Categoria = 
  | 'Raciones' 
  | 'Pastas' 
  | 'Platos Combinados' 
  | 'Hamburguesas' 
  | 'Hot Dogs' 
  | 'Pizzas';

export interface IngredienteExtra {
  nombre: string;
  precioExtra: number;
}

export interface CategoriaExtras {
  nombre: string;
  opciones: IngredienteExtra[];
}

export interface Producto {
  id: string;
  nombre: string;
  descripcion?: string;
  precio: number;
  categoria: Categoria;
  imagen?: string;
}

export interface Pizza extends Omit<Producto, 'precio'> {
  categoria: 'Pizzas';
  precioSinBorda: number;
  precioConBorda: number;
  saboresPrincipales: string[];
  extrasDisponibles: CategoriaExtras[];
}

export type ItemMenu = Producto | Pizza;
