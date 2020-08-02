import React from 'react';
import styled from 'styled-components';

import CartIcon from './CartIcon';

const Wrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.primary};
  box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.6);
  display: flex;
  height: 6rem;
  width: 100vw;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 5;
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
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 3.5rem;
  margin-left: 2rem;
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BurgerWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 700px) {
    display: inline;
    z-index: 50;
  }
`;

const Header = ({ logo, label, cartOpen, setCartOpen }) => {
  return (
    <Wrapper>
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
