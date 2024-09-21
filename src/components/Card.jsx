import { useState } from "react"
import '../assets/Card.css'

function Card({ pokemon, mode, handleChangeMode, disableSelection }) {
    return (
        <div className={`card ${mode ? '' : 'flipped'}`}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={pokemon.img} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                </div>
                
                <div className="card-back">
                    <button onClick={() => handleChangeMode(pokemon.id)} disabled={disableSelection}>
                        <img src={`${import.meta.env.BASE_URL}card_back.svg`} alt="card backside" />
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Card