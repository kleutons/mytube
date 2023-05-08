import styled from "styled-components";

// --headerHeight: 55px;
// --menuClose: 72px;
// --menuOpen: 240px;

export const Container = styled.div<{$openMenu?:boolean, $screenWidth:string}>`
    --contentMenuMargin: ${({$openMenu}) => $openMenu ? '15px' : '3px'};
    --mItemDirection: ${({$openMenu}) => $openMenu ? 'row' : 'column'};
    --mItemPadding: ${({$openMenu}) => $openMenu ? '10px' : '13px 3px'};
    --mItemSvgMargin: ${({$openMenu}) => $openMenu ? '0 20px 0 0' : '2px'};
    font-size: ${({$openMenu}) => $openMenu ? '15px' : '11px'};
    
    position: fixed;
    background-color: #fff;
    top: var(--headerHeight);
    left: 0;
    height: calc(100vh - var(--headerHeight));
    width: ${({$openMenu}) => $openMenu ? 'var(--menuOpen)' : 'var(--menuClose)' };
    z-index: 999;
    transition: all .2s;
    overflow: hidden;
    display:  ${({$screenWidth, $openMenu}) => $screenWidth === 'mobile' && !$openMenu ? 'none' : '' };

    div:nth-child(n+5) {
        display: ${({$openMenu}) => !$openMenu ? 'none' : '' };
    }

    :hover{
        overflow-y: auto;
    }
`;

export const ContentMenu = styled.div`
    margin: var(--contentMenuMargin);
    margin-top: 0;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    color: #4d4d4d;
    cursor: pointer;
    border-radius: 10px;
    margin: 5px 0;
    padding: var(--mItemPadding);
    flex-direction: var(--mItemDirection);

    > svg{
        margin: var(--mItemSvgMargin);        
        width: 22px;
        height: 22px;
    }

    &:hover{
        background-color: #f2f2f2;
    }
`;

export const Separator = styled.div`
    height: 1px;
    background-color: #e5e5e5;
    margin: 15px 0;
`;