import { BtnIcon, BtnText } from "./style";


interface IProps{
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    svgIcon: React.ReactNode,
    text?: string,
    color?: string,
    margin?: string,
    hover?: boolean
}

function ButtonIcon( props: IProps){

    const hoverProp = props.hover ? true : null;

    return(
        <BtnIcon onClick={props.onClick} color={props.color} margin={props.margin} {...(hoverProp && { hover: 'true' })} >
            {props.svgIcon ? props.svgIcon : null}
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
