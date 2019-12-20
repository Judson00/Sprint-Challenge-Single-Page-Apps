// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const SearchForm = () => {

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {

//     axios
//       .get(
//         `https://rickandmortyapi.com/api/character/`
//       )
//       .then(response => {
//         const characters = response.data.results.filter(
//           character =>
//             character.name
//               .toLowerCase()
//               .includes(searchTerm.toLowerCase())
//         );
//         setSearchResults(characters.name)
//       });
//   }, [searchResults]);
//   const handleInputChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <>
//     <div className='search-form'>
//       <form className='search'>
//         <input 
//           type='text'
//           onChange={handleInputChange}
//           value={searchResults}
//           name='name'
//           className='prompt search-name'
//           placeholder='search'
//         />
//       </form>
//     </div>
//     <div className='character-list'>
//       {/* <ul>
//         {searchResults.map(character => (
//           <li key={character}>{character}></li>
//         ))}
//       </ul> */}
//     </div>
//     </>
//   )
//   }

//   export default SearchForm;

// //     const results = name.filter(character =>
// //       character.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     setSearchResults(results);
// //   }, [searchTerm]);

// //   const handleChange = event => {
// //     setSearchTerm(event.target.value);
// //   };

// //   return (
// //     <div className="App">
// //       <form>
// //         <label htmlFor="name">Search:</label>
// //         <input
// //           id="name"
// //           type="text"
// //           name="textfield"
// //           placeholder="Search"
// //           value={searchTerm}
// //           onChange={handleChange}
// //         />
// //       </form>
// //       <div className="character-list">
// //         <ul>
// //           {searchResults.map(character => (
// //             <li key={character.name}>{character.name}</li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

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