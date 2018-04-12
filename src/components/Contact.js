import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppContainer from '../containers/AppContainer';

const HeightContainer = styled.div`
  height: 100vh;
  background-color: tomato;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default class Contact extends Component {
  constructor() {
    super();

    this.goToRoute = this.goToRoute.bind(this);
  }

  goToRoute(e) {
    this.props.history.push({
      pathname: e
    });
  }

  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {appState => (
          <HeightContainer className="transition-item transitioned-component-up">
            <FlexContainer>
              <h1>{appState.state.loadedRoute}</h1>
              <button
                value="/projects"
                onClick={event => {
                  this.goToRoute(event.target.value);
                  appState.setRoute(event.target.value);
                }}
              >
                Projects -:::
              </button>
              <button
                value="/"
                onClick={event => {
                  this.goToRoute(event.target.value);
                  appState.setRoute(event.target.value);
                }}
              >
                :::- Home
              </button>
            </FlexContainer>
          </HeightContainer>
        )}
      </Subscribe>
    );
  }
}
