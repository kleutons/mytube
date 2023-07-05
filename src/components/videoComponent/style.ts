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
    max-height: 170px;
    border-radius: 12px;
    margin-bottom: 5px;

    &:hover{
        border-radius: 0;
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.img`
    min-width: 35px;
    height: 35px;
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

export const ContainerSideBar = styled.div`
    max-width: 330px;
    margin: 8px 8px;
    cursor: pointer;
    display: flex;
    gap: 10px;
    font-size: 13px;

    @media screen and (max-width: 700px) {
        max-width: 290px;
    }
`;

export const ImageBannerSideBar = styled.img`
    max-height: 94px;
    border-radius: 12px;
    margin-bottom: 5px;

    &:hover{
        border-radius: 0;
    }
`;


export const ContainerSearch = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    gap: 17px;
    box-sizing: border-box;
    margin-bottom: 20px;

    
    @media screen and (max-width: 770px) {
        flex-direction: column;
        gap: 3px;
    }

    >div.img{
        min-width: 360px;
        height: 202px;
        border-radius: 12px;
        margin-bottom: 5px;
        background-color: #ccc;

        @media screen and (max-width: 770px) {
            min-width: 90%;
            
        }

        >img{
            width: 100%;
            height: 100%;
            border-radius: 12px;
            object-fit: cover;
            background-color: #ccc;
            
            &:hover{
            border-radius: 0;
            }
        }
    }

    >div.title{
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: start;        
        
        h2{
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 20px;    
            display: -webkit-box;
            -webkit-line-clamp: 1;
            overflow: hidden;
            -webkit-box-orient: vertical; 

            
            @media screen and (max-width: 900px) {
                font-size: 16px;
                margin-bottom: 10px;  
            }
        }

        >div.channel{
            display: flex;
            align-items: center;
            gap: 7px;
            margin-bottom: 7px;
        }

        p{
            color: #7e7e7e;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            -webkit-box-orient: vertical; 

            @media screen and (max-width: 900px) {
                font-size: 13px;
            }
        }


    
    }
`;
