import React from "react";

import mid1 from "../assets/midterm1.jpg";
import mid2 from "../assets/midterm2.jpg";
import mid3 from "../assets/midterm3.jpg";
import image10 from "../assets/image10.png";
import image5 from "../assets/image5.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image7 from "../assets/image7.png";

const logoStyles = {
  height: "400px",
  width: "500px",
  marginTop: "20px",
  borderRadius: "20px",
};

const containerStyles = {
    backgroundColor: "#30336b",
    height: "350vh",
    minHeight: "100vh",
  };

const Gallery = () => {
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
        <b>CEG4913</b>
      </div>
        <div style={{ textAlign: "center" }}>
        <img src={mid1} style={logoStyles} alt="alt" />
        <img src={mid2} style={logoStyles} alt="alt" />
        <img src={mid3} style={logoStyles} alt="alt" />
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
        <b>CEG4912</b>
        <br></br>
        </div>
        <div style={{ textAlign: "center" }}>
        <img src={image10} style={logoStyles} alt="alt" />
        <img src={image5} style={logoStyles} alt="alt" />
        <img src={image15} style={logoStyles} alt="alt" />
        <img src={image16} style={logoStyles} alt="alt" />
        <img src={image7} style={logoStyles} alt="alt" />
        </div>
    </div>
  );
};

export default Gallery;
