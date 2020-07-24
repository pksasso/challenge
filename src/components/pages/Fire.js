import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { getPokemonsByType } from '../../api/connections';

import Header from '../atoms/Header';
import Loader from '../atoms/Loader';
import fire from '../../assets/fire.svg';
import Cart from '../molecules/cart';

import PokemonList from '../molecules/PokemonList';

const FIRE_TYPE = 10;

const Body = styled.div`
  display: grid;
  grid-template-columns: auto 25vw;
  margin-top: 6rem;
`;

const FireStore = ({ type, theme }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <Header logo={fire} label='Fire Store' theme={theme.fire} />
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
