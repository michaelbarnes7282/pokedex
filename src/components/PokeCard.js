import React from 'react';
import { useHistory } from 'react-router-dom'

const PokeCard = props => {
    const { push } = useHistory();
    const { name } = props.pokemon.pokemon_species;
    
    return(
        <div className='pokemon-card'>
            <img src= {require(`../sprites/${props.pokemon.entry_number}.png`)} alt=' a pokemon'/>
            <h3 style={{textTransform: 'capitalize'}}>Name: {name}</h3>
            <button onClick={() => push(`/pokemon/${props.pokemon.entry_number}`)}>More Info</button>
        </div>
    )
}
export default PokeCard