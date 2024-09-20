import { useState, useEffect } from "react";

function getRandomPokemon(amount){

    const POKEMON_AMOUNT = 721;
    
    const getRandomIds = (amount) => {
        const ids = new Set();
        while(ids.size < amount){
            const id = Math.floor(Math.random() * (POKEMON_AMOUNT + 1));
            ids.add(id);
        }
        return Array.from(ids);
    }
    
    const getPokemons = async (amount) => {
        const apiUrl = import.meta.env.VITE_BASE_URL

        const ids = getRandomIds(amount);

        const pokemons = [];

        for(let i = 0 ; i < ids.length ; i++){
            const res = await fetch(`${apiUrl}pokemon/${ids[i]}`)
            const data = await res.json();
            const {name, sprites} = data;
            const img = sprites.front_default
            pokemons.push({name, img});
            pokemons.push({name, img});
        }

        const shuffeledPokemons = shuffleArray(pokemons);

        return shuffeledPokemons;
    }
    
    const shuffleArray = (pokemons) => {
        let newArr = [...pokemons];
    
        for(let i = newArr.length - 1 ; i > 0 ; i--){
    
            const randomIndex = Math.floor(Math.random() * (i + 1));
    
            [newArr[i], newArr[randomIndex]] = [newArr[randomIndex], newArr[i]];
            
        }

        return newArr
    }

    const pokemons = getPokemons(amount);
    return pokemons;
}

export default getRandomPokemon;