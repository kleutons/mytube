import styled from "styled-components";

export const Container = styled.div`
    max-width: 330px;
    margin: 8px 8px;
    cursor: pointer;

    @media screen and (max-width: 700px) {
        max-width: 290px;
    }
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: auto;
    border-radius: 12px;

    &:hover{
        border-radius: 0;
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.div`
    background-color: beige;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;