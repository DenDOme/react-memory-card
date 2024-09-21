import { useEffect, useState } from "react";
import Card from "./Card";
import getRandomPokemon from "../scripts/getPokemons";

function Deck({cards,gameStart,gameEnd}){
  const [modes , setModes] = useState({})
  const [allPokemons, setAllPokemons] = useState([]); 
  const [points, setPoints] = useState(0);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      const randomPokemons = await getRandomPokemon(cards);
      setAllPokemons(randomPokemons);
    };

    fetchPokemons();
  }, [cards]);

  const handleChangeMode = (pokemonId) => {
    setModes((prevMode) => ({...prevMode, [pokemonId]: !prevMode[pokemonId] }))
  }

  useEffect(() => {
    if (Object.keys(modes).length === 2) {
      const selectedPokemons = Object.keys(modes).map((key) =>
        allPokemons.find((pokemon) => pokemon.id === Number(key))
      );
  
      if (selectedPokemons[0]?.name === selectedPokemons[1]?.name) {
        const updatedPokemons = allPokemons.map((pokemon) =>
          selectedPokemons.some((selected) => selected.id === pokemon.id)
            ? { ...pokemon, found: true } 
            : pokemon
        );
        setPoints((prevPoints) => prevPoints + 1);
        setAllPokemons(updatedPokemons);
      }
  
      setTimeout(() => setModes({}), 1000);
    }
  }, [modes]);
  
  useEffect(() => {
    if(points === cards){
      gameEnd();
      gameStart();
    }
  }, [points])

  const disableSelection = Object.keys(modes).length === 2;

  return (
    <>
      <h1>MEMORY GAME CHOOSE POKEMONS</h1>
      <p>points {points} / {cards}</p>
      <div className="card-wrap">
        {allPokemons.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} mode={modes[pokemon.id] || pokemon.found} handleChangeMode={handleChangeMode}  disableSelection={disableSelection}/>
        })}
      </div>
    </>
  )
}

export default Deck