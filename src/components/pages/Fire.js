import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { getPokemonsByType } from '../../api/connections';

import Header from '../atoms/Header';
import Loader from '../atoms/Loader';
import fire from '../../assets/fire.svg';
import Cart from '../molecules/Cart';
import PokemonList from '../molecules/PokemonList';
import CartModal from '../molecules/CartModal';

const FIRE_TYPE = 10;

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

const FireStore = ({ type, theme }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        setIsLoading(true);
        const data = await getPokemonsByType(FIRE_TYPE);
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
        logo={fire}
        label='Fire Store'
        theme={theme.fire}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <CartModal
        setCartOpen={setCartOpen}
        cartOpen={cartOpen}
        theme={theme.fire}
        type={type}
      />

      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <Body>
            <PokemonList pokemons={pokemons} type={type} theme={theme.fire} />
            <Cart type={type} theme={theme.fire} />
          </Body>
        )}
      </div>
    </div>
  );
};

export default FireStore;
