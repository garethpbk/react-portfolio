import React, { Component } from 'react';
import styled from 'styled-components';

const HeightContainer = styled.div`
  height: 100vh;
  background-color: peru;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Jumbotron = styled.div`
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  > h1 {
    font-size: 3rem;
    margin: 0 0 1em 0;
  }
  > p {
    margin: 0 0 1em 0;
  }
`;

const UpperCaseP = styled.p`
  text-transform: uppercase;
`;

export default class Landing extends Component {
  constructor() {
    super();

    this.state = {
      title: "I'm Gareth.  I like to build stuff.",
      tagline: 'I get excited about cooking, running, cycling, reading, and JavaScript.',
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
            <p>{this.state.tagline}</p>
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
