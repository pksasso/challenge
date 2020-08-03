import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const getItemStorage = (storeName) => {
    const localData = localStorage.getItem(`@${storeName}-store/cart`);
    return localData ? JSON.parse(localData) : [];
  };

  const setItemStorage = (storeName, cart) => {
    localStorage.setItem(`@${storeName}-store/cart`, JSON.stringify(cart));
  };

  const [normalCart, setNormalCart] = useState(() => {
    return getItemStorage('normal');
  });
  const [fightingCart, setFightingCart] = useState(() => {
    return getItemStorage('fighting');
  });
  const [flyingCart, setFlyingCart] = useState(() => {
    return getItemStorage('flying');
  });
  const [poisonCart, setPoisonCart] = useState(() => {
    return getItemStorage('poison');
  });
  const [groundCart, setGroundCart] = useState(() => {
    return getItemStorage('ground');
  });
  const [rockCart, setRockCart] = useState(() => {
    return getItemStorage('rock');
  });
  const [bugCart, setBugCart] = useState(() => {
    return getItemStorage('bug');
  });
  const [ghostCart, setGhostCart] = useState(() => {
    return getItemStorage('ghost');
  });
  const [steelCart, setSteelCart] = useState(() => {
    return getItemStorage('steel');
  });
  const [fireCart, setFireCart] = useState(() => {
    return getItemStorage('fire');
  });
  const [waterCart, setWaterCart] = useState(() => {
    return getItemStorage('water');
  });
  const [grassCart, setGrassCart] = useState(() => {
    return getItemStorage('grass');
  });
  const [electricCart, setElectricCart] = useState(() => {
    return getItemStorage('electric');
  });
  const [psychicCart, setPsychicCart] = useState(() => {
    return getItemStorage('psychic');
  });
  const [iceCart, setIceCart] = useState(() => {
    return getItemStorage('ice');
  });
  const [dragonCart, setDragonCart] = useState(() => {
    return getItemStorage('dragon');
  });
  const [darkCart, setDarkCart] = useState(() => {
    return getItemStorage('dark');
  });
  const [fairyCart, setFairyCart] = useState(() => {
    return getItemStorage('fairy');
  });

  useEffect(() => {
    setItemStorage('normal', normalCart);
  }, [normalCart]);

  useEffect(() => {
    setItemStorage('fighting', fightingCart);
  }, [fightingCart]);

  useEffect(() => {
    setItemStorage('flying', flyingCart);
  }, [flyingCart]);

  useEffect(() => {
    setItemStorage('poison', poisonCart);
  }, [poisonCart]);

  useEffect(() => {
    setItemStorage('ground', groundCart);
  }, [groundCart]);

  useEffect(() => {
    setItemStorage('rock', rockCart);
  }, [rockCart]);

  useEffect(() => {
    setItemStorage('bug', bugCart);
  }, [bugCart]);

  useEffect(() => {
    setItemStorage('ghost', ghostCart);
  }, [ghostCart]);

  useEffect(() => {
    setItemStorage('steel', steelCart);
  }, [steelCart]);

  useEffect(() => {
    setItemStorage('fire', fireCart);
  }, [fireCart]);

  useEffect(() => {
    setItemStorage('water', waterCart);
  }, [waterCart]);

  useEffect(() => {
    setItemStorage('grass', grassCart);
  }, [grassCart]);

  useEffect(() => {
    setItemStorage('electric', electricCart);
  }, [electricCart]);

  useEffect(() => {
    setItemStorage('psychic', psychicCart);
  }, [psychicCart]);

  useEffect(() => {
    setItemStorage('ice', iceCart);
  }, [iceCart]);

  useEffect(() => {
    setItemStorage('dragon', dragonCart);
  }, [dragonCart]);

  useEffect(() => {
    setItemStorage('dark', darkCart);
  }, [darkCart]);

  useEffect(() => {
    setItemStorage('fairy', fairyCart);
  }, [fairyCart]);

  const cartsType = {
    normal: {
      cart: normalCart,
      setCart: setNormalCart,
    },
    fighting: {
      cart: fightingCart,
      setCart: setFightingCart,
    },
    flying: {
      cart: flyingCart,
      setCart: setFlyingCart,
    },
    poison: {
      cart: poisonCart,
      setCart: setPoisonCart,
    },
    ground: {
      cart: groundCart,
      setCart: setGroundCart,
    },
    rock: {
      cart: rockCart,
      setCart: setRockCart,
    },
    bug: {
      cart: bugCart,
      setCart: setBugCart,
    },
    ghost: {
      cart: ghostCart,
      setCart: setGhostCart,
    },
    steel: {
      cart: steelCart,
      setCart: setSteelCart,
    },
    fire: {
      cart: fireCart,
      setCart: setFireCart,
    },
    water: {
      cart: waterCart,
      setCart: setWaterCart,
    },
    grass: {
      cart: grassCart,
      setCart: setGrassCart,
    },
    electric: {
      cart: electricCart,
      setCart: setElectricCart,
    },
    psychic: {
      cart: psychicCart,
      setCart: setPsychicCart,
    },
    ice: {
      cart: iceCart,
      setCart: setIceCart,
    },
    dragon: {
      cart: dragonCart,
      setCart: setDragonCart,
    },
    dark: {
      cart: darkCart,
      setCart: setDarkCart,
    },
    fairy: {
      cart: fairyCart,
      setCart: setFairyCart,
    },
  };

  const getCartByType = (type) => {
    return cartsType[type].cart;
  };

  const addCartByType = (type, pokemon) => {
    addCart(pokemon, cartsType[type].cart, cartsType[type].setCart);
  };

  const getTotalPriceByType = (type) => {
    return totalPrice(cartsType[type].cart);
  };

  const clearCartByType = (type) => {
    return clearCart(cartsType[type].cart, cartsType[type].setCart);
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
