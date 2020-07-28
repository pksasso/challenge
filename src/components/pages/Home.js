import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fire from '../../assets/fire.svg';
import water from '../../assets/water.svg';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const ButtonsWrapper = styled.div`
  position: relative;
`;

const Item = styled(Link)`
  :not(:last-child) {
    margin-right: 5rem;
  }
`;

const Type = styled.img`
  background-color: ${(props) => props.type};
  border-radius: 10rem;
  box-shadow: 10px 10px 45px -19px ${(props) => props.type};
  height: 18rem;
  padding: 2rem;
  transition: 0.5s all;
  :hover {
    box-shadow: 10px 10px 60px 0px ${(props) => props.type};
    transform: scale(1.03);
  }
`;

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Roboto';
  font-size: 3rem;
  margin-bottom: 30rem;
  position: absolute;
`;

const Home = (props) => {
  return (
    <Wrapper>
      <Title>Qual tipo você quer comprar?</Title>
      <ButtonsWrapper>
        <Item to='/fogo'>
          <Type src={fire} alt='fogo' type={props.theme.fire.primary} />
        </Item>
        <Item to='/agua'>
          <Type src={water} alt='agua' type={props.theme.water.primary} />
        </Item>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Home;
