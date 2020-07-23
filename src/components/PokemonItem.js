import React from 'react';
import styled from 'styled-components';
import pokeballSprite from '../assets/pokeballSprite.svg';

const Wrapper = styled.div`
  height: 100%;
  min-height: 20rem;
  width: 20rem;
  background-color: #ffffff;
  margin: 10px;
  display: flex;
  justify-content: center;
  box-shadow: 4px 4px 10px -5px rgba(0, 0, 0, 0.4);
  flex-direction: column;
  border-radius: 20px;
`;

const InfosBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Infos = styled.span`
  font-family: 'Roboto';
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.8);
`;

const Image = styled.img`
  height: 9rem;
  width: auto;
`;

const BuyButton = styled.button`
  padding: 0.6rem;
  font-family: 'Roboto';
  font-size: 2rem;
  border: none;
  color: #ffffff;
  background-color: ${(props) => props.color.primary};
  z-index: 2;
  transition: 0.2s all;
  :hover {
    background-color: ${(props) => props.color.dark};
  }
`;

const PokemonItem = ({ pokemon, theme }) => {
  return (
    <Wrapper>
      <InfosBox>
        <Image src={pokemon.sprite ? pokemon.sprite : pokeballSprite} />
        <Infos>{pokemon.name}</Infos>
        <Infos>{`RS ${pokemon.price},00`}</Infos>
      </InfosBox>
      <BuyButton color={theme}>Comprar</BuyButton>
    </Wrapper>
  );
};

export default PokemonItem;
