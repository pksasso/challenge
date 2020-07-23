import React from 'react';
import styled from 'styled-components';

import PokemonItem from './PokemonItem';

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  justify-content: space-evenly;
  align-content: space-between;
  grid-row-gap: 5rem;
  grid-column-gap: 2rem;
`;

const Wrapper = styled.div``;

function PokemonList({ pokemons, theme }) {
  return (
    <Wrapper>
      <List>
        {pokemons.map((pokemon) => {
          return (
            <PokemonItem pokemon={pokemon} theme={theme} key={pokemon.id} />
          );
        })}
      </List>
    </Wrapper>
  );
}

export default PokemonList;
