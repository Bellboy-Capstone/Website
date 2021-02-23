import React from "react";
import ReconnectingWebSocket from "reconnecting-websocket";

import rpilog from "../assets/rpilog.mp4";
import setup from "../assets/setup.jpg";
import DjangoExample from "./DjangoExample";
import midtermdemo from "../assets/BellBoy-demo.mp4";

const containerStyles = {
  backgroundColor: "#30336b",
  height: "400vh",
  minHeight: "150vh",
};
const logoStyles = {
  height: "400px",
  width: "500px",
  marginTop: "20px",
  borderRadius: "20px",
};

export class LogFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      websocket: null,
      logEntries: [],
    };
  }

  componentDidMount() {
    // TODO: Ensure this is updated if the endpoint changes.
    const ws = new ReconnectingWebSocket(
      "wss://websocket-bellboy.herokuapp.com/"
    );
    ws.onopen = () => {
      console.log("Opening websocket...");
      // Send website in all caps to register as a website.
      ws.send("WEBSITE");
      ws.onmessage = (e) => {
        console.log("Got data: " + e.data);
        console.log(e);
        this.setState({ logEntries: [e.data, ...this.state.logEntries] });
        if (this.props.onSocketMessage) {
          this.props.onSocketMessage();
        }
      };
    };
  }

  render() {
    return (
      <div
        style={{
          textAlign: "left",
          color: this.props.color || "#dff9fb",
          fontSize: "28px",
          margin: "10px auto",
          maxWidth: "780px",
        }}
      >
        <h1>Log Feed</h1>
        <div
          style={{
            overflowY: "auto",
            height: "700px",
            fontFamily:
              "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
            fontSize: "18px",
          }}
        >
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
      <br></br>
      <b>CEG4913 Midterm Demo</b>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <video width="700" height="400" controls>
          <source src={midtermdemo} type="video/mp4"></source>
        </video>
      </div>
      <br></br>
      <b>CEG4912 Final Demo</b>
      <br></br>
      <iframe type="text/html" width="640" height="390"
        src="https://www.youtube.com/embed/_sGq6n6ccgw"
        frameborder="0"></iframe>
      <br></br>
      <br></br>
      <b>Live Camera Feed From Raspberry Pi and Log File</b>
      </div>
      <div style={{ textAlign: "center" }}>
        <video width="700" height="400" controls>
          <source src={rpilog} type="video/mp4"></source>
        </video>
      </div>
      <div style={{ textAlign: "center" }}>
        <img src={setup} style={logoStyles} alt="alt" />
      </div>
      <LogFeed />
      <br />
      <DjangoExample />
    </div>
  );
};

export default Security;
