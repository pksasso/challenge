import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Modal from 'react-modal';

import GlobalStyle from './global';
import { theme } from './styles/Theme';

import Home from './components/pages/Home';
import { CartProvider } from './context/CartContext';
import TemplatePage from './components/pages/Template';

import fireLogo from './assets/fire.svg';
import waterLogo from './assets/water.svg';

import { pokemons } from './constants/pokemonConstants';

const FIRE_TYPE = 'fire';
const WATER_TYPE = 'water';

const pokemonType = {
  fire: 10,
  water: 11,
  grass: 12,
  rock: 6,
  electric: 13,
  poison: 4,
  psychic: 14,
  ground: 5,
  bug: 7,
  dark: 17,
  dragon: 16,
  fairy: 18,
  fighting: 2,
  flying: 3,
  ghost: 8,
  ice: 15,
  normal: 1,
  steel: 9,
};

Modal.setAppElement('#root');

function App() {
  return (
    <Router>
      <CartProvider>
        <GlobalStyle />
        <Switch>
          <Route exact path='/'>
            <ThemeProvider theme={theme}>
              <Home theme={theme} />
            </ThemeProvider>
          </Route>
          <Route path='/fogo'>
            <ThemeProvider theme={theme.fire}>
              <TemplatePage
                type={pokemons.fire.name}
                logo={fireLogo}
                typeNumber={pokemons.fire.apiNumber}
                label={'Fire Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/agua'>
            <ThemeProvider theme={theme.water}>
              <TemplatePage
                type={pokemons.water.name}
                logo={waterLogo}
                typeNumber={pokemons.water.name}
                label={'Water Store'}
              />
            </ThemeProvider>
          </Route>
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
