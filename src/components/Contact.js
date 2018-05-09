import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
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

const ContactInput = styled.input`
  display: block;
  width: 50%;
  border: 1px solid black;
  padding: 15px;
  margin: 0 auto 15px auto;
`;

const ContactTextarea = styled.textarea`
  display: block;
  width: 50%;
  border: 1px solid black;
  padding: 15px;
  margin: 0 auto 15px auto;
`;

const ContactSubmit = styled.button`
  width: 25%;
  border: 1px solid black;
  padding: 15px;
  margin: 15px auto;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      messageSent: null
    };

    this.goToRoute = this.goToRoute.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  goToRoute(e) {
    this.props.history.push({
      pathname: e
    });
  }

  handleSubmit() {
    this.setState({
      messageSent: 'Thanks!  Message sent!'
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
                        </a>, telephone: <a href={'tel:' + appState.state.phone}>540 454 7597</a>, or the form below:
                      </PrimaryText>
                      {!this.state.messageSent ? (
                        <form method="POST" style={{ marginTop: '15px' }}>
                          <ContactInput type="text" name="name" placeholder="Your Name" />

                          <ContactInput type="email" name="email" placeholder="Your Email" />

                          <ContactTextarea name="message" rows="3" placeholder="Your Inquiry" />

                          <ContactSubmit onClick={this.handleSubmit}>Submit</ContactSubmit>
                        </form>
                      ) : (
                        <div style={{ padding: '50px 0' }}>{this.state.messageSent}</div>
                      )}
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
