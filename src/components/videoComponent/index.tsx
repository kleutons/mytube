import { 
    ChannelImage,
    Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer
} from "./style";

interface Props{
    title: string,
    thumbnail: string,
    channelImage: string,
    colorchannelImage?: string
    channelName: string,
    details: string,
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
        <Container>
            <ImageBanner alt="thumbnail" src={props.thumbnail} />
            <TitleContainer >
                <ChannelImage color={randomBackground()} >
                    {props.channelImage}
                </ChannelImage>1
                <TextContainer>
                    <Title>{limitarTexto(props.title, 50)}</Title>
                    <TextCard>{props.channelName}</TextCard>
                    <TextCard>{props.details}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;