import styled from 'styled-components';

export const InputField = styled.input `
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
  
  ::placeholder{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
  
  :focus{
    border: 1px solid #333333;
  }
`;
