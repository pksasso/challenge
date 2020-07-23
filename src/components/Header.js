import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  background: ${(props) => props.color};
  height: 6rem;
  display: flex;
  align-items: center;
  box-shadow: 0px -10px 20px 0px rgba(0, 0, 0, 0.6);
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

const Header = ({ logo, label, theme }) => {
  return (
    <Wrapper color={theme.primary}>
      <Logo src={logo} />
      <Title>{label}</Title>
    </Wrapper>
  );
};

export default Header;
