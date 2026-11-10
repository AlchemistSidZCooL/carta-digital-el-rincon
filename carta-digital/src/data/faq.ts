// Preguntas frecuentes: se generan a partir de la carta y de datos verificados del local.
// Compartido por el componente <FAQ /> y por el JSON-LD (FAQPage) que inyecta vite.config.ts.
export interface FaqItem { q: string; a: string }

interface MenuLike { categoria: string; precio?: number; precioSinBorda?: number; precioConBorda?: number }

const eur = (n: number) => `${n.toFixed(2).replace('.', ',').replace(',00', '')} €`;

export function buildFaq(items: MenuLike[]): FaqItem[] {
  const range = (cat: string) => {
    const p = items.filter(i => i.categoria === cat).map(i => i.precio ?? i.precioSinBorda ?? 0);
    return p.length ? `${eur(Math.min(...p))} - ${eur(Math.max(...p))}` : '';
  };
  const pizza = items.find(i => i.categoria === 'Pizzas');

  return [
    {
      q: '¿Dónde está El Rincón de Tetuán?',
      a: 'En la Calle del Marqués de Viana, 11, 28039 Madrid, en el barrio de Tetuán. En esta página tienes el botón «Cómo llegar» para abrir la ruta en Google Maps desde donde estés.',
    },
    {
      q: '¿Qué tipo de cocina sirven?',
      a: 'Cocina brasileña y española: raciones para compartir, platos combinados, pastas, hamburguesas, hot dogs y pizzas.',
    },
    {
      q: '¿Cuánto cuestan las raciones y los platos combinados?',
      a: `Las raciones van de ${range('Raciones')} y los platos combinados de ${range('Platos Combinados')}, según la carta actual.`,
    },
    {
      q: '¿Tienen hamburguesas y pizzas?',
      a: `Sí. Hay ${items.filter(i => i.categoria === 'Hamburguesas').length} hamburguesas premium (${range('Hamburguesas')})${
        pizza ? ` y pizza personalizada desde ${eur(pizza.precioSinBorda ?? 0)}${pizza.precioConBorda ? ` (${eur(pizza.precioConBorda)} con borde relleno)` : ''}, con ingredientes extra a elegir` : ''
      }.`,
    },
    {
      q: '¿Cuál es el horario de El Rincón de Tetuán?',
      a: 'Abrimos de 17:00 a 03:00 de la madrugada. La terraza cierra a las 00:00.',
    },
    {
      q: '¿Cómo puedo contactar con el restaurante?',
      a: 'Por teléfono en el 624 25 64 51. Desde móvil puedes pulsar el botón «Llamar» de esta misma página.',
    },
    {
      q: '¿Cómo llego desde cualquier punto de Madrid?',
      a: 'Pulsa «Cómo llegar desde donde estás»: Google Maps calcula la ruta en transporte público, a pie o en coche desde tu ubicación hasta la Calle del Marqués de Viana, 11 (Tetuán).',
    },
    {
      q: '¿Puedo ver la carta con fotos y precios desde el móvil?',
      a: 'Sí. Esta carta digital está pensada para móvil: fotos de los platos, precios actualizados y se puede añadir a la pantalla de inicio como app.',
    },
  ];
}
