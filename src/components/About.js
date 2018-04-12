import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppContainer from '../containers/AppContainer';

import { FlexContainer, ContentContainer, RouteButton, CenterAdjust, DisplayInlineBlock, PrimaryText } from './Landing';

const HeightContainer = styled.div`
  height: 100vh;
  background-color: rgba(175, 238, 238, 0.75);
`;

const AboutImage = styled.img`
  max-width: 100%;
  border: 5px solid rgba(255, 255, 255, 0.75);
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
              <h1>~ All About Me ~</h1>
              <ContentContainer>
                <Grid>
                  <Row>
                    <Col xs={5}>
                      <AboutImage src={appState.state.about.img} alt={appState.state.about.name} />
                    </Col>
                    <Col xs={7}>
                      <PrimaryText>
                        Born and raised in Northern Virginia, I'm now located in San Diego. I enjoy utilizing the power
                        of modern web technology to build unique and accessible user experiences. Currently I work
                        primarily in React, but I'm looking to branch out into alternatives (and build more stuff in
                        plain ol' JS). I'm into{' '}
                        <a href="https://mithril.js.org/" target="_blank">
                          Mithril
                        </a>{' '}
                        at the moment because I love the syntax and am a Lord of the Rings nerd.{' '}
                        <a href="https://svelte.technology/" target="_blank">
                          Svelte
                        </a>{' '}
                        is also really intriguing me, and I'm stoked to see how it influences the future of front-end
                        development.
                      </PrimaryText>
                      <PrimaryText>
                        For a long time I was a{' '}
                        <a href="https://www.sublimetext.com/" target="_blank">
                          Sublime Text
                        </a>{' '}
                        devotee, but recently made the switch to{' '}
                        <a href="https://code.visualstudio.com/" target="_blank">
                          VS Code
                        </a>{' '}
                        and haven't looked back since. Good job Microsoft!
                      </PrimaryText>
                      <PrimaryText>
                        When I'm not coding, I enjoy cooking, reading, and exercising. Running and cycling,
                        specifically. You can{' '}
                        <a href="https://www.strava.com/athletes/3001031" target="_blank">
                          find me on Strava
                        </a>{' '}
                        to see how I've been moving.{' '}
                        <a href="https://www.goodreads.com/user/show/38372316-gareth-bk" target="_blank">
                          Check out my Goodreads
                        </a>{' '}
                        to see all the books by old/dead white dudes I read (trying to diversify that).
                      </PrimaryText>
                      <PrimaryText>
                        I've been getting into JS game development via{' '}
                        <a href="http://phaser.io/" target="_blank">
                          Phase
                        </a>r and hope to have a (mostly) finished game up soon. It's called 9 Lives and is about a
                        flying laser cat. Inspired by Metroid, Castlevania, and Hollow Knight.
                      </PrimaryText>
                      <PrimaryText>
                        You'll find me on the usual{' '}
                        <a href="https://github.com/garethpbk" target="_blank">
                          Github
                        </a>{' '}
                        and{' '}
                        <a href="https://www.linkedin.com/in/gareth-bromser-kloeden-77b93745/" target="_blank">
                          LinkedIn
                        </a>. Working on getting those fancy icons you expect to see up soon.
                      </PrimaryText>
                      <PrimaryText>
                        At home I have two cats and the world's best partner. Hit me up if you're in the San Diego area
                        and want to talk development. I'll cook you dinner.
                      </PrimaryText>
                    </Col>
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
                    Home <span className="rotate-up">▲</span>
                  </RouteButton>

                  <RouteButton
                    value="/projects"
                    onClick={event => {
                      this.goToRoute(event.target.value);
                      appState.setRoute(event.target.value);
                    }}
                    style={DisplayInlineBlock}
                  >
                    Projects <span className="rotate-right">▲</span>
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
