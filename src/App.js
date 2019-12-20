import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import WelcomePage from './components/WelcomePage'; 
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import Page from './components/Pagination';
import styled from 'styled-components';

const App = () => {

  const StyledDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  return (
    <StyledDiv className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Route path='/characters'>
          <CharacterList />
        </Route>
        
        {/* <Page next={nextUrl} previous={prevUrl} url={setUrl} /> */}
      </Switch>
    </StyledDiv>
  );
}

export default App;