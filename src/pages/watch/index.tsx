import * as C from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { VideoSideBar } from '../../components/videoComponent';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoArrowRedoOutline } from "react-icons/io5";
import { formatViewCount, getPublishedTime } from '../../utils/formatVideo';
import { TypeVideoWithChannel, TypeVideos } from '../../types/videos';
import { useCategoryContext } from '../../contexts/searchCategories';
import { useFetchVideo } from '../../hooks/useFetch';


function Watch(){
    const location = useLocation();
    const navigate =  useNavigate();

    
    const [getIdVideo, setGetIdVideo ] = useState(new URLSearchParams(location.search).get('v'));
    const [videoDate, setVideoDate] = useState<TypeVideos[]>([]);
    // const [videosRelated, setVideosRelated] = useState<Videos[]>([]);

    // Construindo a URL completa do vídeo do YouTube
    const videoUrl = `https://www.youtube.com/embed/${getIdVideo}`;

    const API_KEY = 'AIzaSyBuLjyrS1VkFDQ6v4ycRkDG9uLNwPAee2A'
    
    const urlVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&id=${getIdVideo}&key=${API_KEY}`;
    // const urlRelated = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&regionCode=br&relatedToVideoId=${getIdVideo}&type=video&key=${API_KEY}`;

    
    function navIdVideo(id:string){
      setGetIdVideo(id);
    }

    useEffect(() => {
      // loadRelated();
      

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getIdVideo])
    
    // async function loadRelated() {
    //   try {
    //       const resposta = await axios.get(urlRelated)
    //       setVideosRelated(resposta.data.items)
    //   }catch(erro){
    //       console.log(erro)
    //   }
    //   }

      
    const { data, isFetching, error } =
    useFetchVideo<TypeVideoWithChannel[]>(getIdVideo);
    // console.log('aqui >>>');
    // console.log(data);
    
    if(error){
      console.log(error);
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
          {/* <C.ContainerSideBar>
            {videosRelated.map((video) => (
                <VideoSideBar
                title={video.snippet.title} 
                thumbnail={video.snippet.thumbnails.medium?.url} 
                channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()} 
                channelName={video.snippet.channelTitle}
                key={video.id.videoId}
                onclick={() => { navigate('../mytube/watch?v=' +video.id.videoId); navIdVideo(video.id.videoId) } }
                />
            ))}
            
          </C.ContainerSideBar> */}
        </C.Container>
      </>
        )
}

export default Watch;