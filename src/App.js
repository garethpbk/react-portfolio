import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'unstated';
import PageTransition from 'react-router-page-transition';
import logo from './logo.svg';
import './App.css';
//import './main.styl';

import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Router>
            <Route
              render={({ location }) => (
                <PageTransition>
                  <Switch location={location}>
                    <Route exact path="/" component={Landing} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </PageTransition>
              )}
            />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
