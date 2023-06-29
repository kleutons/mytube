import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  color: #202124;
  background-color: #fff;
  border: 1px solid #dadce0;
  box-sizing: border-box;

  &:focus{
    border-color: #1a75ff;
    outline: none;
  }
`;