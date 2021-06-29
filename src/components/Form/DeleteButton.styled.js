/* eslint-disable require-jsdoc, max-len*/

import React from 'react';

import styled from 'styled-components';
import TweenMax from 'gsap';
import PropTypes from 'prop-types';

class DeleteButtonElement extends React.Component {
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


export const DeleteButton = styled(DeleteButtonElement) `
  display: flex;
  align-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  padding: 12px 24px;
  background-color: #eb5757;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 4px;
  opacity: 0;
  transition: background-color 0.4s ease-in-out;
  margin-left: auto;
  justify-self: flex-end;
  :hover{
    background-color: #e83f3f;
  }
  img{
    width: 14px;
    height: 14px;
  }
`;

DeleteButtonElement.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.any,
};
