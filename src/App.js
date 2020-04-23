import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import Pokedex from './components/Pokedex'
import PokeInfo from './components/PokeInfo'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [pokedex, setPokedex] = useState([]);

  const getPokedex = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokedex/2')
      .then(res => setPokedex(res.data.pokemon_entries))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPokedex();
  }, []);

  return (
    <div className = 'App' style={{ backgroundImage: `url(${require("./background.jpg")})` }}>
      <div className ='header'>
      <h1>Kanto Pokedex</h1>
      <Link className='link' to='/'>Home</Link>
      </div>
      <Route exact path='/'>
        <Pokedex pokedex={pokedex} />
      </Route>
      <Route path='/pokemon/:id'>
        <PokeInfo />
      </Route>
    </div>
  );
}

export default App;
