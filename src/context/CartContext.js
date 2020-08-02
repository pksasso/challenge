import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getItemStorage = (storeName) => {
    const localData = localStorage.getItem(storeName);
    return localData ? JSON.parse(localData) : [];
  };

  const [fireCart, setFireCart] = useState(() => {
    return getItemStorage('@fire-store/cart');
  });

  const [waterCart, setWaterCart] = useState(() => {
    return getItemStorage('@water-store/cart');
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
        addCart(pokemon, fireCart, setFireCart);
        break;
      case 'water':
        addCart(pokemon, waterCart, setWaterCart);
        break;
      default:
        return 0;
    }
  };

  const getTotalPriceByType = (type) => {
    switch (type) {
      case 'fire':
        return totalPrice(fireCart);
      case 'water':
        return totalPrice(waterCart);
      default:
        return 0;
    }
  };

  const clearCartByType = (type) => {
    switch (type) {
      case 'fire':
        return clearCart(fireCart, setFireCart);
      case 'water':
        return clearCart(waterCart, setWaterCart);
      default:
        return 0;
    }
  };

  const totalPrice = (cart) => {
    let totalPrice = cart
      ? cart.reduce((totalPrice, pokemon) => totalPrice + pokemon.price, 0)
      : 0;
    return totalPrice;
  };

  const addCart = (item, cart, setCart) => {
    let list = [...cart, item];
    setCart(list);
  };

  const clearCart = (cart, setCart) => {
    if (cart.length === 0) {
      return 0;
    } else {
      setCart([]);
      return 1;
    }
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
