import React, { useContext } from 'react';
import styled from 'styled-components';
import pokeballSprite from '../../assets/pokeballSprite.svg';
import { CartContext } from '../../context/CartContext';

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 4px 4px 10px -5px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 10px;
  min-height: 20rem;
  width: 20rem;
  transition: 0.2s all;
  :hover {
    transform: scale(1.05);
  }
`;

const InfosBox = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  border-radius: 20px 20px 0 0;
  flex-direction: column;
  justify-content: center;
`;

const Infos = styled.span`
  color: #454545;
  font-family: 'Roboto';
  font-size: 1.5rem;
`;

const Image = styled.img`
  height: 9rem;
  width: auto;
`;

const BuyButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 2rem;
  padding: 0.6rem;
  transition: 0.2s all;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  outline: none;
  justify-self: end;
  width: inherit;
  :hover {
    background-color: ${(props) => props.theme.dark};
  }
`;

const PokemonItem = ({ pokemon, type }) => {
  const context = useContext(CartContext);

  return (
    <Wrapper>
      <InfosBox>
        <Image src={pokemon.sprite ? pokemon.sprite : pokeballSprite} />
        <Infos>{pokemon.name}</Infos>
        <Infos>{`R$ ${pokemon.price},00`}</Infos>
      </InfosBox>
      <BuyButton onClick={() => context.addCartByType(type, pokemon)}>
        Comprar
      </BuyButton>
    </Wrapper>
  );
};

export default PokemonItem;
