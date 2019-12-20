import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
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

  return (
    <section className="character-list">
      <Link to='/'>Home</Link>
      <SearchForm />
      {people.map((person, index) => (
        <CharacterCard 
          key={index}
          person = {person}
        />
      ))}
    </section>
  );
}