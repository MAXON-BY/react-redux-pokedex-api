import React from 'react';
import './PokemonList.css'
import PokemonItem from "../PokemonItem";

const PokemonList = () => {
    return (
        <div className="pokemon-list">
            <PokemonItem/>
            <PokemonItem/>
            <PokemonItem/>
            <PokemonItem/>
            <PokemonItem/>
            <PokemonItem/>
            <PokemonItem/>
        </div>
    );
};

export default PokemonList;