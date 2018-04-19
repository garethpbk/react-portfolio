import React, { Component } from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import AppContainer from '../containers/AppContainer';

import { HeightContainer, FlexContainer, ContentContainer, RouteButton, DisplayInlineBlock } from './StyleBase';

export default class SelectedProject extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: []
    };
    this.goToRoute = this.goToRoute.bind(this);
  }

  componentDidMount() {
    const colors = [0, 0, 0];
    for (let i = 0; i < colors.length; i++) {
      colors[i] = Math.floor(Math.random() * 255);
    }
    this.setState({ bgColor: colors });
  }

  goToRoute(e) {
    this.props.history.push({ pathname: e });
  }

  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {appState => (
          <HeightContainer
            className="transition-item transitioned-component-right"
            bgColor={'rgba(' + this.state.bgColor + ', 0.75)'}
          >
            <FlexContainer>
              <ContentContainer>
                <img src={appState.state.loadedProject.img} alt={appState.state.loadedProject.name} />
                <h1>{appState.state.loadedProject.name}</h1>
                <p>{appState.state.loadedProject.desc}</p>

                <RouteButton
                  value="/projects"
                  onClick={event => {
                    this.goToRoute(event.target.value);
                    appState.setRoute(event.target.value);
                  }}
                  style={DisplayInlineBlock}
                >
                  Go Back <span className="rotate-left">▲</span>
                </RouteButton>
              </ContentContainer>
            </FlexContainer>
          </HeightContainer>
        )}
      </Subscribe>
    );
  }
}
