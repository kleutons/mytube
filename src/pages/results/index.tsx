import * as C from './style';
import { NotFound } from '../../components/Icons/notFound';
import { useFetchSearch } from '../../hooks/useFetch';
import { TypeVideoSearch  } from '../../types/videos';
import { useLocation, useNavigate } from 'react-router-dom';
import { VideoComponentSearch } from '../../components/videoComponent';
import { useEffect, useState } from 'react';

export default function Results(){
    const location = useLocation();
    const navigate =  useNavigate();
    
    const [search, setSearch ] = useState<string | null>(new URLSearchParams(location.search).get('search_query'));


    useEffect( () => {
        // Verifica se há alterações no parâmetro de busca na URL
        const newSearchQuery = new URLSearchParams(location.search).get('search_query');

        if(newSearchQuery !== search){
            setSearch(newSearchQuery);
        }

    }, [location.search, search]) 

    
    const { data, isFetching, error } =
    useFetchSearch<TypeVideoSearch[]>(search);  
    if(error){
        console.log(error);
      }
    

    return(
        <C.Container >
            {!search && 
                <>
                    <NotFound />
                    <h2>
                        Nenhum resultado encontrado
                    </h2>
                    <p>
                        Use palavras-chave diferentes para fazer a busca.
                    </p>
                    {search}
                </>
            } 
            
            <div>
                {(isFetching  || !data) && <p>Carregando...</p> }
                {data?.map((item) => (
                        <VideoComponentSearch   
                        key={item.video.id.videoId}
                        title={item.video.snippet.title} 
                        thumbnail={item.video.snippet.thumbnails.maxres?.url || item.video.snippet.thumbnails.high?.url} 
                        channelImage={item.channel.snippet.thumbnails.default?.url || 'img/lgChannel.jpg' } 
                        channelName={item.video.snippet.channelTitle}
                        description={item.video.snippet.description}
                        onclick={() => navigate('/mytube/watch?v=' +item.video.id.videoId)}
                        />
                        )
                    )}
            </div>
        </C.Container>
    )
}