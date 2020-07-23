import React, { useEffect, useState } from 'react';

import { getPokemonsByType } from '../../api/connections';

import Header from '../Header';
import Loader from '../Loader';
import fire from '../../assets/fire.svg';

import PokemonList from '../PokemonList';

const FIRE_TYPE = 10;

const FireStore = (props) => {
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
      <Header logo={fire} label='Fire Store' theme={props.theme.fire} />
      {isLoading ? (
        <Loader />
      ) : (
        <PokemonList pokemons={pokemons} theme={props.theme.fire} />
      )}
    </div>
  );
};

export default FireStore;
