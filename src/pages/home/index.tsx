
import { VideoComponent } from "../../components/videoComponent";
import CategoryBar from "../../components/categoryBar/categoryBar";
import { Container } from "./style";
import { useNavigate } from 'react-router-dom';
import { formatViewCount, getPublishedTime } from '../../utils/formatVideo';
import { TypeVideoWithChannel } from '../../types/videos';
import { useFetchListVideos } from '../../hooks/useFetch';


function Home(){
  const navigate =  useNavigate();

  const { data, isFetching } =
  useFetchListVideos<TypeVideoWithChannel[]>();
    
    return(
      <>
        <CategoryBar />
        <Container>
            {isFetching && <p>Carregando...</p> }
            {data?.map((item) => (
                <VideoComponent 
                title={item.video.snippet.title} 
                thumbnail={item.video.snippet.thumbnails.maxres?.url || item.video.snippet.thumbnails.high?.url} 
                channelImage={item.channel.snippet.thumbnails.default?.url || 'img/lgChannel.jpg' } 
                channelName={item.video.snippet.channelTitle}
                details={`${formatViewCount(Number(item.video.statistics.viewCount))} visualizações - ${getPublishedTime(item.video.snippet.publishedAt)}`} 
                key={item.video.id}
                onclick={() => navigate('./watch?v=' +item.video.id)}
                />
            ))}
        </Container>
      </>
        )
}

export default Home;