import { createContext, useContext, useEffect, useState } from 'react';

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
    updateLocalStorage(newProducts);
  };

  const removeProductFromCart = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);

    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const updateLocalStorage = (produc) => {
    localStorage.setItem('devburger:cart', JSON.stringify(produc));
  };

  const clearCart = () => {
    setCart([]);
    updateLocalStorage([]);
  };

  const increaseProductQuantity = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : { ...prd };
    });

    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const decreaseProductQuantity = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : { ...prd };
      });

      setCart(newCart);
      updateLocalStorage(newCart);
    } else {
      removeProductFromCart(productId);
    }
  };

  useEffect(() => {
    const storagedCart = localStorage.getItem('devburger:cart');

    if (storagedCart) {
      setCart(JSON.parse(storagedCart));
    }
  }, []);

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
