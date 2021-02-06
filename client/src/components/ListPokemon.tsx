import React from "react";

interface ListPokemonsProps {
  //items: { id: number; name: string; level: number; type: string }[];
  items: {
    id: number;
    name: string;
  }[];
}

const Pokemons: React.FC<ListPokemonsProps> = (props) => {
  return (
    <ul>
      {props.items.map((listPokemon) => (
        <li key={listPokemon.id}>
          <span>{listPokemon.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Pokemons;
