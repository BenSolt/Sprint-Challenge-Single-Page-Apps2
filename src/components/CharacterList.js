import React, { useEffect, useState } from "react";

import styled from 'styled-components'
import Axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect


  const [characters, setCharacters] = useState([]);

  const [search, setSearch] = useState("");


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

Axios
.get('https://rickandmortyapi.com/api/character/')
.then(response => {
  setCharacters(response.data.results)
  console.log(response.data.results)
})
.catch(error => {
  console.error(error);
});


  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}

      <SearchForm charName={characters}/>

      {characters.map(character => {

        return(

          <Link to={`/components/${character.id}`}>
            <CharacterCard key={character.id} char={character} />
            </Link>
         

        )

      })}

    </section>
  );
}
