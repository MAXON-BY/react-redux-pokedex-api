import React from 'react';
import './Header.css'

const Header = () => {

    const logoUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={logoUrl} alt="Pokemon"/>
                    </div>

                    <nav className="header-nav">
                        <ul>
                            <li>Home</li>
                            <li>Pokebol</li>
                            <li>About</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;