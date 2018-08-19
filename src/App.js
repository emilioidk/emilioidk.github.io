import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home/Home';
import Blog from './Blog/Blog';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

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
            <Route exact path="/"><Home /></Route>
            <Route exact path="/blog"><Blog /></Route>
            <Route exact path="/projects"><Projects /></Route>
            <Route exact path="/contact"><Contact /></Route>
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
