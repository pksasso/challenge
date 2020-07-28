import React, { useContext } from 'react';
import styled from 'styled-components';
import CartListItem from '../atoms/CartListItem';
import { CartContext } from '../../context/CartContext';

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 1rem;
  max-height: calc(100vh - 8rem);
  right: 0;
  width: 35rem;
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
  border-bottom: 1px solid #c2c2c2;
  color: #5e5e5e;
  font-family: 'Roboto';
  font-size: 2.5rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  text-align: center;
`;
const FinalPrice = styled.div`
  border-top: 1px solid #c2c2c2;
  color: #000000;
  font-family: 'Roboto';
  font-size: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  text-align: center;
`;

const CartList = styled.div`
  flex-grow: 1;
  font-family: 'Roboto';
  font-size: 2rem;
  overflow: auto;
`;

const FinishButton = styled.button`
  background-color: ${(props) => props.color.primary};
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  outline: none;
  transition: 0.2s all;
  :hover {
    background-color: ${(props) => props.color.dark};
  }
`;

const Cart = ({ theme, type, setCheckoutOpen }) => {
  const context = useContext(CartContext);

  const goToCheckout = () => {
    setCheckoutOpen(true);
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
          goToCheckout();
        }}
        color={theme}
      >
        Finalizar
      </FinishButton>
    </Wrapper>
  );
};

export default Cart;
