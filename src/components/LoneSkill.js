import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  max-width: 100%;
`;

const LoneSkill = props => {
  return (
    <div>
      <Logo src={props.img} alt={props.skill} />
    </div>
  );
};

export default LoneSkill;
