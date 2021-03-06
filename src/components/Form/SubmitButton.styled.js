/* eslint-disable require-jsdoc, max-len*/

import React from 'react';

import styled from 'styled-components';
import TweenMax from 'gsap';
import PropTypes from 'prop-types';

class SubmitButtonElement extends React.Component {
  constructor(props) {
    super(props);
    this.element = null;
    this.Tween = null;
  }

  componentDidMount() {
    this.Tween = TweenMax.to(this.element, .4, {opacity: 1});
  }

  render() {
    return (
      <button ref={(button) => this.element = button} onClick={this.props.onClick} className={this.props.className}>{this.props.children}</button>
    );
  }
}


export const SubmitButton = styled(SubmitButtonElement) `
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 20px 40px;
  background-color: #2f80ed;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  opacity: 0;
  transition: background-color 0.4s ease-in-out;
  :hover{
    background-color: #327bdb;
  }
`;

SubmitButtonElement.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.any,
};
