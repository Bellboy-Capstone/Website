import React from "react";
import logo from "../assets/system1.png";
import softarch from "../assets/softarch.png";
import hardarch from "../assets/hardarch.png";

const logoStyles = {
  height: "400px",
  width: "500px",
  marginTop: "20px",
  borderRadius: "20px",
};

const containerStyles = {
  backgroundColor: "#30336b",
  height: "200vh",
  minHeight: "100vh",
};

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
      <div style={{ textAlign: "center" }}>
        <img src={logo} style={logoStyles} alt="alt" />
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
      <div style={{ textAlign: "center" }}>
        <img src={softarch} style={logoStyles} alt="alt" />
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
      <div style={{ textAlign: "center" }}>
        <img src={hardarch} style={logoStyles} alt="alt" />
      </div>
    </div>
  );
};

export default System;
