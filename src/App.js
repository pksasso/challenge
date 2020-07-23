import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/themes/theme';
import Home from './components/pages/Home';
import FireStore from './components/pages/Fire';
import WaterStore from './components/pages/Water';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path='/'>
            <Home theme={theme} />
          </Route>
          <Route path='/fogo'>
            <FireStore theme={theme} />
          </Route>
          <Route path='/agua'>
            <WaterStore theme={theme} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
