import { BtnIcon, BtnText, ButtonLog } from "./style";


interface IProps{
    myRef?: React.RefObject<HTMLDivElement>;
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
        <BtnIcon ref={props.myRef} onClick={props.onClick} color={props.color} margin={props.margin} {...(hoverProp && { hover: 'true' })} >
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


interface IPropsBtLogin {
    Text: string;
    Type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }

function ButtonLogin({ Text, onClick, Type = "button" }: IPropsBtLogin) {
    return (
      <ButtonLog type={Type} onClick={onClick}>
        {Text}
      </ButtonLog>
    );
  }

export { ButtonIcon, ButtonText, ButtonLogin };
