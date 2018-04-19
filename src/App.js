import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'unstated';
import PageTransition from 'react-router-page-transition';
import './App.css';

import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SelectedProject from './components/SelectedProject';

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: null
    };
  }
  componentDidMount() {
    fetch('http://catacombs.garethbk.com/wp-json/wp/v2/portfolio_project').then(results => {
      results.json().then(projects => {
        const loadedProjects = projects.map(project => {
          return {
            name: project.title.rendered,
            description: project.acf.description,
            primary_image: project.acf.primary_image,
            url: project.acf.url
          };
        });
        this.setState({
          projects: loadedProjects
        });
      });
    });
  }

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
                    <Route path="/projects" render={props => <Projects {...props} projects={this.state.projects} />} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/selectedproject" component={SelectedProject} />
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
