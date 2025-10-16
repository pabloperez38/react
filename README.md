# React + Vite + Bootstrap

Este proyecto es una tienda demo hecha con React y Vite, usando Bootstrap para estilos responsivos y componentes visuales.

## Características

-   Grilla de productos responsiva usando Bootstrap (`row`, `col-12 col-sm-6 col-md-4 col-lg-3`).
-   Tarjetas de producto con imagen, nombre, precio y descripción.
-   Navegación superior con barra Bootstrap.
-   Carrito de compras con contexto global.
-   Detalle de producto con botón para agregar al carrito.

## Instalación y uso

1. Instala las dependencias:
    ```powershell
    npm install
    ```
2. Inicia el servidor de desarrollo:
    ```powershell
    npm run dev
    ```
3. Abre la app en tu navegador en la URL que muestra Vite (por defecto http://localhost:5173).

## Estructura principal

-   `src/components/ItemList/ItemList.jsx`: grilla de productos.
-   `src/components/Item/Item.jsx`: tarjeta de producto.
-   `src/components/Nav/Nav.jsx`: barra de navegación.
-   `src/context/CartContext/`: lógica de carrito.

## Personalización

Puedes modificar los estilos usando clases de Bootstrap o agregando tus propias reglas en `App.css`.

## Créditos

Basado en la plantilla oficial de Vite + React, extendido para usar Bootstrap y componentes de tienda.
