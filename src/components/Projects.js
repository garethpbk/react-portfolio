import React, { Component } from 'react';
import styled from 'styled-components';

const HeightContainer = styled.div`
  height: 100vh;
  background-color: steelblue;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Projects'
    };

    this.goToHome = this.goToHome.bind(this);
    this.goToContact = this.goToContact.bind(this);
  }

  goToContact() {
    this.props.history.push({
      pathname: '/contact'
    });
  }

  goToHome() {
    this.props.history.push({
      pathname: '/'
    });
  }

  render() {
    return (
      <HeightContainer className="transition-item transitioned-component-right">
        <FlexContainer>
          <h1>{this.state.title}</h1>
          <button onClick={this.goToHome}>:::- Home</button>
          <button onClick={this.goToContact}>Contact -:::</button>
        </FlexContainer>
      </HeightContainer>
    );
  }
}
