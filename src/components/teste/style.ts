import styled from "styled-components";

export const Container = styled.div<{$openMenu?:boolean}>`
    background-color: ${({$openMenu}) => $openMenu  ? 'red' : 'blue' };
    padding: 50px;
    text-align: center;
`