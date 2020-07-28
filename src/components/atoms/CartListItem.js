import React from 'react';
import styled from 'styled-components';
import pokeballSprite from '../../assets/pokeballSprite.svg';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 6rem;
  padding-right: 1rem;
  padding-left: 1rem;
  width: 100%;
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
  color: #454545;
  font-family: 'Roboto';
  font-size: 1.6rem;
`;

const Name = styled(Infos)`
  flex-grow: 1;
  text-overflow: ellipsis;
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
