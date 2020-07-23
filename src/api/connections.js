import api from './api';

export const getPokemonsByType = async (type) => {
  const pokemonListByType = await api.get(`type/${type}`);
  const pokemonList = Promise.all(
    pokemonListByType.data.pokemon.map(async (item) => {
      const pokemon = await getPokemonDetails(item.pokemon.url.split('/')[6]);
      return pokemon;
    })
  );
  return pokemonList;
};
const getPokemonDetails = async (pokemonId) => {
  const response = await api.get(`pokemon/${pokemonId}`);
  const { id, name, base_experience, sprites } = response.data;
  const pokemon = {
    id,
    name,
    price: base_experience,
    sprite: sprites.front_default,
  };
  return pokemon;
};
