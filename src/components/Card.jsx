import { useState } from "react"
import '../assets/Card.css'

function Card({pokemon, mode, handleChangeMode, disableSelection}){
    return (
        <div className="card">
            {pokemon.found || mode ? (
                <>
                    <img src={pokemon.img} alt="pokemon.name" />
                    <p>{pokemon.name}</p>
                </>
                
            ) : (
                <button onClick={() => handleChangeMode(pokemon.id)} disabled={disableSelection}>
                    <img src="/card_back.svg" alt="card backside"/>
                </button>
            )}
        </div>
    )
}

export default Card