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
  border-bottom: 1px solid #c2c2c2;
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
  font-family: 'Roboto';
  font-size: 2rem;
  flex-grow: 1;
`;

const FinishButton = styled.button`
  align-self: center;
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  outline: none;
  padding-bottom: 1rem;
  padding-top: 1rem;
  transition: 0.2s all;
  width: 50%;
  :hover {
    background-color: ${(props) => props.theme.dark};
  }
`;

const CartModal = ({ cartOpen, setCartOpen, type, setCheckoutOpen }) => {
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
          >
            Finalizar
          </FinishButton>
        </Wrapper>
      </Modal>
    </div>
  );
};

export default CartModal;
