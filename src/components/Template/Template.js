import React from 'react';
import './Template.css'
import Home from "../../pages/Home/Home";

const Template = () => {
    return (
        <div className="template">
            <div className="container">
                <div className="template-wrap">
                    <Home/>
                </div>
            </div>
        </div>
    );
};

export default Template;