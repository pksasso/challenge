import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fire from '../../assets/fire.svg';
import water from '../../assets/water.svg';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 18rem;
  background-color: ${(props) => props.type};

  border-radius: 10rem;
  padding: 2rem;
  box-shadow: 10px 10px 45px -19px ${(props) => props.type};
  transition: 0.5s all;
  :hover {
    transform: scale(1.03);
    box-shadow: 10px 10px 60px 0px ${(props) => props.type};
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  position: absolute;
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Roboto';
  margin-bottom: 30rem;
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
