import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    height: var(--headerHeight);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;

    > svg{
        color: black;
        width: 24px;
        height: 24px;
        cursor: pointer;
        border-radius: 50%;
        padding: 8px;
        margin: 0 20px;
    }

    > svg:hover{
        background-color: #0000001a;
    }
`;