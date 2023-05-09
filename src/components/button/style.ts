import styled from "styled-components";

export const BtnIcon = styled.div<{margin?:string, hover?:boolean}>`

    > svg{
        color: black;
        width: 24px;
        height: 24px;
        cursor: pointer;
        border-radius: 50%;
        padding: ${({hover}) => hover ? '8px' : ''};
        margin: ${({margin}) => margin ? margin : ''}
    }

    > svg:hover{
        background-color: ${({hover}) => hover ? '#0000001a' : ''};
    }
`;