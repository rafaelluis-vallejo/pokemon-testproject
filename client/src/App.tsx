import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">

      

      <div className="container">
        <h2>
          Pokedex  <i> // Add Pokemon </i>
        </h2>


        <form>
          <input placeholder="Enter Pokemon Name" type="text" name="pokemonName" />
          
          <input placeholder="Enter Pokemon Level" type="number" name="pokemonlvl" />
          <select name="pokemonType">
            <option value="" disabled selected>
              Select Pokemon Type
            </option>
          </select>
          <button> Save </button>
        </form>

      </div>

    </div>
  );
}

export default App;
