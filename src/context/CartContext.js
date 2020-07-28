import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [fireCart, setFireCart] = useState(() => {
    const localData = localStorage.getItem('@fire-store/cart');
    return localData ? JSON.parse(localData) : [];
  });

  const [waterCart, setWaterCart] = useState(() => {
    const localData = localStorage.getItem('@water-store/cart');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('@fire-store/cart', JSON.stringify(fireCart));
    return () => {};
  }, [fireCart]);

  useEffect(() => {
    localStorage.setItem('@water-store/cart', JSON.stringify(waterCart));
    return () => {};
  }, [waterCart]);

  const getCartByType = (type) => {
    switch (type) {
      case 'fire':
        return fireCart;
      case 'water':
        return waterCart;
      default:
        return 0;
    }
  };

  const addCartByType = (type, pokemon) => {
    switch (type) {
      case 'fire':
        addFireCart(pokemon);
        break;
      case 'water':
        addWaterCart(pokemon);
        break;
      default:
        return 0;
    }
  };

  const getTotalPriceByType = (type) => {
    switch (type) {
      case 'fire':
        return fireTotalPrice();

      case 'water':
        return waterTotalPrice();
      default:
        return 0;
    }
  };

  const clearCartByType = (type) => {
    switch (type) {
      case 'fire':
        return clearFireCart();
      case 'water':
        return clearWaterCart();
      default:
        return 0;
    }
  };

  const clearFireCart = () => {
    if (fireCart.length === 0) {
      return 0;
    } else {
      setFireCart([]);
      return 1;
    }
  };

  const clearWaterCart = () => {
    if (waterCart.length === 0) {
      return 0;
    } else {
      setWaterCart([]);
      return 1;
    }
  };

  const fireTotalPrice = () => {
    let totalPrice = fireCart
      ? fireCart.reduce((totalPrice, pokemon) => totalPrice + pokemon.price, 0)
      : 0;
    return totalPrice;
  };

  const waterTotalPrice = () => {
    let totalPrice = waterCart
      ? waterCart.reduce((totalPrice, pokemon) => totalPrice + pokemon.price, 0)
      : 0;
    return totalPrice;
  };

  const addFireCart = (item) => {
    let list = [...fireCart, item];
    setFireCart(list);
  };

  const addWaterCart = (item) => {
    let list = [...waterCart, item];
    setWaterCart(list);
  };

  return (
    <CartContext.Provider
      value={{
        addCartByType,
        getTotalPriceByType,
        clearCartByType,
        getCartByType,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
