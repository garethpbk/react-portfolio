import React, { Component } from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import AppContainer from '../containers/AppContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {
  HeightContainer,
  FlexContainer,
  ContentContainer,
  RouteButton,
  CenterAdjust,
  DisplayInlineBlock
} from './StyleBase';

const ModalWindow = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  transition: 0.5s all;
  cursor: pointer;

  @media (min-width: 476px) {
    height: 100vh;
  }
`;

const ModalContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    padding: 0px;
  }
`;

export default class Modal extends Component {
  render() {
    return (
      <ModalWindow
        style={{ opacity: this.props.modalVisible.opacity, zIndex: this.props.modalVisible.zIndex }}
        onClick={this.props.hideModal}
      >
        <ModalContent>
          <img src={this.props.modalImg} alt={this.props.modalImgName} />
        </ModalContent>
      </ModalWindow>
    );
  }
}
