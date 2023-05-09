import { 
    Container,
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton
} from "./style";
import { useEffect, useState} from "react";

import { 
    HiBars3,
    HiArrowSmallLeft,
    HiMagnifyingGlass,
    HiOutlineUserCircle,
    HiMicrophone } from "react-icons/hi2";
import Logo from '../../assets/ytLogo.png';
import ButtonIcon from "../button";


interface IProps{
    screenWidth: string;
    setScreenWidth: (setScW:string) => void;
    openMenu: boolean,
    setOpenMenu: ($setOpenMenu:boolean) => void;
}

function Header({ screenWidth, setScreenWidth, openMenu, setOpenMenu}: IProps){  

    //Context open
    const [ openBuscar, setOpenBuscar ] = useState(false);
    
    //Function click openSearch 
    function openSearch(){        
        setOpenBuscar(!openBuscar);
    }

    useEffect(() => {
        if( screenWidth !== 'mobile'){
            setOpenBuscar(false);
        }
     }, [screenWidth]);

    
    


    // Function Show Menu SideBar
    const showMenu = () => {setOpenMenu(!openMenu)};
    
    return( 
        <Container>
            <LogoContainer>
                <ButtonIcon onClick={showMenu} svgIcon={<HiBars3/>} margin="0 20px;"/>
                <img style={{cursor: 'pointer', width: '100px', objectFit: 'contain'}} src={Logo} alt='' />
            </LogoContainer>

            <SearchContainer openSearchMoblie={openBuscar}>
                { openBuscar  ? 
                                <ButtonIcon onClick={() => openSearch()} svgIcon={<HiArrowSmallLeft />}  margin='0 3px' />  : null
                            } 
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon svgIcon={<HiMagnifyingGlass />} hover={false} />
                </SearchButton>
                <ButtonIcon svgIcon={<HiMicrophone />} margin="0 5px" />
            </SearchContainer>

            <HeaderButton>
                <>
                    { screenWidth === 'mobile' ? 
                        <ButtonIcon onClick={() => openSearch()} svgIcon={<HiMagnifyingGlass />} />
                          : null
                    }  
                    <div className="btnLogin" >
                    <HiOutlineUserCircle />
                    Fazer Login</div>
                </> 
            </HeaderButton>
            
            
        </Container>
    )

}


export default Header;