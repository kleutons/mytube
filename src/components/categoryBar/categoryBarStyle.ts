import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
`;


export const ContainerCategory = styled.div`
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    width: calc( 100% - 40px);
    scroll-behavior: smooth;
`;

export const ButtonCategory = styled.div`
    margin: 12px;   
    margin-left: 0;
    padding: 0 12px;
    height: 32px;
    border-radius: 8px;
    background-color: #0000000d;
    display: flex;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    &:hover{
        background-color: #0000001a;
    }

    &:focus {
        outline: none;
        background-color: black;
        color: white;
    }
`;