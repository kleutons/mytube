import { Container } from "./style";
import ImgLand from '../../assets/land-img.png';

function ReportHistory(){
    return(
        <Container>
            <img style={{height: '130px'}} src={ImgLand} alt='denuncia' />

             <h2>Agradecemos pela denúncia</h2>
             <p>
                Qualquer membro da comunidade do YouTube pode sinalizar conteúdo que pareça violar as diretrizes da comunidade. Quando um conteúdo é sinalizado, ele não é removido automaticamente. 
                <br /><br />
                Primeiro, analisamos com base nas seguintes diretrizes:
                <br />
                - Vídeos que violam nossas diretrizes da comunidade são removidos do YouTube.
                <br />
                    - Vídeos inadequados para o público mais jovem podem receber uma restrição de idade.
                <br />
                - Vídeos inadequados para o público mais jovem podem receber uma restrição de idade.
                <br />
                - Denúncias de vídeos removidos pelo criador de conteúdo não serão exibidas.
             </p>
             
            
            <span>
                Saiba mais sobre como denunciar conteúdo no YouTube.
            </span>
            
        </Container>
        )
}

export default ReportHistory;