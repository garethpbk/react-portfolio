import React, { Component } from 'react';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import AppContainer from '../containers/AppContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Modal from './Modal';

import {
  HeightContainer,
  FlexContainer,
  ContentContainer,
  RouteButton,
  CenterAdjust,
  DisplayInlineBlock,
  SlideSwitch
} from './StyleBase';

const ProjectContainer = styled.div`
  padding: 0 20px;

  > h1 {
    font-size: 3rem;
    margin: 0 0 0 0;
    text-align: center;
  }

  > a {
    color: steelblue;
    display: block;
    font-weight: 800;
    margin: 0 0 1em 0;
    text-align: center;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default class SelectedProject extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: [],
      modalImg: '',
      modalImgName: '',
      modalVisible: {
        opacity: 0,
        zIndex: -999
      },
      selectedSlide: 0,
      activeSlide: {
        0: true,
        1: false,
        2: false
      }
    };
    this.goToRoute = this.goToRoute.bind(this);
    this.loadModal = this.loadModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.SlideSwitch = this.switchSlide.bind(this);
  }

  componentDidMount() {
    const colors = [0, 0, 0];
    for (let i = 0; i < colors.length; i++) {
      colors[i] = Math.floor(Math.random() * 255);
    }
    this.setState({ bgColor: colors });
  }

  goToRoute(e) {
    this.props.history.push({ pathname: e });
  }

  loadModal(img, name) {
    this.setState({
      modalImg: img,
      modalImgName: name,
      modalVisible: {
        opacity: 1,
        zIndex: 999
      }
    });
  }

  hideModal() {
    this.setState({
      modalVisible: {
        opacity: 0,
        zIndex: -999
      }
    });
  }

  switchSlide(slide) {
    let activeSlide = { ...this.state.activeSlide };
    activeSlide[0] = false;
    activeSlide[1] = false;
    activeSlide[2] = false;
    activeSlide[slide] = true;
    this.setState({ selectedSlide: slide, activeSlide });
  }

  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {appState => (
          <div>
            <HeightContainer
              className="transitioned-component-right"
              bgColor={'rgba(' + this.state.bgColor + ', 0.75)'}
            >
              <FlexContainer>
                <ContentContainer>
                  <Grid>
                    <Row>
                      <Col xs={12} md={7}>
                        <CenterAdjust>
                          {
                            <img
                              src={appState.state.loadedProject.images[this.state.selectedSlide].url}
                              alt={appState.state.loadedProject.images[this.state.selectedSlide].title}
                              onClick={() =>
                                this.loadModal(
                                  appState.state.loadedProject.images[this.state.selectedSlide].url,
                                  appState.state.loadedProject.images[this.state.selectedSlide].title
                                )
                              }
                            />
                          }
                          <SlideSwitch
                            onClick={() => this.switchSlide(0)}
                            style={{
                              backgroundColor: this.state.activeSlide[0] ? 'steelblue' : 'rgba(255, 255, 255, 0.25)'
                            }}
                          />
                          <SlideSwitch
                            onClick={() => this.switchSlide(1)}
                            style={{
                              backgroundColor: this.state.activeSlide[1] ? 'steelblue' : 'rgba(255, 255, 255, 0.25)'
                            }}
                          />
                          <SlideSwitch
                            onClick={() => this.switchSlide(2)}
                            style={{
                              backgroundColor: this.state.activeSlide[2] ? 'steelblue' : 'rgba(255, 255, 255, 0.25)'
                            }}
                          />
                        </CenterAdjust>
                      </Col>
                      <Col xs={12} md={5}>
                        <ProjectContainer>
                          <h1>{appState.state.loadedProject.name}</h1>
                          <a href={appState.state.loadedProject.url} target="_blank" rel="noopener noreferrer">
                            {appState.state.loadedProject.url}
                          </a>
                          <a href={appState.state.loadedProject.github_url} target="_blank" rel="noopener noreferrer">
                            {appState.state.loadedProject.github_url}
                          </a>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: appState.state.loadedProject.desc[this.state.selectedSlide]
                            }}
                          />
                        </ProjectContainer>
                      </Col>
                    </Row>
                  </Grid>
                  <CenterAdjust>
                    <RouteButton
                      value="/projects"
                      onClick={event => {
                        this.goToRoute(event.target.value);
                        appState.setRoute(event.target.value);
                      }}
                      style={DisplayInlineBlock}
                    >
                      Go Back <span className="rotate-left">▲</span>
                    </RouteButton>
                  </CenterAdjust>
                </ContentContainer>
              </FlexContainer>
            </HeightContainer>
            <Modal
              modalImg={this.state.modalImg}
              modalImgName={this.state.modalImgName}
              modalVisible={this.state.modalVisible}
              hideModal={this.hideModal}
            />
          </div>
        )}
      </Subscribe>
    );
  }
}
