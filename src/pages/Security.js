import React from "react";
import rpilog from "../assets/rpilog.mp4";
import setup from "../assets/setup.jpg";
import DjangoExample from "./DjangoExample";

const containerStyles = {
  backgroundColor: "#30336b",
  height: "150vh",
  minHeight: "100vh",
};
const logoStyles = {
  height: "400px",
  width: "500px",
  marginTop: "20px",
  borderRadius: "20px",
};

// const frameStyles = {
//     margin: "0 auto",
//     display:"block"
// }

class LogFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      websocket: null,
      logEntries: [],
    };
  }

  componentDidMount() {
    const ws = new WebSocket("wss://bellboy-realtime.herokuapp.com");
    ws.onopen = () => {
      console.log("Opening websocket...");
      // Send website in all caps to register as a website.
      ws.send("WEBSITE");
      ws.onmessage = (e) => {
        console.log("Got data: " + e.data);
        console.log(e);
        this.setState({ logEntries: [e.data, ...this.state.logEntries] });
      };
    };
  }

  render() {
    return (
      <div
        style={{
          textAlign: "left",
          color: "#dff9fb",
          fontSize: "28px",
          margin: "10px auto",
          maxWidth: "500px",
        }}
      >
        <h1>Log Feed</h1>
        <div>
          {this.state.logEntries.map((val, index) => {
            return <p>{val}</p>;
          })}
        </div>
      </div>
    );
  }
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
          <source src={rpilog} type="video/mp4"></source>
        </video>
      </div>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <img src={setup} style={logoStyles} alt="alt" />
      </div>
      <LogFeed />
      <br />
      {/* <div style={frameStyles}>
                <iframe src={"http://2e0m5rnu.burrow.io/index.html"} width="680px" height="5200px" style={frameStyles}></iframe>
            </div> */}
      <DjangoExample />
    </div>
  );
};

export default Security;
