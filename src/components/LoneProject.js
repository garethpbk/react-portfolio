import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.a`
  width: 100%;
  display: block;

  > img {
    max-width: 100%;
  }
`;

const LoneProject = props => {
  return (
    <ProjectContainer href={props.url} target="_blank">
      <img src={props.img} alt={props.name} />
    </ProjectContainer>
  );
};

export default LoneProject;
