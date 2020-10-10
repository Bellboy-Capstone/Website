import React from 'react';

const containerStyles = {
    backgroundColor: "#30336b",
    height: '100vh',
    minHeight: '100vh'
}

const frameStyles = {
    margin: "0 auto",
    display:"block"
}

const Security = () => {
    return (
        <div style={containerStyles}>
            Security Camera
            <div style={frameStyles}>
                <iframe src={"http://06rmghzq.burrow.io/index.html"} width="680px" height="5200px" style={frameStyles}></iframe>
            </div>
        </div>
    );
}

export default Security;
