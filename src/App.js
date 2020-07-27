import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';
import theme from './styles/Theme';

import Home from './components/pages/Home';
import FireStore from './components/pages/Fire';
import WaterStore from './components/pages/Water';
import { CartProvider } from './context/CartContext';

const FIRE_TYPE = 'fire';
const WATER_TYPE = 'water';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CartProvider>
          <GlobalStyle />
          <Switch>
            <Route exact path='/'>
              <Home theme={theme} />
            </Route>
            <Route path='/fogo'>
              <FireStore type={FIRE_TYPE} theme={theme} />
            </Route>
            <Route path='/agua'>
              <WaterStore type={WATER_TYPE} theme={theme} />
            </Route>
          </Switch>
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
