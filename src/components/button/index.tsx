import { BtnIcon } from "./style";


interface IProps{
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    svgIcon: React.ReactNode,
    text?: string,
    margin?: string,
    hover?: boolean 
}

function ButtonIcon( { onClick, svgIcon, text, margin, hover=true }: IProps){
    return(
        <BtnIcon onClick={onClick} margin={margin} hover={hover}>
            {svgIcon ? svgIcon : null}
            {text ? text : null}
        </BtnIcon>
    )
}

export default ButtonIcon;
