import React, { useState, useEffect, useRef } from 'react';
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
  const node = useRef();
  
  useEffect(() => {
    const listener = event => {
      if(!node.current || node.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    }
  })

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
        <div ref={node}>
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  ); 
}

export default App;
