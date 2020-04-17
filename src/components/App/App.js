import React from 'react';
import './App.css';
import Header from "../Header";
// import FooterBlock from "../FooterBlock";
import Template from "../Template";

function App() {
    return (
        <div className="App">
            <Header/>
            <Template/>
            <div className="footer">
                <p style={{textAlign: "center"}}>&copy; maxon_by 2020</p>
            </div>
        </div>
    );
}

export default App;
