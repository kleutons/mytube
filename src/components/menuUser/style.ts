import styled from "styled-components";

export const MenuUser = styled.div`
    position: fixed;
    z-index: 2202;
    right: 25px;
    top: 50px;
    background-color: #fff;
    width: 240px;
    padding-bottom: 10px;
    border-radius: 12px;
    box-shadow: 0px 4px 32px 0px #0000001a;
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    user-select:none;


    div.datauser{
        padding: 20px 16px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        
    }

    div.iconUser{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #8d8df4;
        font-size: 20px;
        color: #fff;
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        cursor:default;
    }

    div.separator{
        height: 1px;
        width: 100%;
        margin: 10px 0;
        background-color: #0000001a;
    }
`;

export const MenuItemUser = styled.div`
    display: flex;
    align-items: center;
    color: #4d4d4d;
    cursor: pointer;
    margin: 1px 0;
    padding: 10px 16px;

    > svg{  
        width: 22px;
        height: 22px;
        margin-right: 15px;
    }

    &:hover{
        background-color: #f2f2f2;
    }
`;