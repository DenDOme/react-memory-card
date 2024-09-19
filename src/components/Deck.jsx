import { useEffect, useState } from "react";
import Card from "./Card";
import getRandomPokemon from "../scripts/getPokemons";

const initialPokemons = [
    { id: '0', name: 'Pikachu', found: false },
    { id: '1', name: 'Charizard', found: false },
    { id: '2', name: 'Bulbasaur', found: false },
    { id: '3', name: 'Squirtl', found: false },
    { id: '4', name: 'Eevee', found: false },
    { id: '5', name: 'Pikachu', found: false },
    { id: '6', name: 'Charizard', found: false },
    { id: '7', name: 'Bulbasaur', found: false },
    { id: '8', name: 'Squirtl', found: false },
    { id: '9', name: 'Eevee', found: false }
];

function Deck(){
  const [modes , setModes] = useState({})
  const [allPokemons, setAllPokemons] = useState(getRandomPokemon(initialPokemons));
  
  const handleChangeMode = (pokemonId) => {
    setModes((prevMode) => ({...prevMode, [pokemonId]: !prevMode[pokemonId] }))
  }

  useEffect(() => {
    if (Object.keys(modes).length === 2) {
      const selectedPokemons = Object.keys(modes).map((key) =>
        allPokemons.find((pokemon) => pokemon.id === key)
      );

      if (selectedPokemons[0]?.name === selectedPokemons[1]?.name) {
        const updatedPokemons = allPokemons.map((pokemon) =>
          selectedPokemons.some((selected) => selected.id === pokemon.id)
            ? { ...pokemon, found: true }
            : pokemon
        );

        setAllPokemons(updatedPokemons);
      }

      setTimeout(() => setModes({}), 1000); 
    }
  }, [modes]);

  return (
    <>
      <h1>MEMORY GAME CHOOSE POKEMONS</h1>
      <div className="card-wrap">
        {allPokemons.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} mode={modes[pokemon.id] || pokemon.found} handleChangeMode={handleChangeMode}/>
        })}
      </div>
    </>
  )
}

export default Deck