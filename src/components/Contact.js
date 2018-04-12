import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppContainer from '../containers/AppContainer';

import { FlexContainer, ContentContainer, RouteButton, CenterAdjust, DisplayInlineBlock, PrimaryText } from './Landing';

const HeightContainer = styled.div`
  height: 100vh;
  background-color: rgba(255, 99, 71, 0.75);
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
              <h1>~ Get In Touch ~</h1>
              <ContentContainer>
                <Grid>
                  <Row>
                    <CenterAdjust>
                      <PrimaryText>
                        Currently accepting outreach via email:{' '}
                        <a href={'mailto:' + appState.state.email} target="_blank">
                          garethbk@gmail.com
                        </a>{' '}
                        and telephone: <a href={'tel:' + appState.state.phone}>540 454 7597</a>.
                      </PrimaryText>
                      <PrimaryText>
                        I'll have some sort of automated form mailer here soon. Had a killer setup working with{' '}
                        <a href="mailto:https://sendgrid.com/" target="_blank">
                          SendGrid
                        </a>, but then they banned me because I accidentally pushed an api key to GitHub. Whoops.
                      </PrimaryText>
                    </CenterAdjust>
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
                    Home <span className="rotate-down">▲</span>
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
                    value="/about"
                    onClick={event => {
                      this.goToRoute(event.target.value);
                      appState.setRoute(event.target.value);
                    }}
                    style={DisplayInlineBlock}
                  >
                    About <span className="rotate-down">▲</span>
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
