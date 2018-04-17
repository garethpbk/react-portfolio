import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Grid, Row } from 'react-flexbox-grid';
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
          <HeightContainer className="transition-item transitioned-component-up" bgColor="rgba(205, 133, 63, 0.75);">
            <FlexContainer>
              <ContentContainer>
                <h1>Talk To Me</h1>
                <Grid>
                  <Row>
                    <CenterAdjust>
                      <PrimaryText>
                        Currently accepting outreach via email:{' '}
                        <a href={'mailto:' + appState.state.email} target="_blank" rel="noopener noreferrer">
                          garethbk@gmail.com
                        </a>{' '}
                        and telephone: <a href={'tel:' + appState.state.phone}>540 454 7597</a>.
                      </PrimaryText>
                      <PrimaryText>
                        I'll have some sort of automated form mailer here soon. Had a killer setup working with{' '}
                        <a href="mailto:https://sendgrid.com/" target="_blank" rel="noopener noreferrer">
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
