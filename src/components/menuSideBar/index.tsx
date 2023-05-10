
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

interface IProps{
    $openMenu: boolean;
    $screenWidth: string;
}



function MenuSideBar( {$openMenu, $screenWidth}: IProps){

    const navigate = useNavigate();

    const [menuItems] = useState([
        { id: 1, name: 'Home',         icon: <RiHome4Line />,        link: '/' },
        { id: 2, name: 'Shorts',       icon: <BsFileEarmarkPlay />,  link: '/shorts' },
        { id: 3, name: 'Inscrições',   icon: <BsCollectionPlay />,   link: '/subscriptions' },
        { id: 4, name: 'Biblioteca',   icon: <RiVideoChatLine />,    link: '/library' },
        { id: 5, name: 'Separator',    icon: '',                   link: '' },
        { id: 6, name: 'Historico',    icon: <RiHistoryLine />,      link: '/history' },
        { id: 7, name: 'Configurações',icon: <RiSettings5Line />,    link: '/' },
        { id: 8, name: 'Separator',    icon: '',                   link: '' },
        { id: 9, name: 'Denúncia',     icon: <RiFlagLine />,         link: '/' },
        { id: 10, name: 'Ajuda',        icon: <RiQuestionLine />,     link: '/' },
        { id: 11, name: 'Separator',    icon: '',                   link: '' },              
    ]);

    return( 
        <Container $openMenu={$openMenu} $screenWidth={$screenWidth}>
            <ContentMenu>
                {menuItems.map((item) =>
                    item.name === 'Separator' ? (
                    <Separator key={item.id} />
                    ) : (
                    <MenuItem key={item.id} onClick={() => navigate(item.link)}>
                        {item.icon}
                        {item.name}
                    </MenuItem>
                    )
                )}
            </ContentMenu>
        </Container>
    )

}


export default MenuSideBar;