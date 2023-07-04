import * as C from './style';
import { NotFound } from '../../components/Icons/notFound';
import { useFetchSearch } from '../../hooks/useFetch';
import { TypeVideoWithChannel  } from '../../types/videos';
import { useLocation, useNavigate } from 'react-router-dom';
import { VideoComponentSearch } from '../../components/videoComponent';

export default function Results(){
    const location = useLocation();
    const navigate =  useNavigate();
    
    const search = new URLSearchParams(location.search).get('search_query');

    const { data, isFetching, error } =
    useFetchSearch<TypeVideoWithChannel[]>(search);

    if(error){
      console.log(error);
    }

    return(
        <C.Container >
            {(!search || !data) && 
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
                {isFetching && <p>Carregando...</p> }
                {data?.map((item) => (
                        <VideoComponentSearch 
                        key={item.video.id}
                        title={item.video.snippet.title} 
                        thumbnail={item.video.snippet.thumbnails.maxres?.url || item.video.snippet.thumbnails.high?.url} 
                        channelImage={item.channel.snippet.thumbnails.default?.url || 'img/lgChannel.jpg' } 
                        channelName={item.video.snippet.channelTitle}
                        onclick={() => navigate('./watch?v=' +item.video.id)}
                        />
                    )
                )}
            </div>

        </C.Container>
    )
}