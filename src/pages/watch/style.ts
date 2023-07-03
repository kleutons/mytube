import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: start;
    gap: 20px;
    margin-top: 20px;

    @media(max-width: 900px){
        flex-direction: column;
    }
`;

export const ContainerVideo = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    white-space: pre-line;

    >#containerIframe{        
        position: relative;
        width: 100%;
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
    }
    >#containerIframe iframe{
        width: 100%;
        height: 100%;
        position:  absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    @media(max-width: 900px){
        width: 100%;
    }
`;

export const ContainerSideBar = styled.div`
    width: 30%;

    @media(max-width: 900px){
        width: 100%;
    }
`;

export const ContainerTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 20px;

    @media(max-width: 900px){
        flex-direction: column;
    }

    >div.channel{
        display: flex;
        align-items: center;
        gap: 15px;
    }

    >div.channel img.channelIcon{
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    >div.channel div.channelName h3{
        font-weight: bold;
        font-size: 16px;
        white-space: nowrap;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    >div.channel span{
        font-size: 13px;
    }
    >div.channel div.button{
        white-space: nowrap;
        background-color: #000;
        color: #fff;
        border-radius: 20px;
        padding: 8px 15px;
        margin-left: 10px;
        font-size: 13px;
        cursor: pointer;
    }


`

export const ContainerBtns = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    

    svg{
        height: 20px;
        width: 20px;
        margin-right: 10px;
        margin-left: 5px;
    }

    >div.btnLike{
        display: flex;
        background-color: #0000000d;
        align-items: center;
        border-radius: 30px;
        cursor: pointer;
    }
    >div.btnLike div{
        padding: 10px;
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        align-items: center;
        font-weight: 500;
    }
    >div.btnLike div:first-of-type {
        border-radius: 30px 0 0 30px;
        border-right: 1px solid #ccc;
    }
    >div.btnLike div:nth-child(2) {
        border-radius: 0 30px 30px 0;
    }
    >div.btnLike div:hover{
        background-color: #0000001a;
        padding: 10px;
    }
    >div.share{
        display: flex;
        background-color: #0000000d;
        align-items: center;
        border-radius: 30px;
        cursor: pointer;
        padding: 10px 15px;
        font-size: 13px;
    }
    >div.share:hover{
        background-color: #0000001a;
    }
`

export const ContainerDescription= styled.div`
    background-color: #0000000d;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 15px;

    &:hover{
        background-color: #0000001a;
    }
    >div.statistics span{
        font-weight: bold;
    }
`