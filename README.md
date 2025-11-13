# Proyecto de React

Este proyecto es una muestra desarrollada como parte de un curso de React. Su objetivo es demostrar conceptos fundamentales de React, incluyendo componentes, hooks, contexto y manejo de estado, utilizando una estructura moderna y buenas prácticas.

## Descripción Detallada

Este proyecto es una tienda demo hecha con React, pensada como muestra para un curso. Aquí tienes un resumen de lo que incluye y utiliza:

### Tecnologías y dependencias principales

-   **React**: Framework principal para construir la interfaz.
-   **Vite**: Herramienta de desarrollo y build rápida.
-   **Bootstrap**: Para estilos responsivos y componentes visuales.
-   **React Router DOM**: Para navegación y rutas.
-   **React Icons**: Para íconos SVG.
-   **React Toastify**: Para notificaciones.

### Estructura y funcionalidades

-   **Grilla de productos**: Listado responsivo de productos usando Bootstrap.
-   **Tarjetas de producto**: Cada producto muestra imagen, nombre, precio y descripción.
-   **Detalle de producto**: Vista ampliada con opción de agregar al carrito.
-   **Carrito de compras**: Implementado con contexto global (`CartContext`), permite agregar, eliminar y vaciar productos.
-   **Navegación**: Barra superior con enlaces a categorías y al carrito.
-   **Autenticación**: Contexto de autenticación (`AuthContext`) y login básico para acceder a la sección de administración.
-   **Rutas protegidas**: Solo usuarios autenticados pueden acceder al formulario de alta de productos.
-   **Formulario de productos**: Permite crear productos nuevos, subiendo imágenes a imgbb y validando los datos.
-   **Servicios**: Abstracción para interactuar con una API mock (mockapi.io) y para subir imágenes.
-   **Layouts**: Separación de layouts para la vista principal y la de administración.
-   **Hooks personalizados**: Para acceder fácilmente a los contextos de carrito y autenticación.

### Personalización y estilos

-   **CSS modularizado**: Cada componente tiene su propio archivo de estilos.
-   **App.css**: Personalización global y ajustes para la navegación y el layout.

### Instalación y uso

-   Instalas dependencias con `npm install`.
-   Inicias el servidor con `npm run dev`.
-   Accedes a la app en el navegador.

### Autor

-   Pablo Pérez

# Demo: React + Vite + Bootstrap

Esta app es una tienda demo hecha con React y Vite, usando Bootstrap para estilos responsivos y componentes visuales.

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

## Autor

**Pablo Pérez**

---

Este repositorio sirve como referencia educativa y práctica para quienes deseen aprender React desde cero o reforzar sus conocimientos.
