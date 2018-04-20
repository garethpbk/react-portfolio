import React, { Component } from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import AppContainer from '../containers/AppContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {
  HeightContainer,
  FlexContainer,
  ContentContainer,
  RouteButton,
  CenterAdjust,
  DisplayInlineBlock
} from './StyleBase';

const ProjectContainer = styled.div`
  padding: 0 20px;

  > h1 {
    font-size: 3rem;
    margin: 0 0 0 0;
    text-align: center;
  }

  > a {
    color: steelblue;
    display: block;
    font-weight: 800;
    margin: 0 0 1em 0;
    text-align: center;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

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
                <Grid>
                  <Row>
                    <Col xs={6}>
                      <CenterAdjust>
                        <img src={appState.state.loadedProject.img} alt={appState.state.loadedProject.name} />
                      </CenterAdjust>
                    </Col>
                    <Col xs={6}>
                      <ProjectContainer>
                        <h1>{appState.state.loadedProject.name}</h1>
                        <a href={appState.state.loadedProject.url} target="_blank" rel="noopener noreferrer">
                          {appState.state.loadedProject.url}
                        </a>
                        <p dangerouslySetInnerHTML={{ __html: appState.state.loadedProject.desc }} />
                      </ProjectContainer>
                    </Col>
                  </Row>
                </Grid>
                <CenterAdjust>
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
                </CenterAdjust>
              </ContentContainer>
            </FlexContainer>
          </HeightContainer>
        )}
      </Subscribe>
    );
  }
}
