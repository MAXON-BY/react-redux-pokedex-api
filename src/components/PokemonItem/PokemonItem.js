import React from 'react';
import './PokeminItem.css'

const PokemonItem = () => {
    return (
        <div className="pokemon-item">
            <div className="pokemon-img">
                <a href="#">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="#"/>
                </a>
            </div>
            <div className="abilities">
                <span>Poison</span>
                <span>Grass</span>
            </div>
            <h4>Pokemon name</h4>
        </div>
    );
};

export default PokemonItem;