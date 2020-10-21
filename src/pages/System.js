import React from 'react';
// Pictures
import logo from '../assets/system1.png';
import softarch from '../assets/softarch.jpg';
import hardarch from '../assets/hardarch.png';

const logoStyles = {
    height: "400px",
    width: "500px",
    marginTop: "20px",
    borderRadius: "20px"
}

const containerStyles = {
    backgroundColor: "#30336b",
    height: '200vh',
    minHeight: '100vh'
}


const System = () => {
    return (
        
        <div style={containerStyles}>
            <br></br>
            <div
                style={{
                    textAlign: "center",
                    color: "#dff9fb",
                    fontSize: "28px",
                    marginTop: "10px",
                }}
            >
                <b>Overview</b>

            </div>
            <div
                style={{ textAlign: "center" }}
            >
                <img src={logo} style={logoStyles}/>
            </div>
            <br></br>
            <div
                style={{
                    textAlign: "center",
                    color: "#dff9fb",
                    fontSize: "28px",
                    marginTop: "10px",
                }}
            >
                <b>Software Architecture</b>

            </div>
            <div
                style={{ textAlign: "center" }}
            >
                <img src={softarch} style={logoStyles} />
            </div>
            <br></br>
            <div
                style={{
                    textAlign: "center",
                    color: "#dff9fb",
                    fontSize: "28px",
                    marginTop: "10px",
                }}
            >
                <b>Hardware Architecture</b>

            </div>
            <div
                style={{ textAlign: "center" }}
            >
                <img src={hardarch} style={logoStyles} />
            </div>
        </div>
    );
}

export default System;
