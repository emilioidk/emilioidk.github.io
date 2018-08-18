import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar>
            <Tabs fullWidth={true} centered={true}>
              <Tab value="home" component={Link} to="/" label="Home" />
              <Tab value="blog" component={Link} to="/blog" label="Blog" />
              <Tab value="projects" component={Link} to="/projects" label="Projects" />
              <Tab value="contact" component={Link} to="/contact" label="Contact" />
            </Tabs>
          </AppBar>
        </header>
        <section style={{ padding: 8 * 8 }}>
          <Switch>
            <Route exact path="/"><div>Home</div></Route>
            <Route exact path="/blog"><div>Blog</div></Route>
            <Route exact path="/projects"><div>Projects</div></Route>
            <Route exact path="/contact"><div>Contact</div></Route>
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
