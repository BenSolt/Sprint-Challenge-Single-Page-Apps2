import React from "react";
import Header from "./components/Header.js";

import Navig from './components/Navig';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';


// ROUTE
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Header/>
      <Navig/>
      <SearchForm/>


      {/* <Route exact path='/' component={WelcomePage}/> */}
      {/* <Route path='/characters' component={CharacterList} */}

    </main>
  );
}
