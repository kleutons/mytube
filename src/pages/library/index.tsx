import { Container } from "./style";
import { RiVideoChatLine } from 'react-icons/ri';
import {HiOutlineUserCircle } from "react-icons/hi2";
import { ButtonText } from '../../components/button';
import { useNavigate } from "react-router-dom";

function Library(){

    const navigate = useNavigate();

    return(
        <Container>
             <RiVideoChatLine className="svgTitle" />
             <h2>Tenha acesso aos seus vídeos.</h2>
             Faça login para acessar os vídeos salvos
             
             <ButtonText onClick={() => navigate('/mytube/login')} svgIcon={<HiOutlineUserCircle />} text='Fazer Login' margin="15px 0" />
        </Container>
        )
}

export default Library;