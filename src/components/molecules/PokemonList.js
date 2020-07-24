import React from 'react';
import styled from 'styled-components';

import PokemonItem from '../atoms/PokemonItem';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  justify-content: space-evenly;
  align-content: space-between;
  grid-row-gap: 5rem;
  grid-column-gap: 2rem;
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
