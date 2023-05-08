
import MenuSideBar from "../menuSideBar";
import { Container, ScrimMenu, SectionMain } from "./style";

interface IProps{
    openMenu: boolean;
    setOpenMenu: (setScW:boolean) => void,
    screenWidth: string
}


function Main( {openMenu, screenWidth, setOpenMenu}: IProps){    

    // console.log('screen ' + $screenWidth + ' - oMenu ' + $openMenu + ' >> ' + ($screenWidth !== 'desktop' && $openMenu) );
    
    //Disable Scroll Body
    if(openMenu && screenWidth !== 'desktop'){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto";
    }

    return( 
        <Container $openMenu={openMenu} $screenWidth={screenWidth}>
            <MenuSideBar $openMenu={openMenu} $screenWidth={screenWidth} />
            {screenWidth !== 'desktop' && openMenu ? <ScrimMenu onClick={() => setOpenMenu(false)} /> : null}
            <SectionMain>
                Conteudo Principal da Página
                <br />
                Scroll p/ Baixo...
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                Conteuto Final
                <br />
            </SectionMain>
        </Container>

    )

}


export default Main;