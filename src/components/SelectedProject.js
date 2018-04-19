import React from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import AppContainer from '../containers/AppContainer';

import { HeightContainer, FlexContainer, ContentContainer, RouteButton } from './StyleBase';

const SelectedProject = props => {
  return (
    <Subscribe to={[AppContainer]}>
      {appState => (
        <HeightContainer
          className="transition-item transitioned-component-right"
          bgColor={'rgba(' + appState.state.loadedProject.bgColor + ', 0.75)'}
        >
          <FlexContainer>
            <ContentContainer>
              <img src={appState.state.loadedProject.img} alt={appState.state.loadedProject.name} />
              <h1>{appState.state.loadedProject.name}</h1>
              <p>{appState.state.loadedProject.desc}</p>
            </ContentContainer>
          </FlexContainer>
        </HeightContainer>
      )}
    </Subscribe>
  );
};

export default SelectedProject;
