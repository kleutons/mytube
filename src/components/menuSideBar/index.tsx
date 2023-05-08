
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

interface IProps{
    $openMenu: boolean;
    $screenWidth: string;
}



function MenuSideBar( {$openMenu, $screenWidth}: IProps){

    return( 
        <Container $openMenu={$openMenu} $screenWidth={$screenWidth}>
            <ContentMenu>
                <MenuItem> <RiHome4Line />          Home </MenuItem>
                <MenuItem> <BsFileEarmarkPlay />    Shorts </MenuItem>
                <MenuItem> <BsCollectionPlay />     Inscrições </MenuItem>
                <MenuItem> <RiVideoChatLine />      Biblioteca </MenuItem>
                <Separator />

                <MenuItem> <RiHistoryLine />        Historico </MenuItem>
                <MenuItem> <RiSettings5Line />      Configurações </MenuItem>
                <Separator />

                <MenuItem> <RiFlagLine />           Denúncia </MenuItem>
                <MenuItem> <RiQuestionLine />       Ajuda </MenuItem>
                <Separator />






                <MenuItem> <RiHome4Line />          Home </MenuItem>
                <MenuItem> <BsFileEarmarkPlay />    Shorts </MenuItem>
                <MenuItem> <BsCollectionPlay />     Inscrições </MenuItem>
                <MenuItem> <RiVideoChatLine />      Biblioteca </MenuItem>
                <Separator />

                <MenuItem> <RiHistoryLine />        Historico </MenuItem>
                <MenuItem> <RiSettings5Line />      Configurações </MenuItem>
                <Separator />

                <MenuItem> <RiFlagLine />           Denúncia </MenuItem>
                <MenuItem> <RiQuestionLine />       Ajuda </MenuItem>
                <Separator />

                <MenuItem> <RiHome4Line />          Home </MenuItem>
                <MenuItem> <BsFileEarmarkPlay />    Shorts </MenuItem>
                <MenuItem> <BsCollectionPlay />     Inscrições </MenuItem>
                <MenuItem> <RiVideoChatLine />      Biblioteca </MenuItem>
                <Separator />

                <MenuItem> <RiHistoryLine />        Historico </MenuItem>
                <MenuItem> <RiSettings5Line />      Configurações </MenuItem>
                <Separator />

                <MenuItem> <RiFlagLine />           Denúncia </MenuItem>
                <MenuItem> <RiQuestionLine />       Ajuda </MenuItem>
                <Separator />
               
            </ContentMenu>
        </Container>
    )

}


export default MenuSideBar;