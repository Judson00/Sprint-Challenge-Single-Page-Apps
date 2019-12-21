import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./CharacterCard";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(response => {
        console.log(response.data.results);
        let characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(search.toLowerCase())
        );
        setResults(characters);
        console.log(results);
      })
      .catch(error => console.log(error));
  }, [search]);

  return (
    <div>

      <form>
        <label htmlFor="search">
          Search
          <br />
        </label>
        <input
          className="searchBar"
          name="search"
          type="text"
          id="search"
          placeholder="enter character name"
          value={search}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </form>
      <div>

        {results.map(result => 
        <div>
          
          <p>Name: {result.name}</p> 
          
          </div>
        )}
      </div>
    </div>
  );
}