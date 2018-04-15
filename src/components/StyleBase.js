import styled from 'styled-components';

export const HeightContainer = styled.div`
  height: auto;
  min-height: 100vh;
  background-color: ${props => props.bgColor || 'peru'};
  background-image: url(${props => props.bgImg || ''});
  background-size: 100%;

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  > h1 {
    font-size: 3rem;
    margin: 0 0 1em 0;
  }
`;

export const ContentContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  padding: 10px;
  > h1 {
    font-size: 3rem;
    margin: 0 0 0.5em 0;
    text-align: center;
  }
`;

export const CenterAdjust = styled.div`
  text-align: center;
  width: 100%;
`;

export const DisplayInlineBlock = {
  display: 'inline-block'
};

export const PrimaryText = styled.p`
  padding: 10px 25px;

  > a {
    color: steelblue;
    font-weight: 800;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RouteButton = styled.button`
  border: 0px solid black;
  padding: 15px 20px;
  margin: 0 auto;
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 800;
  cursor: pointer;
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

  > span {
    display: inline-block;
    transform: rotate(0deg);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    &:before {
      visibility: visible;
      transform: scaleX(1);
    }
    > .rotate-left {
      transform: rotate(270deg);
    }
    > .rotate-right {
      transform: rotate(90deg);
    }
    > .rotate-up {
      transform: rotate(360deg);
    }
    > .rotate-down {
      transform: rotate(180deg);
    }
  }
`;
