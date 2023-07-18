# Ecommerce React

Este proyecto es un ecommerce desarrollado con React, donde los usuarios pueden explorar y comprar productos. Proporciona una interfaz de usuario intuitiva y funcionalidades clave para una experiencia de compra satisfactoria.

## Funcionalidades principales

Listado de productos: El proyecto utiliza una base de datos Firestore para almacenar los datos de los productos. En la página principal, los usuarios pueden ver un listado de productos con información relevante como el título, la descripción, el precio y la disponibilidad.

- Navegación fluida: El componente Navbar permite a los usuarios moverse fácilmente entre las diferentes secciones del sitio. Utilizando React Router, se implementa una navegación fluida y sin interrupciones entre las páginas de inicio, categorías y detalles de los productos.

- Filtros de productos: En la página principal, se ofrecen filtros de productos por categorías para facilitar la búsqueda y exploración. Los usuarios pueden seleccionar una categoría específica y ver solo los productos que pertenecen a esa categoría.

- Carrito de compras: El proyecto utiliza el Context de React para gestionar la funcionalidad del carrito de compras. Los usuarios pueden agregar productos al carrito, ver la cantidad de elementos en el carrito mediante el componente CartWidget con un badge y acceder al contenido completo del carrito en la página de compra (ShopPage).

- Checkout y finalización de compra: En la página de compra, los usuarios pueden ver una lista detallada de los productos en su carrito, incluyendo la cantidad y el precio total por artículo. También se muestra el monto total de la compra. Al hacer clic en el botón "Finalizar Compra", se recopila la información del formulario de envío junto con los detalles del carrito y se envían a Firebase para su procesamiento. Los usuarios recibirán un mensaje emergente con el número de orden y se vaciará automáticamente el carrito.

## Uso del proyecto

1. Explorar productos: Los usuarios pueden navegar por el listado de productos en la página principal para ver los productos disponibles. Pueden hacer clic en un producto para ver más detalles.

2. Filtrar por categorías: En la página principal, los usuarios pueden utilizar los filtros de categoría para ver solo los productos de una categoría específica que les interese.

3. Agregar productos al carrito: En la página de detalles del producto, los usuarios pueden agregar el producto deseado al carrito de compras haciendo clic en el botón "Agregar al carrito". El número de elementos en el carrito se muestra en el CartWidget.

4. Ver contenido del carrito: Los usuarios pueden acceder al contenido completo de su carrito de compras en la página de compra (ShopPage). Aquí pueden ver una lista detallada de los productos en el carrito, incluyendo la cantidad y el precio total por artículo.

5. Finalizar la compra: En la página de compra (ShopPage), los usuarios pueden completar el formulario de envío con su información personal y hacer clic en el botón "Finalizar Compra" para enviar la orden. Se les proporcionará un número de orden a través de un mensaje emergente y el carrito se vaciará automáticamente.

## ¿Cómo clonar el proyecto?

Para clonar este proyecto, sigue estos pasos:

Abre la terminal y navega hasta la ubicación deseada donde deseas clonar el proyecto. Ejecuta el siguiente comando:

    git clone https://github.com/tu-usuario/react-ecommerce.git

Una vez completado el clonado, ingresa al directorio del proyecto:

    cd react-ecommerce

Instala las dependencias del proyecto:

    npm install

¡Listo! Ahora puedes ejecutar el proyecto en tu entorno de desarrollo local:

    npm start
