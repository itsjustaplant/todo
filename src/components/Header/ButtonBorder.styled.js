import styled from 'styled-components';

export const ButtonBorder = styled.div `
  width: 90px;
  height: 4px;
  border-radius: 4px 4px 0 0;
  background-color: #2f80ed;
  justify-self: center;
  opacity: ${(props) => (props.opacity)};
  transition: opacity 0.4s ease-in-out;
  transform: translateY(1px);
`;
