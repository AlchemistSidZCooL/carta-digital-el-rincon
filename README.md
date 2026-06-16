# Proyecto El Rincón - Carta Digital 📱🍽️

Este repositorio y arquitectura de carpetas están destinados a la digitalización de "El Rincón de Tetuán" y la creación de su **Carta Digital interactiva**. El objetivo es proporcionar a los clientes una experiencia premium, rápida y moderna accesible mediante un Código QR escaneado en las mesas.

## 🏗️ Arquitectura del Proyecto

El proyecto está dividido en las siguientes secciones principales:

*   **`/assets_originales/`**: Contiene las fotografías, cartas físicas escaneadas, comandas y material gráfico en alta resolución que sirve como base e inspiración para el diseño de la aplicación web. Los archivos han sido clasificados y renombrados según su temática.
*   **`/carta-digital/`**: Es la aplicación frontend principal. Desarrollada usando **React y Vite** para asegurar máxima velocidad, con un diseño moderno (Glassmorphism, Modo Oscuro) optimizado para dispositivos móviles (Mobile-First).
*   **`CHANGELOG.md`**: Registro histórico de cambios y versiones del proyecto.
*   **`README.md`**: Documento de referencia principal del proyecto.

## 🚀 Tecnologías Utilizadas

*   **Framework Frontend:** React 18 + Vite
*   **Lenguaje:** TypeScript (`.tsx`) para tipado estricto
*   **Base de Datos:** Arquitectura JSON local dinámica (`productos.json`)
*   **Estilos:** CSS3 Vanilla (Variables CSS, Flexbox/Grid, Glassmorphism, animaciones)
*   **Tipografías:** Google Fonts ('Zilla Slab' y 'Outfit')
*   **Generación Visual:** Creación de recursos gráficos mediante IA Generativa (Midjourney/DALL-E style)

## 🛠️ Cómo Ejecutar el Proyecto (Desarrollo Local)

Para previsualizar la carta digital en tu máquina local, ejecuta los siguientes comandos en tu terminal:

```bash
# 1. Entrar a la carpeta de la aplicación web
cd carta-digital/

# 2. Instalar dependencias (solo la primera vez)
npm install

# 3. Iniciar el servidor de desarrollo local
npm run dev
```

El servidor iniciará la aplicación, normalmente en `http://localhost:5173`.

## 🎯 Próximos Pasos (Roadmap)

- [ ] Completar la generación de fotografías premium para las raciones y platos combinados restantes.
- [ ] Habilitar y estructurar el resto de las categorías en la interfaz (Pastas, Pizzas con sistema de extras, Hamburguesas).
- [ ] Implementar conversión automatizada de imágenes a formato `.webp` para rendimiento web máximo.
- [ ] Generar script automatizado para la creación del **Código QR** del restaurante.
- [ ] Despliegue a producción (hosting online) para acceso público.
