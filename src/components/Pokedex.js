import React from 'react';
import PokeCard from './PokeCard'

function Pokedex({ pokedex }){
    return(
        <div className='pokedex'>
            {
                pokedex.map(pokemon => (
                    <PokeCard pokemon={pokemon} key={pokemon.entry_number}/>
                ))
            }
        </div>
    )
}

export default Pokedex