import React, { useContext } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { CartContext } from '../../context/CartContext';
import CartListItem from '../atoms/CartListItem';

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  height: 100%;
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
`;

const FinishButton = styled.button`
  color: #ffffff;
  text-align: center;
  width: 50%;
  margin-bottom: 20px;
  align-self: center;
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

const CartModal = ({ cartOpen, setCartOpen, theme, type, setCheckoutOpen }) => {
  const context = useContext(CartContext);

  const goToCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <div>
      <Modal
        isOpen={cartOpen}
        onRequestClose={() => {
          setCartOpen(false);
        }}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          content: {
            border: 'none',
            marginTop: '8rem',
            height: '80vh',
            overflow: 'auto',
          },
        }}
      >
        <Wrapper>
          <Title>Carrinho</Title>
          <CartList>
            {context.getCartByType(type).map((pokemon, index) => {
              return <CartListItem pokemon={pokemon} key={index} />;
            })}
          </CartList>
          <FinalPrice>
            Total R${context.getTotalPriceByType(type)},00
          </FinalPrice>
          <FinishButton
            onClick={() => {
              goToCheckout();
            }}
            color={theme}
          >
            Finalizar
          </FinishButton>
        </Wrapper>
      </Modal>
    </div>
  );
};

export default CartModal;
