# Plan de Implementación: Finalización Carta Digital "El Rincón"

Este documento establece el orden lógico y profesional para completar el desarrollo de la carta digital, priorizando la experiencia del usuario final (Mobile First) y finalizando con el despliegue a producción.

## FASE 1: Estabilización UI/UX (Ajustes Mobile First)
*Lo primero en desarrollo frontend es asegurar que el diseño base sea robusto y responsivo antes de añadir efectos complejos.*

*   **Ajuste de Tipografías:** Escalar tamaños de fuente (h1, h2, precios) dinámicamente mediante CSS (`clamp` o `media queries`) para evitar desbordamientos en pantallas pequeñas.
*   **Márgenes y Espaciados:** Reducir el padding general en la vista móvil para aprovechar mejor el ancho de la pantalla y que las tarjetas de producto se vean más amplias.
*   **Optimizaciones de Navegación:** Revisar el `CategoryNav` para asegurar que el scroll horizontal en móviles sea fluido e intuitivo (ocultar barras de scroll nativas, añadir "sombras" indicativas).
*   **Espacio Seguro (Safe Area):** Añadir un `padding-bottom` adecuado para evitar que la barra de navegación del navegador móvil (Safari/Chrome) tape el último producto.

## FASE 2: Pulido de Interacción (Animaciones)
*Una vez el diseño es sólido, se añade la "magia" para dar una sensación de app premium.*

*   **Fade-in al hacer Scroll:** Implementar `IntersectionObserver` (o animaciones CSS) para que los platos aparezcan suavemente de abajo hacia arriba a medida que el cliente baja por la carta.
*   **Refinamiento del Modal:** Asegurar que el modal de imagen ampliada esté perfectamente centrado y no permita el scroll del fondo (bloquear el `body`) mientras está abierto.

## FASE 3: Integración de Contenido Faltante (Imágenes IA)
*Cuando el motor de IA vuelva a estar operativo (aprox. 4 horas).*

*   **Regeneración de Imágenes:** Crear las 2 imágenes corregidas (Tabla Tapilla y Pan de Ajo).
*   **Generación Final:** Crear las 3 imágenes faltantes por cuota (Picaña, Hot Dog, Pizza Personalizada).
*   **Vinculación:** Subir a `/public/products/` y actualizar `productos.json`.

## FASE 4: Preparación para Producción (Despliegue)
*Empaquetar el proyecto local y subirlo a un servidor real para que sea accesible públicamente.*

*   **Construcción (Build):** Ejecutar y optimizar el empaquetado de Vite (`npm run build`).
*   **Hosting Gratuito/Premium:** Desplegar la aplicación web en una plataforma como Vercel o Netlify. Esto nos dará una URL pública real (ej: `el-rincon-carta.vercel.app` o un dominio personalizado si lo tienes).

## FASE 5: Herramientas Físicas (Código QR)
*El paso final, ya que el QR necesita apuntar a la URL definitiva de producción.*

*   **Generación del QR:** Crear un código QR vectorial de alta resolución apuntando a la URL pública.
*   **Diseño del QR:** Personalizar el QR con colores corporativos (Dorado/Negro) y el Favicon de "El Rincón" en el centro para imprimirlo en las mesas del restaurante.

---

> [!IMPORTANT]
> **Revisión del Usuario Requerida**
> Por favor, revisa el orden propuesto en este plan. Si estás de acuerdo, dímelo y comenzaremos inmediatamente con la **FASE 1**.
> 
> **Pregunta Abierta:** Para la Fase 4, ¿tienes ya un servidor contratado o prefieres que configuremos un alojamiento rápido y gratuito (como Vercel/Netlify) que es el estándar actual para apps en React?
