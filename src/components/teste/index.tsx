import { Container } from "./style";

interface IProps{
    $openMenu?: boolean;
    screenWidth?: string;
}


function Teste( { $openMenu, screenWidth}: IProps){

    console.log($openMenu);
    return (
        <Container $openMenu={$openMenu}>
            teste
        </Container>
    )
}

export default Teste;