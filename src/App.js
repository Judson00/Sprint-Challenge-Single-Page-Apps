import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import Page from './components/Pagination';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState ([]);
  const [url, setUrl] = useState ('https://rickandmortyapi.com/api/character/');
  const [nextUrl, setNextUrl] = useState ('');
  const [prevUrl, setPrevUrl] = useState ('');

  useEffect(() => {
    axios
    .get(url)
    .then(response => {
      console.log(response.data);
      setPeople(response.data.results);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
    })
    .catch(error => console.log({error}));
  },[url]);

  const StyledDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  return (
    <StyledDiv className='App'>
      <Header />
      {people.map((person, index) => (
        <CharacterCard 
          key={index}
          person = {person}
        />
      ))}
      <Page next={nextUrl} previous={prevUrl} url={setUrl} />
    </StyledDiv>
  );
}

export default App;