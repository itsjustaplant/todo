/* eslint-disable max-len */
import styled from 'styled-components';

export const TaskText = styled.div `
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  text-decoration: ${(props) => ((props.lineThrough) ? 'none' : 'line-through')};
`;
