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
             <div
                style={{
                    textAlign: "center",
                    color: "#dff9fb",
                    fontSize: "28px",
                    marginTop: "10px",
                    float: "left"
                }}
            >
                <b>Live Camera Feed From Rasberry Pi</b>

            </div>
            <br></br>
            <div
                style={{
                    textAlign: "center",
                    color: "#dff9fb",
                    fontSize: "28px",
                    marginTop: "10px",
                    float: "right"
                }}
            >
                <b>Log Files</b>

            </div>
            {/* <div style={frameStyles}>
                <iframe src={"http://2e0m5rnu.burrow.io/index.html"} width="680px" height="5200px" style={frameStyles}></iframe>
            </div> */}
        </div>
    );
}

export default Security;
