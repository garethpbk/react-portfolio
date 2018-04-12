import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppContainer from '../containers/AppContainer';

const HeightContainer = styled.div`
  height: 100vh;
  background-color: paleturquoise;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  > h1 {
    font-size: 3rem;
    margin: 0 0 1em 0;
  }
`;

const AboutImage = styled.img`
  max-width: 100%;
`;

export default class About extends Component {
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
          <HeightContainer className="transition-item transitioned-component-down">
            <FlexContainer>
              <h1>{appState.state.loadedRoute}</h1>
              <Grid>
                <Row>
                  <Col xs={5}>
                    <AboutImage src={appState.state.about.img} alt={appState.state.about.name} />
                  </Col>
                  <Col xs={7}>
                    <p>
                      Born and raised in Northern Virgnia, I'm now located in San Diego. I enjoy utilizing the power of
                      modern web technology to build unique and accessible user experiences.
                    </p>
                  </Col>
                </Row>
              </Grid>
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
