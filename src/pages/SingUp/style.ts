import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

`;

export const Content = styled.form`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 48px 40px 36px;
  width: 100%;
  background-color: white;
  border: 1px solid #dadce0;
  max-width: 450px;
  border-radius: 8px;

  >img{
    width: 90px;
    height: auto;
    margin: 8px 0;
  }
  >h1{
    font-size: 24px;
    font-weight: 400;
    color: #202124;
    margin: 0;
  }
  >span:first-of-type{
    margin-bottom: 23px;
  }

`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    >a{
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      padding: 10px;
      text-decoration: none;
      color: #1a73e8;
    }
    >a:hover{
      color: #174ea6;
      background-color: #f6fafe;
    }
`;

export const ContentPass = styled.div`
  display: flex;
  gap: 10px;
`;

export const SpanPass = styled.span`
  padding: 0 15px;
  font-size: 13px;
  margin-top: -10px;
  color: #5f6368;
  cursor: pointer;
  
  >input{
    width: 18px;
    cursor: pointer;
  }
  >label{
    cursor: pointer;
  }
`;

export const ContentShowPass = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
  padding-left: 15px;
  margin-top: -5px;

  >input{
    width: 18px;
  }
`;


export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;
