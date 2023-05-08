import { Container } from "./style";
import { RiMenuLine } from 'react-icons/ri'
import Logo from '../../assets/ytLogo.png';


interface IProps{
    screenWidth: string;
    setScreenWidth: (setScW:string) => void;
    openMenu: boolean,
    setOpenMenu: ($setOpenMenu:boolean) => void;
}

function Header({ screenWidth, setScreenWidth, openMenu, setOpenMenu}: IProps){  

    // Function Show Menu SideBar
    const showMenu = () => {setOpenMenu(!openMenu)};
    
    return( 
        <Container>
            <RiMenuLine onClick={showMenu} />
            <img style={{cursor: 'pointer', width: '100px', objectFit: 'contain'}} src={Logo} alt='' />
        </Container>
    )

}


export default Header;