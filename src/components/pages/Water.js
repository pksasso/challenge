import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getPokemonsByType } from '../../api/connections';

import water from '../../assets/water.svg';
import Header from '../atoms/Header';
import Loader from '../atoms/Loader';
import PokemonList from '../molecules/PokemonList';
import Cart from '../molecules/Cart';
import CartModal from '../molecules/CartModal';
import CheckoutModal from '../molecules/CheckoutModal';

const WATER_TYPE = 11;

const Body = styled.div`
  display: flex;
  margin-top: 6rem;
  @media only screen and (max-width: 770px) {
    margin-top: 7rem;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 8rem;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 9rem;
  }
`;

const WaterStore = ({ type }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        setIsLoading(true);
        const data = await getPokemonsByType(WATER_TYPE);
        setPokemons(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPokemonList();
  }, []);

  return (
    <div>
      <Header
        logo={water}
        label='Water Store'
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <CartModal
        setCartOpen={setCartOpen}
        cartOpen={cartOpen}
        type={type}
        setCheckoutOpen={setCheckoutOpen}
      />
      <CheckoutModal
        checkoutOpen={checkoutOpen}
        setCheckoutOpen={setCheckoutOpen}
        type={type}
      />
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <Body>
            <PokemonList pokemons={pokemons} type={type} />
            <Cart type={type} setCheckoutOpen={setCheckoutOpen} />
          </Body>
        )}
      </div>
    </div>
  );
};

export default WaterStore;
