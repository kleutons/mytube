import styled from "styled-components";
// --headerHeight: 55px;
// --menuClose: 72px;
// --menuOpen: 240px;

export const Container = styled.main<{$openMenu:boolean, $screenWidth:string}>`
    display: flex;
    margin-top: var(--headerHeight);
    width: ${({$screenWidth}) => $screenWidth === 'mobile'  ? '100%' : ({$screenWidth}) => $screenWidth  === 'tablet' ? 'calc(100% - var(--menuClose))' : ({$openMenu}) => $openMenu ? 'calc(100% - var(--menuOpen))' : 'calc(100% - var(--menuClose))'  };
    margin-left: ${({$screenWidth}) => $screenWidth === 'mobile'  ? '0' : ({$openMenu}) => $openMenu ? 'var(--menuOpen)' : 'var(--menuClose)'  };
    margin-left: ${({$screenWidth}) => $screenWidth === 'tablet'  ? 'var(--menuClose)' : '' };
    transition: all .3s;
`;

export const ScrimMenu = styled.div`
    transition-duration: .3s;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: var(--menuOpen);
    width: 100vw;
    height: 100vh;
    z-index: 990;
`;

export const SectionMain = styled.section`
    width: 100%;
    padding: 50px 70px;
    padding-top: 5px;
    background-color: #f4f4f4;
`;
