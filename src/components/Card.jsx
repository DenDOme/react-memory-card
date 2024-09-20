import { useState } from "react"
import '../assets/Card.css'


function Card({pokemon, mode, handleChangeMode}){
    return (
        <div className="card">
            {pokemon.found || mode ? (
                <p>{pokemon.name}</p>
            ) : (
                <button onClick={() => handleChangeMode(pokemon.id)}>
                    {pokemon.id}
                </button>
            )}
        </div>
    )
}

export default Card