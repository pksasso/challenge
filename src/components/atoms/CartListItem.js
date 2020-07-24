import React from 'react';
import styled from 'styled-components';
import pokeballSprite from '../../assets/pokeballSprite.svg';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  padding-right: 2rem;
  padding-left: 2rem;
  :hover {
    background-color: #ebebeb;
  }
  :not(:last-child) {
    border-bottom: 1px solid #c2c2c2;
  }
`;

const Image = styled.img`
  height: 5rem;
  width: auto;
`;

const Infos = styled.p`
  font-family: 'Roboto';
  font-size: 1.8rem;
  color: #454545;
`;

const Name = styled(Infos)`
  flex-grow: 1;
`;

const CartListItem = ({ pokemon }) => {
  return (
    <Wrapper>
      <Image src={pokemon.sprite ? pokemon.sprite : pokeballSprite} />
      <Name>{pokemon.name}</Name>
      <Infos>R$ {pokemon.price},00</Infos>
    </Wrapper>
  );
};

export default CartListItem;
