import React from "react";
import Header from "./components/Header.js";

import Navig from './components/Navig';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';


// ROUTE
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";



export default function App() {
  return (
    <main>
      <Header/>
      <Navig/>

      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>

    </main>
  );
}
