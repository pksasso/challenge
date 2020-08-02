import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Modal from 'react-modal';

import GlobalStyle from './global';
import { theme } from './styles/Theme';

import Home from './components/pages/Home';
import FireStore from './components/pages/Fire';
import WaterStore from './components/pages/Water';
import { CartProvider } from './context/CartContext';

const FIRE_TYPE = 'fire';
const WATER_TYPE = 'water';

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
              <FireStore type={FIRE_TYPE} />
            </ThemeProvider>
          </Route>
          <Route path='/agua'>
            <ThemeProvider theme={theme.water}>
              <WaterStore type={WATER_TYPE} theme={theme} />
            </ThemeProvider>
          </Route>
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
