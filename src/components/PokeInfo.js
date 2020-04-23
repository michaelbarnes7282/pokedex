import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
};

const PokeInfo = () => {
    const [pokemonStats, setPokemonStats] = useState({
        abilities: [],
        types: [],
    })
    const [pokemon, setPokemon] = useState({
        name: '',
        flavor_text_entries: [
            { flavor_text: '' },
            { flavor_text: '' }
        ],
        description: ''
    });
    const params = useParams();

    useEffect(() => {
        async function fetchPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${params.id}/`);
            // TODO filter flavor text by english texts and set a description accordingly
            const statRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}/`);
            setPokemon(response.data)
            setPokemonStats(statRes.data)
            console.log(statRes.data)
        };
        fetchPokemon();
    }, [])
    console.log(pokemon)

    const types = pokemonStats.types.map(type => type.type.name)
    const abilities = pokemonStats.abilities.map(ability => ability.ability.name)

    return (
        <div className='info-container'>
            <div className='pokemon-info'>
                <div className='info-header'>
                    <div>
                        <h1 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h1>
                        {types.map(type => (
                            <span key={type} className="badge badge-pill mr-1"
                                style={{
                                    backgroundColor: `#${TYPE_COLORS[type]}`,
                                    color: 'white'
                                }}>
                                {type
                                    .toLowerCase()
                                    .split(' ')
                                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                    .join(' ')}
                            </span>
                        ))}
                    </div>
                    <img src={require(`../sprites/${params.id}.png`)} alt=' a pokemon' />
                </div>
                <div className='abilites'>
                                <h4>Abilities: </h4>
                                {abilities.map(ability => (
                            <h5 key={ability} className="mx-2 my-1">
                                {ability
                                    .toLowerCase()
                                    .split(' ')
                                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                    .join(' ')}
                            </h5>
                        ))}
                        </div>
                <p>{pokemon.flavor_text_entries[1].flavor_text}</p>
            </div>
        </div>
    )

}

export default PokeInfo