import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    > div{
        flex: 1 1 290px;
        min-height: 260px;
    }
`;


export const ContainerShorts = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    flex-wrap: wrap;
    margin: 30px 0;
    padding: 30px 0;
    border-top: 4px solid #0000001a;
    border-bottom: 4px solid #0000001a;

 
    >div.title{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
    }

    >div.shorts{
        width: 100%;
        padding: 0 5%;
        display: flex;
        overflow: auto;
        box-sizing: border-box;
    }
`;