import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppContainer from '../containers/AppContainer';

import { FlexContainer, ContentContainer, RouteButton, CenterAdjust, DisplayInlineBlock, PrimaryText } from './Landing';
import LoneProject from './LoneProject';
import LoneSkill from './LoneSkill';

const HeightContainer = styled.div`
  height: 100vh;
  background-color: rgba(70, 130, 180, 0.75);
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
              <h1>~ Skills & Projects ~</h1>
              <ContentContainer>
                <CenterAdjust>
                  <PrimaryText>
                    Here are some tools I build with and things I have built with them. I consider myself fairly decent
                    at picking up new tech and hope to see more pretty logos added here soon. I host on{' '}
                    <a href="https://www.digitalocean.com/" target="_blank">
                      DigitalOcean
                    </a>.
                  </PrimaryText>
                  <PrimaryText>
                    The eventual goal here is to have a list of projects filterable by skill. For now, you can click the
                    toggle thing to switch between skills and projects.
                  </PrimaryText>
                  <PrimaryText>
                    Currently in love with{' '}
                    <a href="http://stylus-lang.com/" target="_blank">
                      Stylus
                    </a>{' '}
                    (but{' '}
                    <a href="https://sass-lang.com/" target="_blank">
                      Sass
                    </a>{' '}
                    will always have a special place in my heart) and{' '}
                    <a href="https://github.com/jamiebuilds/unstated" target="_blank">
                      Unstated
                    </a>{' '}
                    (sorry,{' '}
                    <a href="https://redux.js.org/" target="_blank">
                      Redux
                    </a>).
                  </PrimaryText>
                  <RouteButton onClick={appState.toggleSkillDisplay}>TOGGLE</RouteButton>
                </CenterAdjust>
                <Grid>
                  <Row style={{ marginTop: '25px' }}>
                    {appState.state.skillDisplay
                      ? appState.state.skills.map((skill, i) => (
                          <Col xs={4} md={2}>
                            <LoneSkill key={i} img={skill.img} />
                          </Col>
                        ))
                      : appState.state.projects.map((project, i) => (
                          <Col xs={6} md={4} style={{ marginTop: '10px' }}>
                            <LoneProject key={i} name={project.name} desc={project.desc} img={project.img} />
                          </Col>
                        ))}
                  </Row>
                </Grid>
                <CenterAdjust>
                  <RouteButton
                    value="/"
                    onClick={event => {
                      this.goToRoute(event.target.value);
                      appState.setRoute(event.target.value);
                    }}
                    style={DisplayInlineBlock}
                  >
                    Home <span className="rotate-left">▲</span>
                  </RouteButton>

                  <RouteButton
                    value="/about"
                    onClick={event => {
                      this.goToRoute(event.target.value);
                      appState.setRoute(event.target.value);
                    }}
                    style={DisplayInlineBlock}
                  >
                    About <span className="rotate-down">▲</span>
                  </RouteButton>

                  <RouteButton
                    value="/contact"
                    onClick={event => {
                      this.goToRoute(event.target.value);
                      appState.setRoute(event.target.value);
                    }}
                    style={DisplayInlineBlock}
                  >
                    Contact <span className="rotate-up">▲</span>
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
