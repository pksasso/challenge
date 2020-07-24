import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getPokemonsByType } from '../../api/connections';

import water from '../../assets/water.svg';
import Header from '../atoms/Header';
import Loader from '../atoms/Loader';
import PokemonList from '../molecules/PokemonList';
import Cart from '../molecules/cart';

const WATER_TYPE = 11;

const Body = styled.div`
  display: grid;
  grid-template-columns: auto 25vw;
  margin-top: 6rem;
`;

const WaterStore = ({ type, theme }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <Header logo={water} label='Water Store' theme={theme.water} />
      {isLoading ? (
        <Loader />
      ) : (
        <Body>
          <PokemonList pokemons={pokemons} type={type} theme={theme.water} />
          <Cart type={type} theme={theme.water} />
        </Body>
      )}
    </div>
  );
};

export default WaterStore;
