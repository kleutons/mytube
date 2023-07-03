import * as C from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState} from 'react';
import { VideoSideBar } from '../../components/videoComponent';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoArrowRedoOutline } from "react-icons/io5";
import { formatViewCount, getPublishedTime } from '../../utils/formatVideo';
import { TypeVideoWithChannel, TypeVideos } from '../../types/videos';
import { useFetchRelated, useFetchVideo } from '../../hooks/useFetch';


function Watch(){
    const location = useLocation();
    const navigate =  useNavigate();

    
    const [getIdVideo, setGetIdVideo ] = useState(new URLSearchParams(location.search).get('v'));

    // Construindo a URL completa do vídeo do YouTube
    const videoUrl = `https://www.youtube.com/embed/${getIdVideo}`;

    function navIdVideo(id:string){
      setGetIdVideo(id);
    }

   
      
    const { data, isFetching, error } =
    useFetchVideo<TypeVideoWithChannel[]>(getIdVideo);
    
    if(error){
      console.log(error);
    }

    const { data: dataRelated, isFetching: isFetchingRelated, error: errorRelated } =
    useFetchRelated<TypeVideos[]>(getIdVideo);

    if(errorRelated){
      console.log(errorRelated);
    }

  return(
      <>
        <C.Container>
          <C.ContainerVideo>
          {isFetching && <p>Carregando...</p> }
                <div id='containerIframe'>
                  
                  <iframe
                    key={`iframe {videoUrl}`}
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder='0'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                 
                </div>
                <div>
                  {data?.map((item) => (
                      <>
                        <C.ContainerTitle>
                          <div className='channel'>
                            <img className='channelIcon' src={item.channel.snippet.thumbnails.default.url} alt="tub Channel" />
                            
                            <div className='channelName'>
                              <h3>{item.video.snippet.channelTitle}</h3>
                              <span> inscritos </span>
                            </div>
                            <div className='button'>Inscreve-se</div>
                          </div>

                          <C.ContainerBtns>
                            <div className='btnLike'>
                              <div> {<AiOutlineLike />} {formatViewCount(Number(item.video.statistics.likeCount))} </div>
                              <div> {<AiOutlineDislike />}  </div>
                            </div>
                            <div className='share'> {<IoArrowRedoOutline />} Compartilhar </div>   
                          </C.ContainerBtns>
                        
                        </C.ContainerTitle>
                        <C.ContainerDescription>
                          <div className='statistics'>  
                            <span> {formatViewCount(Number(item.video.statistics.viewCount))} visualizações </span> | 
                            <span> Enviado {getPublishedTime(item.video.snippet.publishedAt)}</span>
                          </div>
                          <br />
                          {item.video.snippet.description}
                        </C.ContainerDescription>
                        <div>
                        {item.video.statistics.commentCount} comentário(s)
                        </div>
                      </>
                    ))}
                </div>
          </C.ContainerVideo>
          <C.ContainerSideBar>
          {isFetchingRelated && <p>Carregando...</p> }
            {dataRelated?.map((item) => (
                <VideoSideBar
                title={item.snippet.title} 
                thumbnail={item.snippet.thumbnails.medium?.url} 
                channelImage={item.snippet.channelTitle.charAt(0).toUpperCase()} 
                channelName={item.snippet.channelTitle}
                key={item.id}
                onclick={() => { navigate('../mytube/watch?v=' +item.id); navIdVideo(item.id) } }
                />
            ))}
            
          </C.ContainerSideBar>
        </C.Container>
      </>
        )
}

export default Watch;