import styled from "styled-components";

export const BtnIcon = styled.div<{margin?:string, color?:string, hover?:string}>`
    display: flex;
    justify-content: center;
    border-radius: 50%;
    color: black;
    cursor: pointer;
    padding: 8px;
    margin: ${({margin}) => margin ? margin : ''};
    width: 24px;
    height: 24px;
    background-color: ${({color}) => color ? color : ''};
    user-select:none;

    > svg{
        width: 24px;
        height: 24px;
    }

    &:hover{
        background-color: ${({hover}) => hover ? '#0000001a' : ''};
    }
`;


export const BtnText = styled.div<{margin?:string, color?:string}>`
    margin: ${({margin}) => margin ? margin : '0 5px'};
    padding: 4px 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 15px;
    border-radius: 30px;
    border: 1px solid #ccc;
    background-color: #fff;
    font-weight: 600;
    color: ${({color}) => color ? color : '#065fd4'};
    cursor: pointer;
    white-space: nowrap;
    user-select:none;

    > svg{
        color: currentColor;
        width: 24px;
        height: 24px;
        margin-right: 6px;
    }

    &:hover{
        background-color: #def1ff;
    }
`;

export const ButtonLog = styled.button`
  padding: 13px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  min-width: 110px;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 600;
  font-size: 16px;
  user-select:none;

  &:hover{
    background-color: #1b66c9;
  }
`;