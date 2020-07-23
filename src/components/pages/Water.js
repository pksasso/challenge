import React, { useEffect, useState } from 'react';

import { getPokemonsByType } from '../../api/connections';

import water from '../../assets/water.svg';
import Header from '../Header';
import Loader from '../Loader';
import PokemonList from '../PokemonList';

const WATER_TYPE = 11;

const WaterStore = (props) => {
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
      <Header logo={water} label='Water Store' theme={props.theme.water} />
      {isLoading ? (
        <Loader />
      ) : (
        <PokemonList pokemons={pokemons} theme={props.theme.water} />
      )}
    </div>
  );
};

export default WaterStore;
