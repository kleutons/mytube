import styled from "styled-components";

export const BtnIcon = styled.div<{margin?:string, color?:string, hover?:boolean}>`
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