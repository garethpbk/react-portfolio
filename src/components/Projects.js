import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppContainer from '../containers/AppContainer';

import LoneProject from './LoneProject';
import LoneSkill from './LoneSkill';

const HeightContainer = styled.div`
  height: 100vh;
  background-color: steelblue;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

export default class Projects extends Component {
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
          <HeightContainer className="transition-item transitioned-component-right">
            <FlexContainer>
              <Grid>
                <Row>
                  {appState.state.skills.map((skill, i) => (
                    <Col xs={4} md={2}>
                      <LoneSkill key={i} img={skill.img} />
                    </Col>
                  ))}
                </Row>
              </Grid>
              <Grid>
                <Row>
                  {appState.state.projects.map((project, i) => (
                    <Col xs={6} md={4}>
                      <LoneProject key={i} name={project.name} desc={project.desc} img={project.img} />
                    </Col>
                  ))}
                </Row>
              </Grid>
              <h1>{appState.state.loadedRoute}</h1>
              <button
                value="/"
                onClick={event => {
                  this.goToRoute(event.target.value);
                  appState.setRoute(event.target.value);
                }}
              >
                :::- Home
              </button>
              <button
                value="/contact"
                onClick={event => {
                  this.goToRoute(event.target.value);
                  appState.setRoute(event.target.value);
                }}
              >
                Contact -:::
              </button>
            </FlexContainer>
          </HeightContainer>
        )}
      </Subscribe>
    );
  }
}
