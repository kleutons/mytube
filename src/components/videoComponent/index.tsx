import { 
    ChannelImage,
    Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer
} from "./style";

function VideoComponent(){
    return(
        <Container>
            <ImageBanner src='https://i.ytimg.com/vi/XYPgPW0Ohu4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3xirgwOqZQVz2nbTAyYgKVOp0jg' />
            <TitleContainer >
                <ChannelImage>
                    MG
                </ChannelImage>
                <TextContainer>
                    <Title>Louvores e Adoração ✔ Melhores Músicas ...</Title>
                    <TextCard>MMG - GOSPEL</TextCard>
                    <TextCard>250 mil visualizações - há 2 meses</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;