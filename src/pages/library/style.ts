import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    

    svg.svgTitle{
        height: 120px;
        width: 120px;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    color: #606060;
    user-select: none;
    padding: 0 5%;
    box-sizing: border-box;

    .iconChannel{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 120px;
        min-height: 120px;
        color: #fff;
        background: #8d8df4;
        font-size: 70px;
        border-radius: 50%;
    }
    h2{
        font-size: 27px;
        margin-bottom: 8px;
        color: #0f0f0f;
        font-weight: 400;
    }
  
    span{
        font-weight: 600;
    }
    div{
        margin-top: 6px;
    }
`;  

export const ChannelMenu = styled.div`
    display: flex;
    border-bottom: 1px solid #ccc;
    width: 100%;
    margin-top: 15px;
    justify-content: center;
    user-select: none;

    >div{
        padding: 15px 32px;
        text-transform: capitalize;
        font-size: 16PX;
        font-weight: 500;
        color: #6e6e6e;
        cursor: pointer;
    }
    >div:hover{
        color: #000;
    }
    >div.active{
        border-bottom: 3px solid #000;
    }

    @media(max-width: 900px){
        justify-content: flex-start;
        overflow-y: auto;
    }
`;
export const ContainerPages = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    padding: 0 5%;
    box-sizing: border-box;

    h3{
        margin-bottom: 10px;
    }
    button{        
        border: none;
        padding: 8px;
        border-radius: 30px;
        font-size: 17px;
        max-width: 170px;
        cursor: pointer;
    }

    button:hover{        
        background-color: #dddddd;
    }

    .modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        z-index: 9999;
    }

    .modal-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        background-color: #fff;
        padding: 25px;
        border-radius: 4px;
        width: 550px;
        min-width: 250px;
        height: 350px;
        margin: 50px 10px;
        position: relative;
    }
    .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: transparent;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }

    .modal-content h2 {
        margin-bottom: 10px;
    }

    .modal-content p {
        margin-bottom: 10px;
    }

    .modal-content button {
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
    }

    .modal-content footer{
        display: flex;
        gap: 20px;
       margin-top: 25px;
    }

    .modal-content footer .btnSalve{ 
        background-color: #4396ff;
        color: #fff;
    }
    
    .modal-content footer .btnSalve:hover{ 
        background-color: #326ab0;
        color: #fff;
    }


`

export const ContainerVideoUser = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 20px;

    > div{
        flex: 1 1 290px;
        min-height: 200px;
    }

    .excluir{
        background-color: #ffe7e7;
        padding: 7px 15px;
        border-radius: 15px;
        margin-top: 5px;
        border: 1px solid transparent;
        cursor: pointer;
    }
    .excluir:hover{
        background-color: #f9d3d3;
        border: 1px solid #ff6b6b;
    }
`;

export const ContainerVideoInsc = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 60px;

    > div{
        min-height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    > div img.insc{
        height: 103px;
        width: 103px;
        border-radius: 50%;
    }
    > div span.button{
        padding: 7px 15px;
        background-color: #f6f6f6;
        border-radius: 20px;
        cursor: default;
    }
`;