
import React from "react";
import { Container, ContentMenu, MenuItem, Separator } from "./style";
import {
    RiHome4Line,
    RiVideoChatLine,
    RiHistoryLine,
    RiSettings5Line,
    RiFlagLine,
    RiQuestionLine
} from 'react-icons/ri'

import { BsCollectionPlay, BsFileEarmarkPlay } from 'react-icons/bs'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../button";
import { HiOutlineUserCircle } from "react-icons/hi2";
import useAuth from "../../hooks/useAuth";

interface IProps{
    $openMenu: boolean;
    setOpenMenu: (value: boolean) => void;
    $screenWidth: string;
}



function MenuSideBar( {$openMenu, setOpenMenu, $screenWidth}: IProps){
    const { logged } = useAuth();
    
    const navigate = useNavigate();

    const [menuItems] = useState([
        { id: 1, name: 'Home',         icon: <RiHome4Line />,        link: '/mytube' },
        { id: 2, name: 'Shorts',       icon: <BsFileEarmarkPlay />,  link: '/mytube/shorts' },
        { id: 3, name: 'Inscrições',   icon: <BsCollectionPlay />,   link: '/mytube/subscriptions' },
        { id: 5, name: 'Separator',    icon: '',                   link: '' },
        { id: 4, name: 'Biblioteca',   icon: <RiVideoChatLine />,    link: '/mytube/library' },
        { id: 6, name: 'Historico',    icon: <RiHistoryLine />,      link: '/mytube/history' },        
        { id: 7, name: 'Separator',    icon: '',                   link: '' },
        { id: 8, name: 'Login',        icon: '',                   link: '' },
        { id: 9, name: 'Configurações',icon: <RiSettings5Line />,    link: '/mytube/login' },
        { id: 10, name: 'Denúncia',     icon: <RiFlagLine />,         link: '/mytube/reporthistory' },
        { id: 11, name: 'Ajuda',        icon: <RiQuestionLine />,     link: 'https://www.linkedin.com/in/kleuton-novais/' },
        { id: 12, name: 'Separator',    icon: '',                   link: '' },              
    ]);

    const openLink = (url:string) => {
        const indice = url.indexOf("http");
        if (indice !== -1) {
            window.open(url, '_blank');
          } else {
            navigate(url);
          }

      };

    return( 
        <Container $openMenu={$openMenu} $screenWidth={$screenWidth}>
            <ContentMenu>
                {menuItems.map((item) =>
                    item.name === 'Separator' ? (
                    <Separator key={item.id} />
                    ) : item.name === 'Login' ? (


                        logged ? (
                            null
                          ) : (
                            <>
                            <React.Fragment key={item.id}>
                            <span key="login-info">Faça login para curtir vídeos, comentar e se inscrever.</span>
                            <ButtonText key="login-button" onClick={() => navigate('/mytube/login')} svgIcon={<HiOutlineUserCircle />} text='Fazer Login' margin="7px 20px" />
                            <Separator key="login-separator" />
                            </React.Fragment>
                            </>
                          )
                        
                        
                    ): (
                    <MenuItem key={item.id} onClick={() => { openLink(item.link); if($screenWidth !== 'desktop'){setOpenMenu(false)} }}>
                        {item.icon}
                        {item.name}
                    </MenuItem>
                    )
                )}

                <div className="sobre">
                Sobre:<br />
                Este site não está associado ao YouTube, foi  criado para o aprimoramento de habilidades de programação web.<br />
                Tecnologias usadas: Html, Css, JavaScript, React, TypeScript e NodeJs.<br />
                <br />
                Contato <br />
                2023 - <a href="https://www.linkedin.com/in/kleuton-novais/" target="_blank"> Dev: Kleuton Novais</a>
                </div>
            </ContentMenu>
        </Container>
    )

}


export default MenuSideBar;