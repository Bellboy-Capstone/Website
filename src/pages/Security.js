import React from 'react';
import rpilog from '../assets/rpilog.mp4';
import setup from '../assets/setup.jpg';


const containerStyles = {
    backgroundColor: "#30336b",
    height: '150vh',
    minHeight: '100vh'
}
const logoStyles = {
    height: "400px",
    width: "500px",
    marginTop: "20px",
    borderRadius: "20px"
}

const frameStyles = {
    margin: "0 auto",
    display:"block"
}

const Security = () => {
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
                <b>Live Camera Feed From Rasberry Pi and Log File</b>

            </div>
            <br></br>
            <div style={{ textAlign: "center" }}>
                <video width="700" height="400" controls>
                <source src={rpilog} type="video/mp4">
                </source>
                </video> 
            </div>
            <br></br>
            <div
                style={{ textAlign: "center" }}
            >
                <img src={setup} style={logoStyles} />
            </div>
            {/* <div style={frameStyles}>
                <iframe src={"http://2e0m5rnu.burrow.io/index.html"} width="680px" height="5200px" style={frameStyles}></iframe>
            </div> */}
        </div>
    );
}

export default Security;
