import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import Home from './Home';
import About from './About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </>
    </ThemeProvider>
  ); 
}

export default App;
