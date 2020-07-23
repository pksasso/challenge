import React from 'react';
import styled, { keyframes } from 'styled-components';
import pokeball from '../assets/pokeball.svg';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

const Pokeball = styled.img`
  height: 20rem;
  pointer-events: none;
  animation: ${rotate} 1.5s linear infinite;
  opacity: 30%;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Pokeball src={pokeball} alt='loading' />
    </Wrapper>
  );
};

export default Loader;
