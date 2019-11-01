import React, { useState } from 'react';
import { Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { StyledPageContainer } from './App.styled';
import { theme } from '../theme';
import { Burger, Menu } from '../components';
import Home from './Home';
import About from './About';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledPageContainer open={open} >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </StyledPageContainer>
        <div>
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  ); 
}

export default App;
