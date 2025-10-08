import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCart] = useState([]); /* // Estado inicial vazio */

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProducts = [];

    if (cartIndex >= 0) {
      newProducts = cartProducts;

      newProducts[cartIndex].quantity = newProducts[cartIndex].quantity + 1;

      setCart(newProducts);
    } else {
      product.quantity = 1;
      newProducts = [...cartProducts, product];

      setCart(newProducts);
    }
  };

  /* useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]); */

  const removeProductFromCart = (product) => {};

  const clearCart = () => {};

  const increaseProductQuantity = (productId) => {};

  const decreaseProductQuantity = (productId) => {};

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        removeProductFromCart,
        clearCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
