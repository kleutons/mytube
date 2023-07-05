import * as C from "./style";

interface Props{
    title: string,
    thumbnail: string,
    channelImage: string,
    colorchannelImage?: string
    channelName: string,
    description?:string,
    details?: string,
    onclick?: () => void;
}

function limitarTexto(texto:string, limite:number) {
    if (texto.length > limite) {
      texto = texto.substring(0, limite) + "...";
    }
    return texto;
}

export function VideoComponent(props: Props){
    return(
        <C.Container onClick={props.onclick}>
            <C.ImageBanner alt="thumbnail" src={props.thumbnail} />
            <C.TitleContainer >
                <C.ChannelImage alt={`${props.channelName} image`} src={props.channelImage} />
                <C.TextContainer>
                    <C.Title>{limitarTexto(props.title, 50)}</C.Title>
                    <C.TextCard>{props.channelName}</C.TextCard>
                    <C.TextCard>{props.details}</C.TextCard>
                </C.TextContainer>
            </C.TitleContainer>
        </C.Container>
    )
}


export function VideoSideBar(props: Props){
    return(
        <C.ContainerSideBar onClick={props.onclick}>
        <C.ImageBannerSideBar alt="thumbnail" src={props.thumbnail} />
        <C.TitleContainer >
            <C.TextContainer>
                <C.Title>{limitarTexto(props.title, 50)}</C.Title>
                <C.TextCard>{props.channelName}</C.TextCard>
                <C.TextCard>{props.details}</C.TextCard>
            </C.TextContainer>
        </C.TitleContainer>
    </C.ContainerSideBar>
    )
}


export function VideoComponentSearch(props: Props){
    return(
        <C.ContainerSearch onClick={props.onclick}>
            <div className="img">
                <img alt="thumbnail" src={props.thumbnail} />
            </div>
            <div className="title">
                <h2>
                    {props.title}
                </h2>
                <div className="channel">
                    <C.ChannelImage alt={`${props.channelName} image`} src={props.channelImage} />
                    <C.TextCard>{props.channelName}</C.TextCard> 
                </div>
                <p>{props.description}</p> 
            </div>
        </C.ContainerSearch>
    )
}