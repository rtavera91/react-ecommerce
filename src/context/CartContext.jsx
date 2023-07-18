//Creamos un Context para nuestra aplicación
import React, { createContext, useState } from "react";

export const CartContext = createContext();

//Creamos un Provider para nuestro Context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // revisa si el producto ya está en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    //Opción 1: usando structuredClone para clonar el objeto product
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    //si el producto no está en el carrito
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => {
      const updatedCart = prevState.map((item) => {
        if (item.id === product.id) {
          if (item.quantity > 1) {
            // Restar una unidad si la cantidad es mayor a 1
            return { ...item, quantity: item.quantity - 1 };
          } else {
            // Eliminar el producto si la cantidad es 1
            return null;
          }
        }
        return item;
      });
      return updatedCart.filter((item) => item !== null);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
