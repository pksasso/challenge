import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [fireCart, setFireCart] = useState([]);
  const [waterCart, setWaterCart] = useState([]);

  const getCartByType = (type) => {
    switch (type) {
      case 'fire':
        return fireCart;
      case 'water':
        return waterCart;
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
    }
  };

  const getTotalPriceByType = (type) => {
    switch (type) {
      case 'fire':
        return fireTotalPrice();

      case 'water':
        return waterTotalPrice();
    }
  };

  const clearCartByType = (type) => {
    switch (type) {
      case 'fire':
        return clearFireCart();

      case 'water':
        return clearWaterCart();
    }
  };

  const clearFireCart = () => {
    console.log(fireCart.length);
    if (fireCart.length === 0) {
      return 0;
    } else {
      setFireCart([]);
      return 1;
    }
  };

  const clearWaterCart = () => {
    setWaterCart([]);
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
