import { useState, useEffect } from 'react';
import { VideoComponent } from "../../components/videoComponent";
import CategoryBar from "../../components/categoryBar/categoryBar";
import { Container, ContainerShorts } from "./style";
import { useCategoryContext } from "../../contexts/searchCategories";

import axios from 'axios'
import moment from "moment";
import { useNavigate } from 'react-router-dom';


function Home(){

  const navigate =  useNavigate();

    interface Videos {
        id: string;
        snippet: {
          title: string;
          thumbnails: {
            high: {
              url: string
            }
            maxres: {
              url: string;
            }
          }
          channelTitle: string;
          publishedAt: string;
        },
        statistics: {
          viewCount: string;
        }
    }
    const [videos, setVideos] = useState<Videos[]>([]);
    const [shorts, setShorts] = useState<Videos[]>([]);
    const categoryId = useCategoryContext().categoryId;

    useEffect(() => {
        load();
        loadShorts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [categoryId])
    
    
    const API_KEY = 'AIzaSyBuLjyrS1VkFDQ6v4ycRkDG9uLNwPAee2A'  
    // const API_KEY = 'AIzaSyDLJCiB55monK9yAkvBEvcX4CjUMVNKRcg'

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`;
    const urlShorts = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&type=video&videoDuration=short&key=${API_KEY}`;
    

    async function load() {
    try {
        const resposta = await axios.get(url)
        setVideos(resposta.data.items)
    }catch(erro){
        console.log(erro)
    }
    }

    async function loadShorts() {
      try {
          const resposta = await axios.get(urlShorts)
          setShorts(resposta.data.items)
      }catch(erro){
          console.log(erro)
      }
      }


    function formatViewCount(viewCount: number): string {
        if (viewCount >= 1000000) {
          return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
        } else if (viewCount >= 1000) {
          return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
        } else {
          return `${viewCount} visualizações`;
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
    
    // const primeiraArray = videos.slice(0, 6);
    // const segundaArray  = videos.slice(6);

    return(
      <>
        <CategoryBar />
        <Container>
            {videos.map((video) => (
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
        {/* <ContainerShorts>
          <div className='title'> 
          <svg width='40px' height='40px' viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g width="24" height="24" viewBox="0 0 24 24" ><g ><path d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z" fill="red" ></path><polygon points="10 14.65 15 12 10 9.35 10 14.65" fill="#fff" ></polygon></g></g></svg> Shorts
          </div>  
 
        </ContainerShorts>
        <Container>
            {segundaArray.map((video) => (
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
        </Container> */}
      </>
        )
}

export default Home;