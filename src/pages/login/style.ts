import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 20px;
    row-gap: 50px;
`;