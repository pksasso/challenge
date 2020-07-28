import React from 'react';
import styled from 'styled-components';

import cart from '../../assets/cart.svg';

const CartWrapper = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  margin-right: 3rem;
  outline: none;
  padding: 3px;
  transition: 0.2s all;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const CartImage = styled.img`
  color: white;
  height: 4rem;
`;

function CartIcon({ cartOpen, setCartOpen }) {
  return (
    <CartWrapper
      onClick={() => {
        setCartOpen(!cartOpen);
      }}
    >
      <CartImage src={cart} />
    </CartWrapper>
  );
}

export default CartIcon;
