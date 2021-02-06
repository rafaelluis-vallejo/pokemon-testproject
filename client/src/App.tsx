import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pokedex / <i> Add Pokemon </i></h1>
      <input type="text" name="pokemonName" />
      <input type="number" name="pokemonlvl" />
      <select name="pokemonType">
      <option value="" disabled selected>Select your option</option>
      </select>
    
    </div>
  );
}

export default App;
