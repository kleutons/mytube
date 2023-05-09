import { BtnIcon, BtnText } from "./style";


interface IProps{
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    svgIcon: React.ReactNode,
    text?: string,
    color?: string,
    margin?: string,
    hover?: boolean 
}

function ButtonIcon( { onClick, svgIcon, color, margin, hover=true }: IProps){
    return(
        <BtnIcon onClick={onClick} color={color} margin={margin} hover={hover}>
            {svgIcon ? svgIcon : null}
        </BtnIcon>
    )
}

function ButtonText( { onClick, svgIcon, text, color, margin }: IProps ){
    return(
        <BtnText onClick={onClick} color={color} margin={margin} >
            {svgIcon ? svgIcon : null}
            {text ? text : null}
        </BtnText>
    )
}

export { ButtonIcon, ButtonText };
