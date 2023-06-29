
import { VideoComponent } from "../../components/videoComponent";
import CategoryBar from "../../components/categoryBar/categoryBar";
import { Container } from "./style";
import { useNavigate } from 'react-router-dom';
import { formatViewCount, getPublishedTime } from '../../utils/formatVideo';
import { TypeVideos } from '../../types/videos';
import { useFetchVideoCategory } from '../../hooks/useFetch';


function Home(){
  const navigate =  useNavigate();

  const { data, isFetching } =
   useFetchVideoCategory<TypeVideos[]>();
    
    return(
      <>
        <CategoryBar />
        <Container>
            {isFetching && <p>Carregando...</p> }
            {data?.map((video) => (
                <VideoComponent 
                title={video.snippet.title} 
                thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url} 
                channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()} 
                channelName={video.snippet.channelTitle}
                details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`} 
                key={video.id}
                onclick={() => navigate('./watch?v=' +video.id)}
                />
            ))}
        </Container>
      </>
        )
}

export default Home;