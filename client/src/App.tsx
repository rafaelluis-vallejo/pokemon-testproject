import React, { useState, useEffect } from "react";
import Axios from "axios";

import { List } from './model/listModel';
import ListPokemon from "./components/ListPokemon";
import "./App.css";

const App: React.FC = () => {

  // Add function here to get select options from database

  

  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonLvl, setPokemonLvl] = useState<number>();
  const [pokemonType, setPokemonType] = useState<string>("");
  const [pokemonList, setPokemonList] = useState<List[]>([]);


  useEffect(() =>{
    Axios.get('http://localhost:3001/api/get').then((response)=> {
      setPokemonList(response.data);
    });
  });

  const savePokemon = () => {
    Axios.post("http://localhost:3001/api/insert", {
      pokemonName: pokemonName,
      pokemonLvl: pokemonLvl,
      pokemonType: pokemonType,
    }).then(() => {
      alert('[Message]: Pokemon saved successfully!')
    });
  };

  return (
    <div className="App">
      <div className="container">
        
        <h2>
          Pokedex <i> // Add Pokemon </i>
        </h2>
        <form>
          <input
            placeholder="Enter Pokemon Name"
            type="text"
            name="pokemonName"
            onChange={(e) => setPokemonName(e.target.value)}
          />

          <input
            placeholder="Enter Pokemon Level"
            type="number"
            name="pokemonLvl"
            onChange={(e) => setPokemonLvl(+e.target.value)}
          />

          <input
            placeholder="Enter Pokemon Type"
            type="text"
            name="pokemonType"
            onChange={(e) => setPokemonType(e.target.value)}
          />

          <button onClick={savePokemon}>Save</button>
          
        </form>
      </div>

      <ListPokemon items={pokemonList} />
      
    </div>
  );
};

export default App;
