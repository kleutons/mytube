import * as C from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';
import moment from "moment";
import { VideoSideBar } from '../../components/videoComponent';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoArrowRedoOutline } from "react-icons/io5";


function Watch(){
    const location = useLocation();
    const navigate =  useNavigate();

    interface Videos {
      id: {
        videoId:string;
      }
      snippet: {
        title: string;
        description:string;
        thumbnails: {
          medium:{
            url: string
          }
          high: {
            url: string
          }
          maxres: {
            url: string;
          }
        }
        channelTitle: string;
        publishedAt: string;
      }
      statistics: {
        viewCount: string;
        likeCount: number;
        commentCount: number;
      }
    }
    
    const [getIdVideo, setGetIdVideo ] = useState(new URLSearchParams(location.search).get('v'));
    const [videoDate, setVideoDate] = useState<Videos[]>([]);
    const [videosRelated, setVideosRelated] = useState<Videos[]>([]);

     // Construindo a URL completa do vídeo do YouTube
    const videoUrl = `https://www.youtube.com/embed/${getIdVideo}`;

    const API_KEY = 'AIzaSyBuLjyrS1VkFDQ6v4ycRkDG9uLNwPAee2A'  
    const urlVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&id=${getIdVideo}&key=${API_KEY}`;
    const urlRelated = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&regionCode=br&relatedToVideoId=${getIdVideo}&type=video&key=${API_KEY}`;

    function navIdVideo(id:string){
      setGetIdVideo(id);
    }

    useEffect(() => {
      loadRelated();
      loadVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getIdVideo])
    
    async function loadRelated() {
      try {
          const resposta = await axios.get(urlRelated)
          setVideosRelated(resposta.data.items)
      }catch(erro){
          console.log(erro)
      }
      }

      
    async function loadVideo() {
    try {
        const resposta = await axios.get(urlVideo)
        setVideoDate(resposta.data.items)
    }catch(erro){
        console.log(erro)
    }
    }




    function formatViewCount(viewCount: number): string {
      if (viewCount >= 1000000) {
        return `${(viewCount / 1000000).toFixed(0)} mi`;
      } else if (viewCount >= 1000) {
        return `${(viewCount / 1000).toFixed(0)} mil`;
      } else {
        return `${viewCount}`;
      }
    }
  
    function getPublishedTime(publishedAt: string) {
      const now = moment();
      const publishedTime = moment(publishedAt);
      const diffDays = now.diff(publishedTime, 'days');
  
      if (diffDays <= 0) {
        return 'hoje';
      } else if (diffDays === 1) {
        return 'há 1 dia';
      } else if (diffDays <= 7) {
        return `há ${diffDays} dias`;
      } else if (diffDays <= 30) {
        const diffWeeks = Math.floor(diffDays / 7);
        if (diffWeeks === 1) {
          return 'há 1 semana';
        } else {
          return `há ${diffWeeks} semanas`;
        }
      } else if (diffDays <= 365) {
        const diffMonths = Math.floor(diffDays / 30);
        if (diffMonths === 1) {
          return 'há 1 mês';
        } else {
          return `há ${diffMonths} meses`;
        }
      } else {
        const diffYears = Math.floor(diffDays / 365);
        if (diffYears === 1) {
          return 'há 1 ano';
        } else {
          return `há ${diffYears} anos`;
        }
      }
    }

    return(
      <>
        <C.Container>
          <C.ContainerVideo>
                <div id='containerIframe'>
                  
                  <iframe
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder='0'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                 
                </div>
                <div>
                  {videoDate.map((video) => (
                      <>
                        <C.ContainerTitle>
                          <div className='channel'>
                            <div className='channelIcon'>{video.snippet.channelTitle.charAt(0).toUpperCase()}</div>
                            <div className='channelName'>
                              <h3>{video.snippet.channelTitle}</h3>
                              <span> inscritos </span>
                            </div>
                            <div className='button'>Inscreve-se</div>
                          </div>

                          <C.ContainerBtns>
                            <div className='btnLike'>
                              <div> {<AiOutlineLike />} {formatViewCount(Number(video.statistics.likeCount))} </div>
                              <div> {<AiOutlineDislike />}  </div>
                            </div>
                            <div className='share'> {<IoArrowRedoOutline />} Compartilhar </div>   
                          </C.ContainerBtns>
                        
                        </C.ContainerTitle>
                        <C.ContainerDescription>
                          <div className='statistics'>  
                            <span> {formatViewCount(Number(video.statistics.viewCount))} visualizações </span> | 
                            <span> Enviado {getPublishedTime(video.snippet.publishedAt)}</span>
                          </div>
                          <br />
                          {video.snippet.description}
                        </C.ContainerDescription>
                        <div>
                        {video.statistics.commentCount} comentário(s)
                        </div>
                      </>
                    ))}
                </div>
          </C.ContainerVideo>
          <C.ContainerSideBar>
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
            
          </C.ContainerSideBar>
        </C.Container>
      </>
        )
}

export default Watch;