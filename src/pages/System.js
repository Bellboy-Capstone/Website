import React from 'react';
// Pictures
import logo from '../assets/system1.png';

const logoStyles = {
    height: "200px",
    width: "400px",
    marginTop: "20px",
    borderRadius: "20px"
}

const containerStyles = {
    backgroundColor: "#30336b",
    height: '100vh',
    minHeight: '100vh'
}


const System = () => {
    return (
        <div style={containerStyles}>
            System (WIP)

            <div
                style={{ textAlign: "center" }}
            >
                <img src={logo} style={logoStyles} />
            </div>
        </div>
    );
}

export default System;
