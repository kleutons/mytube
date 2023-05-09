import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export const LogoContainer = styled.div`
    display: flex; 
    align-items: center;
    min-width: var(--menuOpen);
`;

export const SearchContainer = styled.div<{openSearchMoblie?:boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 550px;
    margin-right: 15px;
    background: #fff;
    flex: 1;

    @media screen and (max-width: 670px) {
        display: ${({openSearchMoblie}) => openSearchMoblie? 'flex' : 'none'};
        position: fixed;
        width: 100%;
        margin: 0;
        align-items: center;
        justify-content: center;
    }
`;

export const SearchInputContainer = styled.div`
    width: 55%;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;
export const SearchInput = styled.input`
    width: 100%;
    height: 27px;
    outline: none;
    border: none;
    font-size: 15px;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    
    &:hover{
        background-color: #f0f0f0;
    }

    @media screen and (max-width: 670px) {
        width: 45px;
    }
`;

export const HeaderButton = styled.div`
    width: 180px;
    display: flex;

    div.btnLogin{
        margin: 0 5px;
        padding: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        line-height: 25px;
        border-radius: 30px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-weight: 600;
        color: #065fd4;
        cursor: pointer;
        white-space: nowrap
    }

    div.btnLogin:hover{
        background-color: #def1ff;
    } 
    div.btnLogin svg{
        width: 24px;
        height: 24px;
        padding-right:5px;
    }
`;