/* eslint-disable require-jsdoc, max-len*/

import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';

class InputElement extends React.Component {
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
      <input onChange={this.props.onChange} ref={(input) => this.element = input} className={this.props.className}/>
    );
  }
}

export const InputField = styled(InputElement)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 1;
  padding: 20px 0 20px 12px;
  background-color: #ffffff;
  color: #333333;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  outline: none;
  transition: border 0.4s ease-in-out;
  opacity: 0;
  
  ::placeholder{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
  
  :focus{
    border: 1px solid #327bdb;
  }
`;

InputElement.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.any,
};
