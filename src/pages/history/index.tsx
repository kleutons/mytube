import { Container } from "./style";
import { RiHistoryLine } from 'react-icons/ri';

function History(){
    return(
        <Container>
            <RiHistoryLine className="svgTitle" />
             <h2>Controle o que você assiste</h2>
             O histórico de exibição dos seus videos assistidos
        </Container>
        )
}

export default History;