import React, { useContext, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { CartContext } from '../../context/CartContext';

const Wrapper = styled.div`
  background-color: #ffffff;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Content = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  font-size: 2.5rem;
`;

const Title = styled.h1`
  color: #5e5e5e;
  text-align: center;
  font-size: 4rem;
  font-family: 'Roboto';
  margin-bottom: 30px;
`;

const Message = styled.p`
  color: #5e5e5e;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Roboto';
`;

const FinishButton = styled.button`
  color: #5e5e5e;
  font-size: 30px;
  right: 0;
  position: absolute;
  background-color: transparent;
  font-family: 'Roboto';
  outline: none;
  border: none;
  transition: 0.2s all;
  :hover {
    color: #000000;
    transform: scale(1.05);
  }
`;

const CheckoutModal = ({ checkoutOpen, setCheckoutOpen, type }) => {
  const context = useContext(CartContext);

  useEffect(() => {
    return () => {
      console.log(checkoutOpen);
      context.clearCartByType(type);
    };
  }, []);

  const totalPrice = () => {
    const total = context.getTotalPriceByType(type) / 10;
    if (total === 0) {
      return 0;
    } else {
      return total.toFixed(2);
    }
  };

  const cleanCart = () => {
    context.clearCartByType(type);
    setCheckoutOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={checkoutOpen}
        onRequestClose={() => {
          cleanCart();
        }}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          content: {
            border: 'none',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            height: '70vh',
            width: '70vw',
          },
        }}
      >
        <Wrapper>
          <FinishButton
            onClick={() => {
              cleanCart();
            }}
          >
            X
          </FinishButton>
          {totalPrice() === 0 ? (
            <Content>
              <Title>Carrinho vazio</Title>
            </Content>
          ) : (
            <Content>
              <Title>Obrigado pela sua compra !!!</Title>
              <Message>Você ganhou</Message>
              <Message>
                {checkoutOpen ? <strong>R$ {totalPrice()}</strong> : ''}
              </Message>
              <Message>para gastar na próxima vez</Message>
            </Content>
          )}
        </Wrapper>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
