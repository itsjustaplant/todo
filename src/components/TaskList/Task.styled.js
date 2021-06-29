/* eslint-disable require-jsdoc, max-len*/

import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';

class TaskElement extends React.Component {
  constructor(props) {
    super(props);
    this.element = null;
    this.Tween = null;
  }

  componentDidMount() {
    this.Tween = TweenMax.to(this.element, .4, {opacity: 1});
  }

  componentWillUnmount() {
    this.Tween = TweenMax.to(this.element, .4, {opacity: 0});
  }

  render() {
    return (
      <li ref={(li) => this.element = li} className={this.props.className}>{this.props.children}</li>
    );
  }
}

export const Task = styled(TaskElement) `
  display: ${(props) => (props.display ? 'flex' : 'none')};
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  opacity: 0;
`;

TaskElement.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};
