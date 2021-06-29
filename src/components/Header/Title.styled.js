/* eslint-disable require-jsdoc, max-len*/

import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import TweenMax from 'gsap';

class TitleElement extends React.Component {
  constructor(props) {
    super(props);
    this.element = null;
    this.Tween = null;
  }

  componentDidMount() {
    this.Tween = TweenMax.to(this.element, .4, {y: 10});
  }
  render() {
    return (
      <div ref={(div) => this.element = div} className={this.props.className}>{this.props.children}</div>
    );
  }
}

export const Title = styled(TitleElement) `
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #333333;
  text-align: center;
  padding: 32px 0;
`;

TitleElement.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};
