import React, { Component } from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import AppContainer from '../containers/AppContainer';

const ProjectContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
  cursor: pointer;

  > img {
    max-width: 100%;
  }
`;

const ProjectScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.5s all;

  > p {
    color: white;
    font-weight: 800;
    font-size: 1.5rem;
    padding: 20px;
  }
`;

export default class LoneProject extends Component {
  constructor(props) {
    super(props);

    this.state = { opacity: 0, bgColor: [] };

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.goToRoute = this.goToRoute.bind(this);
  }

  mouseEnter() {
    this.setState({ opacity: 1 });
  }

  mouseLeave() {
    this.setState({ opacity: 0 });
  }

  goToRoute() {
    this.props.history.push({ pathname: 'selectedproject' });
  }

  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {appState => (
          <ProjectContainer
            href={this.props.url}
            target="_blank"
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
            onClick={() => {
              appState.selectProject(this.props.name, this.props.desc, this.props.img, this.props.url);
              this.goToRoute();
            }}
          >
            <ProjectScreen style={{ opacity: this.state.opacity }}>
              <p>{this.props.name}</p>
            </ProjectScreen>
            <img src={this.props.img} alt={this.props.name} />
          </ProjectContainer>
        )}
      </Subscribe>
    );
  }
}
