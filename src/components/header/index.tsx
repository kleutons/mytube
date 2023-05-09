import { 
    Container,
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton
} from "./style";
import { useEffect, useState, useRef } from "react";

import { 
    HiBars3,
    HiArrowSmallLeft,
    HiMagnifyingGlass,
    HiOutlineUserCircle,
    HiMicrophone,
    HiXMark } from "react-icons/hi2";
import Logo from '../../assets/ytLogo.png';
import { ButtonIcon, ButtonText } from "../button";


interface IProps{
    screenWidth: string;
    setScreenWidth: (setScW:string) => void;
    openMenu: boolean,
    setOpenMenu: ($setOpenMenu:boolean) => void;
}

function Header({ screenWidth, setScreenWidth, openMenu, setOpenMenu}: IProps){  

    //Context open
    const [ openBuscar, setOpenBuscar ] = useState(false);
    
    //Context clear imput
    const [showBtnClear, setShowBtnClear] = useState(false);
    const inputBuscarRef = useRef<HTMLInputElement>(null);
    
    //Function Reset/ Clear Input
    function clearImput(){        
        setShowBtnClear(false);
        if (inputBuscarRef.current) {
            inputBuscarRef.current.value = '';
          }
    }

     //Function click openSearch 
     function openSearch(){        
        setOpenBuscar(!openBuscar);
    }

    // Function Show Menu SideBar
    const showMenu = () => {setOpenMenu(!openMenu)};


    useEffect(() => {
        if( screenWidth !== 'mobile'){
            setOpenBuscar(false);
        }
     }, [screenWidth]);

    
    
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
                    <SearchInput onChange={(event) => { setShowBtnClear(event.target.value !== ''); } } placeholder="Pesquisar" ref={inputBuscarRef} />
                    { showBtnClear ? 
                        <ButtonIcon onClick={clearImput} svgIcon={<HiXMark />} margin="0 -10px" /> : null 
                    }
                    
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
                    <ButtonText svgIcon={<HiOutlineUserCircle />} text={ screenWidth === 'mobile'? 'Login' : 'Fazer Login'} />
                </> 
            </HeaderButton>
            
            
        </Container>
    )

}


export default Header;