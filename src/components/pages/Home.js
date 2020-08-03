import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import fire from '../../assets/pokemonTypes/fire.svg';
import water from '../../assets/pokemonTypes/water.svg';
import grass from '../../assets/pokemonTypes/grass.svg';
import normal from '../../assets/pokemonTypes/normal.svg';
import fighting from '../../assets/pokemonTypes/fighting.svg';
import flying from '../../assets/pokemonTypes/flying.svg';
import poison from '../../assets/pokemonTypes/poison.svg';
import ground from '../../assets/pokemonTypes/ground.svg';
import rock from '../../assets/pokemonTypes/rock.svg';
import bug from '../../assets/pokemonTypes/bug.svg';
import ghost from '../../assets/pokemonTypes/ghost.svg';
import steel from '../../assets/pokemonTypes/steel.svg';
import electric from '../../assets/pokemonTypes/electric.svg';
import psychic from '../../assets/pokemonTypes/psychic.svg';
import ice from '../../assets/pokemonTypes/ice.svg';
import dragon from '../../assets/pokemonTypes/dragon.svg';
import dark from '../../assets/pokemonTypes/dark.svg';
import fairy from '../../assets/pokemonTypes/fairy.svg';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;

const Item = styled(Link)`
  margin-right: 5rem;
`;

const ImgWrapper = styled.div`
  grid-column: span 2;
  background-color: ${(props) => props.type};
  border-radius: 10rem;
  box-shadow: 10px 10px 45px -19px ${(props) => props.type};
  padding: 2.5rem;
  transition: 0.5s all;
  :hover {
    box-shadow: 10px 10px 60px 0px ${(props) => props.type};
    transform: scale(1.03);
  }
`;

const Type = styled.img`
  height: 10rem;
`;

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Roboto';
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const Home = (props) => {
  return (
    <Wrapper>
      <Title>Qual tipo você quer comprar?</Title>
      <ButtonsWrapper>
        <Item to='/normal'>
          <ImgWrapper type={props.theme.normal.primary}>
            <Type src={normal} alt='normal' />
          </ImgWrapper>
        </Item>
        <Item to='/lutador'>
          <ImgWrapper type={props.theme.fighting.primary}>
            <Type src={fighting} alt='lutador' />
          </ImgWrapper>
        </Item>
        <Item to='/voador'>
          <ImgWrapper type={props.theme.flying.primary}>
            <Type src={flying} alt='voador' />
          </ImgWrapper>
        </Item>
        <Item to='/veneno'>
          <ImgWrapper type={props.theme.poison.primary}>
            <Type src={poison} alt='veneno' />
          </ImgWrapper>
        </Item>
        <Item to='/terra'>
          <ImgWrapper type={props.theme.ground.primary}>
            <Type src={ground} alt='terra' />
          </ImgWrapper>
        </Item>
        <Item to='/pedra'>
          <ImgWrapper type={props.theme.rock.primary}>
            <Type src={rock} alt='pedra' />
          </ImgWrapper>
        </Item>
        <Item to='/inseto'>
          <ImgWrapper type={props.theme.bug.primary}>
            <Type src={bug} alt='inseto' />
          </ImgWrapper>
        </Item>
        <Item to='/fantasma'>
          <ImgWrapper type={props.theme.ghost.primary}>
            <Type src={ghost} alt='fantasma' />
          </ImgWrapper>
        </Item>
        <Item to='/metal'>
          <ImgWrapper type={props.theme.steel.primary}>
            <Type src={steel} alt='metal' />
          </ImgWrapper>
        </Item>
        <Item to='/fogo'>
          <ImgWrapper type={props.theme.fire.primary}>
            <Type src={fire} alt='fogo' />
          </ImgWrapper>
        </Item>
        <Item to='/agua'>
          <ImgWrapper type={props.theme.water.primary}>
            <Type src={water} alt='agua' />
          </ImgWrapper>
        </Item>
        <Item to='/grama'>
          <ImgWrapper type={props.theme.grass.primary}>
            <Type src={grass} alt='grama' />
          </ImgWrapper>
        </Item>
        <Item to='/eletrico'>
          <ImgWrapper type={props.theme.electric.primary}>
            <Type src={electric} alt='eletrico' />
          </ImgWrapper>
        </Item>
        <Item to='/pisciquico'>
          <ImgWrapper type={props.theme.psychic.primary}>
            <Type src={psychic} alt='pisciquico' />
          </ImgWrapper>
        </Item>
        <Item to='/gelo'>
          <ImgWrapper type={props.theme.ice.primary}>
            <Type src={ice} alt='gelo' />
          </ImgWrapper>
        </Item>
        <Item to='/dragao'>
          <ImgWrapper type={props.theme.dragon.primary}>
            <Type src={dragon} alt='dragao' />
          </ImgWrapper>
        </Item>
        <Item to='/escuro'>
          <ImgWrapper type={props.theme.dark.primary}>
            <Type src={dark} alt='escuro' />
          </ImgWrapper>
        </Item>
        <Item to='/fada'>
          <ImgWrapper type={props.theme.fairy.primary}>
            <Type src={fairy} alt='fada' />
          </ImgWrapper>
        </Item>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Home;
