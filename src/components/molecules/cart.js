import React, { useContext } from 'react';
import styled from 'styled-components';
import CartListItem from '../atoms/CartListItem';
import { CartContext } from '../../context/CartContext';

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh;

  right: 0;
  width: 35rem;
  max-height: calc(100vh - 8rem);
  margin: 1rem;

  border-radius: 2px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 770px) {
    max-height: calc(100vh - 9rem);
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }

  @media only screen and (max-width: 500px) {
    max-height: calc(100vh - 10rem);
  }
  @media only screen and (max-width: 400px) {
    max-height: calc(100vh - 11rem);
  }
`;
const Title = styled.h1`
  color: #5e5e5e;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Roboto';
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: 1px solid #c2c2c2;
`;
const FinalPrice = styled.div`
  color: #000000;
  padding-bottom: 1rem;
  padding-top: 1rem;
  text-align: center;
  font-size: 2rem;
  font-family: 'Roboto';
  border-top: 1px solid #c2c2c2;
`;

const CartList = styled.div`
  font-size: 2rem;
  font-family: 'Roboto';
  flex-grow: 1;
  overflow: auto;
`;

const FinishButton = styled.button`
  background-color: green;
  color: #ffffff;
  text-align: center;
  font-size: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-family: 'Roboto';
  outline: none;
  border: none;
  transition: 0.2s all;
  background-color: ${(props) => props.color.primary};
  :hover {
    background-color: ${(props) => props.color.dark};
  }
`;

const Cart = ({ theme, type }) => {
  const context = useContext(CartContext);

  const cleanCart = () => {
    if (context.clearCartByType(type) === 0) {
      alert('Coloque algo no seu carrinho');
    } else {
      alert('Pedido Finalizado. Obrigado por comprar conosco.');
    }
  };

  return (
    <Wrapper>
      <Title>Carrinho</Title>
      <CartList>
        {context.getCartByType(type).map((pokemon, index) => {
          return <CartListItem pokemon={pokemon} key={index} />;
        })}
      </CartList>
      <FinalPrice>Total R${context.getTotalPriceByType(type)},00</FinalPrice>
      <FinishButton
        onClick={() => {
          cleanCart();
        }}
        color={theme}
      >
        Finalizar
      </FinishButton>
    </Wrapper>
  );
};

export default Cart;
