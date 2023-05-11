import { Container } from "./style";
import { BsCollectionPlay } from 'react-icons/bs'
import {HiOutlineUserCircle } from "react-icons/hi2";
import { ButtonText } from '../../components/button';
import { useNavigate } from "react-router-dom";

function Subscriptions(){

    const navigate = useNavigate();

    return(
        <Container>
            <BsCollectionPlay className="svgTitle" />
             <h2>Não perca os novos vídeos</h2>
             Faça login para ver as atualizações dos seus canais favoritos do YouTube
             
             <ButtonText onClick={() => navigate('/mytube/login')} svgIcon={<HiOutlineUserCircle />} text='Fazer Login' margin="15px 0" />
        </Container>
        )
}

export default Subscriptions;