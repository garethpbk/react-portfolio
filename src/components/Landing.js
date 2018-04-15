import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import AppContainer from '../containers/AppContainer';

import {
  HeightContainer,
  FlexContainer,
  ContentContainer,
  CenterAdjust,
  DisplayInlineBlock,
  PrimaryText,
  RouteButton
} from './StyleBase';

const Jumbotron = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.75);
  text-align: center;
  > h1 {
    font-size: 3rem;
    margin: 0 0 0.5em 0;
  }
  > p {
    margin: 0 0 1em 0;
  }

  @media (min-width: 768px) {
    padding: 10px;
  }

  @media (min-width: 1024px) {
    padding: 50px;
  }
`;

const StyledLink = styled.a`
  color: black;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 800;
  display: inline-block;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover {
    &:before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const UpperCaseP = styled.p`
  font-weight: 800;
  text-transform: uppercase;
  margin: 25px 0;
`;

const SpanSteelBlue = styled.span`
  color: steelblue;
  font-weight: 800;
`;

const SmallLogo = styled.img`
  height: 0.75em;
  display: inline-block;
  transition: 0.3s all ease-in-out 0s;
`;

const SmallLink = styled.a`
  color: slategrey;
  text-decoration: none;
  font-weight: 800;
  display: inline-block;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: slategrey;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover {
    &:before {
      visibility: visible;
      transform: scaleX(1);
    }
    > img {
      filter: contrast(0);
    }
  }
`;

export default class Landing extends Component {
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
          <HeightContainer
            className="transition-item list-page"
            bgColor="peru"
            bgImg="https://s3.us-east-2.amazonaws.com/garethbk-portfolio/misc/bird-bg.jpg"
          >
            <FlexContainer>
              <Jumbotron>
                <h1>Hi, I'm Gareth. I like to build stuff.</h1>
                <div>
                  <UpperCaseP>
                    <StyledLink href={'mailto:' + appState.state.email} target="_blank">
                      {appState.state.email}
                    </StyledLink>{' '}
                    |
                    <StyledLink href={'tel:' + appState.state.phone} target="_blank">
                      {appState.state.phone}
                    </StyledLink>{' '}
                    |{' '}
                    <StyledLink href="https://github.com/garethpbk" target="_blank">
                      github.com/garethpbk
                    </StyledLink>
                  </UpperCaseP>
                </div>
                <p>I get excited about cooking, running, cycling, reading, electric rental scooters, and JavaScript.</p>
                <p>
                  My favorite CSS color is
                  <SpanSteelBlue> steelblue</SpanSteelBlue>, and I'm currently attempting to learn{' '}
                  <SmallLink href="https://mithril.js.org/" target="_blank">
                    Mithril{' '}
                    <SmallLogo
                      src="https://s3.us-east-2.amazonaws.com/garethbk-portfolio/logos/mithril-logo.svg"
                      alt="Mithril"
                    />
                  </SmallLink>.
                </p>

                <RouteButton
                  value="/projects"
                  onClick={event => {
                    this.goToRoute(event.target.value);
                    appState.setRoute(event.target.value);
                  }}
                >
                  See my stack and work <span className="rotate-right">▲</span>
                </RouteButton>

                <RouteButton
                  value="/contact"
                  onClick={event => {
                    this.goToRoute(event.target.value);
                    appState.setRoute(event.target.value);
                  }}
                >
                  Reach out to me directly <span className="rotate-up">▲</span>
                </RouteButton>

                <RouteButton
                  value="/about"
                  onClick={event => {
                    this.goToRoute(event.target.value);
                    appState.setRoute(event.target.value);
                  }}
                >
                  Learn more about me <span className="rotate-down">▲</span>
                </RouteButton>
              </Jumbotron>
            </FlexContainer>
          </HeightContainer>
        )}
      </Subscribe>
    );
  }
}
//export default Landing;

/* export default class Landing extends Component {
  constructor() {
    super();

    this.state = {
      title: "I'm Gareth.  I like to build stuff.",
      tagline: 'I get excited about cooking, running, cycling, reading, and JavaScript. My favorite CSS color is ',
      email: 'garethbk@gmail.com',
      phone: '540 454 7597'
    };

    this.goToContact = this.goToContact.bind(this);
    this.goToProjects = this.goToProjects.bind(this);
  }

  goToContact() {
    this.props.history.push({
      pathname: '/contact'
    });
  }

  goToProjects() {
    this.props.history.push({
      pathname: '/projects'
    });
  }

  render() {
    return (
      <HeightContainer className="transition-item list-page">
        <FlexContainer>
          <Jumbotron>
            <h1>{this.state.title}</h1>
            <p>
              {this.state.tagline}
              <SpanSteelBlue>steelblue</SpanSteelBlue>.
            </p>
            <div className="contact">
              <UpperCaseP>
                {this.state.email} | {this.state.phone}
              </UpperCaseP>
            </div>
            <button onClick={this.goToContact}>:::- Contact</button>
            <button onClick={this.goToProjects}>Projects -:::</button>
          </Jumbotron>
        </FlexContainer>
      </HeightContainer>
    );
  }
}
 */
