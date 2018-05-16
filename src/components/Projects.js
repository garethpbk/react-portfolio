import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppContainer from '../containers/AppContainer';

import {
  HeightContainer,
  FlexContainer,
  ContentContainer,
  RouteButton,
  ToggleButton,
  CenterAdjust,
  DisplayInlineBlock,
} from './StyleBase';

import LoneProject from './LoneProject';
import LoneSkill from './LoneSkill';
export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDisplay: 'Projects',
      skillDisplay: false,
      projectPageOne: true,
      todo: {
        id: 1,
        text: '',
      },
    };

    this.goToRoute = this.goToRoute.bind(this);
    this.toggleSkillDisplay = this.toggleSkillDisplay.bind(this);
    this.switchPage = this.switchPage.bind(this);
  }

  componentDidMount() {
    let updatedTodo = { ...this.state.todo };
    updatedTodo.text = 'Here is some text';
    this.setState({
      todo: updatedTodo,
    });
  }

  goToRoute(e) {
    this.props.history.push({
      pathname: e,
    });
  }

  toggleSkillDisplay() {
    this.setState({
      activeDisplay: this.state.skillDisplay ? 'Projects' : 'Skills',
      skillDisplay: !this.state.skillDisplay,
    });
  }

  switchPage() {
    this.setState({
      projectPageOne: !this.state.projectPageOne,
    });
  }

  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {appState => (
          <HeightContainer className="transition-item transitioned-component-right" bgColor="rgba(70, 130, 180, 0.75);">
            <FlexContainer>
              <ContentContainer>
                <CenterAdjust>
                  <ToggleButton onClick={this.toggleSkillDisplay}>
                    <h1>{this.state.activeDisplay}</h1>
                    <span className="rotate-down">▲</span>
                  </ToggleButton>
                </CenterAdjust>
                {this.props.projects ? (
                  <Grid>
                    <Row style={{ marginTop: '25px' }}>
                      {this.state.skillDisplay
                        ? appState.state.skills.map((skill, i) => (
                            <Col key={i} xs={4} md={2}>
                              <LoneSkill img={skill.img} />
                            </Col>
                          ))
                        : this.props.projects.map(
                            this.state.projectPageOne
                              ? (project, i) =>
                                  i < 9 ? (
                                    <Col key={i} xs={6} md={4} style={{ marginTop: '10px' }}>
                                      <LoneProject
                                        name={project.name}
                                        descOne={project.description_one}
                                        descTwo={project.description_two}
                                        descThree={project.description_three}
                                        img={project.primary_image}
                                        url={project.url}
                                        githubUrl={project.github_url}
                                        images={project.images}
                                        history={this.props.history}
                                      />
                                    </Col>
                                  ) : (
                                    ''
                                  )
                              : (project, i) =>
                                  i > 8 ? (
                                    <Col key={i} xs={6} md={4} style={{ marginTop: '10px' }}>
                                      <LoneProject
                                        name={project.name}
                                        descOne={project.description_one}
                                        descTwo={project.description_two}
                                        descThree={project.description_three}
                                        img={project.primary_image}
                                        url={project.url}
                                        githubUrl={project.github_url}
                                        images={project.images}
                                        history={this.props.history}
                                      />
                                    </Col>
                                  ) : (
                                    ''
                                  )
                          )}
                    </Row>
                    <CenterAdjust>
                      {this.state.skillDisplay ? (
                        ''
                      ) : (
                        <RouteButton onClick={this.switchPage}>More Projects</RouteButton>
                      )}
                    </CenterAdjust>
                  </Grid>
                ) : (
                  ''
                )}
                <CenterAdjust>
                  <RouteButton
                    value="/"
                    onClick={event => {
                      this.goToRoute(event.target.value);
                      appState.setRoute(event.target.value);
                    }}
                    style={DisplayInlineBlock}
                  >
                    Home <span className="rotate-left">▲</span>
                  </RouteButton>

                  <RouteButton
                    value="/about"
                    onClick={event => {
                      this.goToRoute(event.target.value);
                      appState.setRoute(event.target.value);
                    }}
                    style={DisplayInlineBlock}
                  >
                    About <span className="rotate-down">▲</span>
                  </RouteButton>

                  <RouteButton
                    value="/contact"
                    onClick={event => {
                      this.goToRoute(event.target.value);
                      appState.setRoute(event.target.value);
                    }}
                    style={DisplayInlineBlock}
                  >
                    Contact <span className="rotate-up">▲</span>
                  </RouteButton>
                </CenterAdjust>
              </ContentContainer>
            </FlexContainer>
          </HeightContainer>
        )}
      </Subscribe>
    );
  }
}
