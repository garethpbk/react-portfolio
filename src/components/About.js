import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppContainer from '../containers/AppContainer';

import {
  HeightContainer,
  FlexContainer,
  ContentContainer,
  RouteButton,
  CenterAdjust,
  DisplayInlineBlock,
  PrimaryText
} from './StyleBase';

const AboutImage = styled.img`
  max-width: 100%;
  border: 5px solid rgba(255, 255, 255, 0.75);
`;

const SmallIcon = styled.img`
  width: 35px;
  display: inline-block;
  margin: 25px 15px;
  padding: 10px;

  &:hover {
    filter: invert(50%);
  }
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
          <HeightContainer className="transition-item transitioned-component-down" bgColor="rgba(175, 238, 238, 0.75)">
            <FlexContainer>
              <ContentContainer>
                <h1>Hey There!</h1>
                <Grid>
                  <Row>
                    <Col xs={12} md={5}>
                      <AboutImage src={appState.state.about.img} alt={appState.state.about.name} />
                    </Col>
                    <Col xs={12} md={7}>
                      <PrimaryText>
                        Born and raised in Northern Virginia, I'm now located in San Diego. I enjoy utilizing the power
                        of modern web technology to build unique and accessible user experiences. Currently I work
                        primarily in React, but I'm looking to branch out into alternatives (and build more stuff in
                        plain ol' JS).
                      </PrimaryText>
                      <PrimaryText>
                        For a long time I was a{' '}
                        <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">
                          Sublime Text
                        </a>{' '}
                        devotee, but recently made the switch to{' '}
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                          VS Code
                        </a>{' '}
                        and haven't looked back since. Good job Microsoft!
                      </PrimaryText>
                      <PrimaryText>
                        When I'm not coding, I enjoy cooking, reading, and exercising. Running and cycling,
                        specifically. You can{' '}
                        <a href="https://www.strava.com/athletes/3001031" target="_blank" rel="noopener noreferrer">
                          find me on Strava
                        </a>{' '}
                        to see how I've been moving.{' '}
                        <a
                          href="https://www.goodreads.com/user/show/38372316-gareth-bk"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Check out my Goodreads
                        </a>{' '}
                        to see all the books by old/dead white dudes I read (trying to diversify that).
                      </PrimaryText>
                      <PrimaryText>
                        At home I have two cats and the world's best partner. Hit me up if you're in the San Diego area
                        and want to talk development. I'll cook you dinner.
                      </PrimaryText>
                      <PrimaryText>Find me on the usual haunts, or download my resume -</PrimaryText>
                      <a
                        href="https://www.linkedin.com/in/gareth-bromser-kloeden-77b93745/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SmallIcon
                          src="https://s3.us-east-2.amazonaws.com/garethbk-portfolio/icons/linkedin.svg"
                          alt="LinkedIn - icon by Icomoon"
                        />
                      </a>
                      <a href="https://github.com/garethpbk" target="_blank" rel="noopener noreferrer">
                        <SmallIcon
                          src="https://s3.us-east-2.amazonaws.com/garethbk-portfolio/icons/github.svg"
                          alt="Github - icon by Icomoon"
                        />
                      </a>
                      <a
                        href="https://s3.us-east-2.amazonaws.com/garethbk-portfolio/misc/gbk-resume-blue-180508.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SmallIcon
                          src="https://s3.us-east-2.amazonaws.com/garethbk-portfolio/icons/profile.svg"
                          alt="Resume - icon by Icomoon"
                        />
                      </a>
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
