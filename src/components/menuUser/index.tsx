import { useEffect, useRef, useState } from 'react';
import * as C from './style';
import useAuth from "../../hooks/useAuth";
import { ButtonIcon } from "../button";


import { 
  HiOutlineUserCircle,
  HiOutlinePlayCircle,
  HiOutlineCog6Tooth,
  HiOutlineArrowRightOnRectangle
} from "react-icons/hi2";
import {
  RiShieldUserLine,
  RiFeedbackLine,
  RiQuestionLine,
  } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';




function MenuUser() {
  const navigate = useNavigate();

  const { logOut, user_data } = useAuth();
    const NomeIcon = function(string:string) {
        if (string && string.length > 0) {
            return string.charAt(0).toUpperCase();
          }
          return "";
      };


  const menuRef = useRef<HTMLDivElement>(null);
  const buttonMenuUserRef = useRef<HTMLDivElement>(null);
  const [openMenuUser, setOpenMenuUser] = useState(false);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as HTMLElement) &&
        buttonMenuUserRef.current &&
        !buttonMenuUserRef.current.contains(event.target as HTMLElement)
      ) {
        setOpenMenuUser(false);
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  function handleOpenMenuUser() {
    setOpenMenuUser(!openMenuUser);
  }

  return (
    <div>
      <div ref={buttonMenuUserRef} onClick={handleOpenMenuUser}>
        <ButtonIcon myRef={buttonMenuUserRef} onClick={() => handleOpenMenuUser()} svgIcon={NomeIcon(user_data.nome)} color="#8d8df4" margin="0 10px" />
      </div>
      {openMenuUser && (
        <C.MenuUser ref={menuRef}>
           <div className="datauser">
            <div className="iconUser"> { NomeIcon(user_data.nome) } </div>
            <div> 
                <span> {user_data.nome} </span>
                <span> {user_data.email} </span>
            </div>
          </div>
          <div className="separator"></div>
          <C.MenuItemUser  onClick={() => navigate('/mytube/library')} >  <HiOutlineUserCircle /> Seu Canal </C.MenuItemUser>
          <C.MenuItemUser  onClick={() => navigate('/mytube/library')} >  <HiOutlinePlayCircle /> YouTube Studio </C.MenuItemUser>
          <C.MenuItemUser  onClick={() => navigate('/mytube/library')} >  <RiShieldUserLine /> Alterar Conta </C.MenuItemUser>
          <C.MenuItemUser onClick={logOut}>  <HiOutlineArrowRightOnRectangle /> Sair </C.MenuItemUser>
          <div className="separator"></div>
          <C.MenuItemUser>  <HiOutlineCog6Tooth /> Configurações </C.MenuItemUser>
          <div className="separator"></div>
          <C.MenuItemUser  onClick={() =>  window.open('https://www.linkedin.com/in/kleuton-novais/')} >  <RiQuestionLine /> Ajuda</C.MenuItemUser>
          <C.MenuItemUser onClick={() => window.open('https://www.linkedin.com/in/kleuton-novais/')} >  <RiFeedbackLine /> Enviar feedback </C.MenuItemUser>
        </C.MenuUser>
      )}
    </div>
  );
}

export default MenuUser;