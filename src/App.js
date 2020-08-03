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

import fightingLogo from './assets/pokemonTypes/fighting.svg';
import normalLogo from './assets/pokemonTypes/normal.svg';
import flyingLogo from './assets/pokemonTypes/flying.svg';
import groundLogo from './assets/pokemonTypes/ground.svg';
import rockLogo from './assets/pokemonTypes/rock.svg';
import bugLogo from './assets/pokemonTypes/bug.svg';
import ghostLogo from './assets/pokemonTypes/ghost.svg';
import steelLogo from './assets/pokemonTypes/steel.svg';
import fireLogo from './assets/pokemonTypes/fire.svg';
import waterLogo from './assets/pokemonTypes/water.svg';
import grassLogo from './assets/pokemonTypes/grass.svg';
import electricLogo from './assets/pokemonTypes/electric.svg';
import psychicLogo from './assets/pokemonTypes/psychic.svg';
import iceLogo from './assets/pokemonTypes/ice.svg';
import dragonLogo from './assets/pokemonTypes/dragon.svg';
import darkLogo from './assets/pokemonTypes/dark.svg';
import fairyLogo from './assets/pokemonTypes/fairy.svg';

import { pokemons } from './constants/pokemonConstants';

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
          <Route path='/normal'>
            <ThemeProvider theme={theme.normal}>
              <TemplatePage
                type={pokemons.normal.name}
                logo={normalLogo}
                typeNumber={pokemons.normal.apiNumber}
                label={'Normal Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/lutador'>
            <ThemeProvider theme={theme.fighting}>
              <TemplatePage
                type={pokemons.fighting.name}
                logo={fightingLogo}
                typeNumber={pokemons.fighting.apiNumber}
                label={'Fighting Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/voador'>
            <ThemeProvider theme={theme.flying}>
              <TemplatePage
                type={pokemons.flying.name}
                logo={flyingLogo}
                typeNumber={pokemons.flying.apiNumber}
                label={'Flying Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/veneno'>
            <ThemeProvider theme={theme.poison}>
              <TemplatePage
                type={pokemons.poison.name}
                logo={fireLogo}
                typeNumber={pokemons.poison.apiNumber}
                label={'Poison Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/terra'>
            <ThemeProvider theme={theme.ground}>
              <TemplatePage
                type={pokemons.ground.name}
                logo={groundLogo}
                typeNumber={pokemons.ground.apiNumber}
                label={'Ground Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/pedra'>
            <ThemeProvider theme={theme.rock}>
              <TemplatePage
                type={pokemons.rock.name}
                logo={rockLogo}
                typeNumber={pokemons.rock.apiNumber}
                label={'Rock Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/inseto'>
            <ThemeProvider theme={theme.bug}>
              <TemplatePage
                type={pokemons.bug.name}
                logo={bugLogo}
                typeNumber={pokemons.bug.apiNumber}
                label={'Bug Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/fantasma'>
            <ThemeProvider theme={theme.ghost}>
              <TemplatePage
                type={pokemons.ghost.name}
                logo={ghostLogo}
                typeNumber={pokemons.ghost.apiNumber}
                label={'Ghost Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/metal'>
            <ThemeProvider theme={theme.steel}>
              <TemplatePage
                type={pokemons.steel.name}
                logo={steelLogo}
                typeNumber={pokemons.steel.apiNumber}
                label={'Steel Store'}
              />
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
          <Route path='/grama'>
            <ThemeProvider theme={theme.grass}>
              <TemplatePage
                type={pokemons.grass.name}
                logo={grassLogo}
                typeNumber={pokemons.grass.name}
                label={'Grass Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/eletrico'>
            <ThemeProvider theme={theme.electric}>
              <TemplatePage
                type={pokemons.electric.name}
                logo={electricLogo}
                typeNumber={pokemons.electric.name}
                label={'Electric Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/pisciquico'>
            <ThemeProvider theme={theme.psychic}>
              <TemplatePage
                type={pokemons.psychic.name}
                logo={psychicLogo}
                typeNumber={pokemons.psychic.name}
                label={'Psychic Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/gelo'>
            <ThemeProvider theme={theme.ice}>
              <TemplatePage
                type={pokemons.ice.name}
                logo={iceLogo}
                typeNumber={pokemons.ice.name}
                label={'Ice Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/dragao'>
            <ThemeProvider theme={theme.dragon}>
              <TemplatePage
                type={pokemons.dragon.name}
                logo={dragonLogo}
                typeNumber={pokemons.dragon.name}
                label={'Dragon Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/escuro'>
            <ThemeProvider theme={theme.dark}>
              <TemplatePage
                type={pokemons.dark.name}
                logo={darkLogo}
                typeNumber={pokemons.dark.name}
                label={'Dark Store'}
              />
            </ThemeProvider>
          </Route>
          <Route path='/fada'>
            <ThemeProvider theme={theme.fairy}>
              <TemplatePage
                type={pokemons.fairy.name}
                logo={fairyLogo}
                typeNumber={pokemons.fairy.name}
                label={'Fairy Store'}
              />
            </ThemeProvider>
          </Route>
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
