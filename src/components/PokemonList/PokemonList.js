import React from 'react';
import PokemonItem from "../PokemonItem";

const PokemonList = () => {
    return (
        <div className="pokemon-list">
            <PokemonItem/>
            <PokemonItem/>
            <PokemonItem/>
        </div>
    );
};

export default PokemonList;