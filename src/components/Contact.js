import React, { Component } from 'react';
import styled from 'styled-components';

const HeightContainer = styled.div`
  height: 100vh;
  background-color: tomato;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Contact'
    };

    this.goToHome = this.goToHome.bind(this);
    this.goToProjects = this.goToProjects.bind(this);
  }

  goToProjects() {
    this.props.history.push({
      pathname: '/projects'
    });
  }

  goToHome() {
    this.props.history.push({
      pathname: '/'
    });
  }

  render() {
    return (
      <HeightContainer className="transition-item transitioned-component-left">
        <FlexContainer>
          <h1>{this.state.title}</h1>
          <button onClick={this.goToProjects}>Projects -:::</button>
          <button onClick={this.goToHome}>:::- Home</button>
        </FlexContainer>
      </HeightContainer>
    );
  }
}
