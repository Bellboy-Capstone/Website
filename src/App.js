import React, { Component } from 'react';
// import './App.css';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Pages Import
import Intro from "./pages/Intro";
import Security from "./pages/Security";
import System from "./pages/System";
// import Members from "./pages/Members";
import Admin from "./pages/Admin";

const containerStyles = {
  backgroundColor: "#dff9fb",
  // height: '100vh',
  // minHeight : '100vh'
}

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log("line 26", value);
    this.setState({ page: value });
  }

  render() {
    const tabNames = ["Home", "Security", "System Architecture", "Admin"];
    const pageNumber = this.state.page;
    return (
      <div className="App">
        <header className="App-header">
          {/* <AppBar position="static" color="default"> */}
          <div style={containerStyles}>
            <Tabs 
            value={this.state.page | 0} 
            aria-label="simple tabs example"
            >
              {tabNames.map((item, index) => {
                return <Tab label={item} key={index} onClick={(e) => this.handleChange(index)} />
              })
              }
            </Tabs>
            </div>
          {/* </AppBar> */}
          {pageNumber === 0 && <Intro />}
          {pageNumber === 1 && <Security />}
          {pageNumber === 2 && <System />}
          {/* {pageNumber === 3 && <Members />} */}
          {pageNumber === 3 && <Admin />}
        </header>
      </div>
    );
  }
}

export default App;
