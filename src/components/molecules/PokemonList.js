import React from 'react';
import styled from 'styled-components';

import PokemonItem from '../atoms/PokemonItem';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  width: 100%;
`;

const List = styled.div`
  align-content: space-between;
  display: grid;
  grid-row-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
  justify-content: space-evenly;
  width: 100%;
`;

function PokemonList({ pokemons, theme, type }) {
  return (
    <Wrapper>
      <List>
        {pokemons.map((pokemon) => {
          return (
            <PokemonItem
              pokemon={pokemon}
              type={type}
              theme={theme}
              key={pokemon.id}
            />
          );
        })}
      </List>
    </Wrapper>
  );
}

export default PokemonList;
