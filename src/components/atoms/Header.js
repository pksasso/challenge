import React from 'react';
import styled from 'styled-components';

import CartIcon from './CartIcon';

const Wrapper = styled.div`
  width: 100vw;
  background: ${(props) => props.color};
  height: 6rem;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  justify-content: space-between;
  z-index: 5;
  box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.6);
  @media only screen and (max-width: 770px) {
    height: 7rem;
  }
  @media only screen and (max-width: 500px) {
    height: 8rem;
  }
  @media only screen and (max-width: 400px) {
    height: 9rem;
  }
`;

const Logo = styled.img`
  height: 5rem;
  margin-left: 2rem;
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  color: #ffffff;
  font-size: 3.5rem;
  margin-left: 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BurgerWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 700px) {
    display: inline;
    z-index: 50;
  }
`;

const Header = ({ logo, label, theme, cartOpen, setCartOpen }) => {
  return (
    <Wrapper color={theme.primary}>
      <TitleWrapper>
        <Logo src={logo} />
        <Title>{label}</Title>
      </TitleWrapper>
      <BurgerWrapper>
        <CartIcon cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </BurgerWrapper>
    </Wrapper>
  );
};

export default Header;
