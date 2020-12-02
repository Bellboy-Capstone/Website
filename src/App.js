import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Intro from "./pages/Intro";
import Security from "./pages/Security";
import System from "./pages/System";
import Admin from "./pages/Admin";
import Graph from "./pages/Graph";
import EventGraph from "./pages/EventGraph";

const containerStyles = { backgroundColor: "#dff9fb" };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(page) {
    this.setState({ page });
  }

  render() {
    const tabNames = [
      "Home",
      "Security",
      "System Architecture",
      "Graph",
      "EventGraph",
      "Admin",
    ];
    const pageNumber = this.state.page;
    return (
      <div className="App">
        <header className="App-header">
          <div style={containerStyles}>
            <Tabs value={this.state.page | 0} aria-label="simple tabs example">
              {tabNames.map((item, index) => {
                return (
                  <Tab
                    label={item}
                    key={index}
                    onClick={() => this.handleChange(index)}
                  />
                );
              })}
            </Tabs>
          </div>
          {pageNumber === 0 && <Intro />}
          {pageNumber === 1 && <Security />}
          {pageNumber === 2 && <System />}
          {pageNumber === 3 && <Graph />}
          {pageNumber === 4 && <EventGraph />}
          {pageNumber === 5 && <Admin />}
        </header>
      </div>
    );
  }
}

export default App;
