import { useFetchListVideos } from "../../hooks/useFetch";
import { Container } from "../home/style";
import { VideoComponent } from "../../components/videoComponent";
import { formatViewCount, getPublishedTime } from "../../utils/formatVideo";
import { TypeVideoWithChannel } from "../../types/videos";
import { useNavigate } from "react-router-dom";


export function TestePage(){
  const navigate =  useNavigate();

  const { data, isFetching } =
   useFetchListVideos<TypeVideoWithChannel[]>();
    
    return(
      <>
        <Container>
            {isFetching && <p>Carregando...</p> }
            {data?.map((item) => (
                <VideoComponent 
                title={item.video.snippet.title} 
                thumbnail={item.video.snippet.thumbnails.maxres?.url || item.video.snippet.thumbnails.high?.url} 
                channelImage={item.channel.snippet.thumbnails.default?.url || 'img/default.jpg' } 
                channelName={item.video.snippet.channelTitle}
                details={`${formatViewCount(Number(item.video.statistics.viewCount))} - ${getPublishedTime(item.video.snippet.publishedAt)}`} 
                key={item.video.id}
                onclick={() => navigate('./watch?v=' +item.video.id)}
                />
            ))}
        </Container>
      </>
        )

}