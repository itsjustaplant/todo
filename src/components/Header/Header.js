/* eslint-disable require-jsdoc */

import React from 'react';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';

import {Title} from './Title.styled';
import {NavBar} from './NavBar.styled';
import {NavButton} from './NavButton.styled';
import {ButtonBorder} from './ButtonBorder.styled';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.element = null;
    this.Tween = null;
    this.state = {
      borderOpacity: [1, 0, 0],
    };
  }

  handleOpacity(id) {
    const array = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      array[i] = (i === id) ? (100) : (0);
    }
    this.setState({borderOpacity: array});
    this.props.handlePage(id);
  }

  componentDidMount() {
    this.Tween = TweenMax.to(this.element, .4, {opacity: 1});
  }

  render() {
    return (
      <div style={{opacity: 0}} ref={(div) => this.element = div}>
        <Title>#todo</Title>
        <NavBar>
          <NavButton onClick={() => this.handleOpacity(0)}>All</NavButton>
          <NavButton onClick={() => this.handleOpacity(1)}>Active</NavButton>
          <NavButton onClick={() => this.handleOpacity(2)}>Completed</NavButton>
          <ButtonBorder opacity={this.state.borderOpacity[0]}/>
          <ButtonBorder opacity={this.state.borderOpacity[1]}/>
          <ButtonBorder opacity={this.state.borderOpacity[2]}/>
        </NavBar>
      </div>
    );
  }
}

Header.propTypes = {
  handlePage: PropTypes.func,
};
