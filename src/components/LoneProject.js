import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  width: 100%;

  > img {
    max-width: 100%;
  }
`;

const LoneProject = props => {
  return (
    <ProjectContainer>
      <img src={props.img} alt={props.name} />
    </ProjectContainer>
  );
};

export default LoneProject;
