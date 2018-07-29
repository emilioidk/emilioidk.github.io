import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  /**
   * Function for performing all the behind the scenes between MaterialUI and ReactRouter to make a kickass SPA
   * @param {object} event
   * @param {number} value
   */
  onTabChange(event, value) {
    console.log("Fix me!");
  }

  render() {
    return (
      <div className="App">
        <AppBar>
          <Tabs fullWidth={true} centered={true} onChange={this.onTabChange}>
            <Tab label="Home" />
            <Tab label="Blog" />
            <Tab label="Projects" />
            <Tab label="Contact" />
          </Tabs>
        </AppBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">It works!</Button>
      </div>
    );
  }
}

export default App;
