import styled from 'styled-components';

export const TaskList = styled.ul `
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  width: clamp(375px, 60vw, 600px);
`;
