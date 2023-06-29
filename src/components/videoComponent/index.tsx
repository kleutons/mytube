import * as C from "./style";

interface Props{
    title: string,
    thumbnail: string,
    channelImage: string,
    colorchannelImage?: string
    channelName: string,
    details?: string,
    onclick?: () => void;
}

function limitarTexto(texto:string, limite:number) {
    if (texto.length > limite) {
      texto = texto.substring(0, limite) + "...";
    }
    return texto;
}
      // Array de cores ou imagens
      const backgroundsChannelImage = [
        '#c58383',
        '#6a6ab4',
        '#8d8df4',
        '#6ab4b2',
        '#6a9db4',
        '#6ab46a',
        '#6ab47b',
        '#a5a591',
        '#afb46a',
        '#acb46a',
        '#ffd382',
        '#b4936a',
        '#b687b6',
        '#a76ab4',
        '#b46a8b',
        '#9e9e9e',
      ];
      
      // Selecionar um elemento aleatório do array
      const randomBackground = () => backgroundsChannelImage[Math.floor(Math.random() * backgroundsChannelImage.length)];

function VideoComponent(props: Props){
    return(
        <C.Container onClick={props.onclick}>
            <C.ImageBanner alt="thumbnail" src={props.thumbnail} />
            <C.TitleContainer >
                <C.ChannelImage color={randomBackground()} >
                    {props.channelImage}
                </C.ChannelImage>
                <C.TextContainer>
                    <C.Title>{limitarTexto(props.title, 50)}</C.Title>
                    <C.TextCard>{props.channelName}</C.TextCard>
                    <C.TextCard>{props.details}</C.TextCard>
                </C.TextContainer>
            </C.TitleContainer>
        </C.Container>
    )
}


function VideoSideBar(props: Props){
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


export { VideoComponent, VideoSideBar } ;