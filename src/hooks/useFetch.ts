import { useEffect, useState } from "react";
import axios from 'axios';
import { useCategoryContext } from "../contexts/searchCategories";
import { TypeChannel, TypeVideoWithChannel, TypeVideos } from "../types/videos";


const API_KEY = process.env.REACT_APP_YT_API_KEY;

const api = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3'
})

export function useFetchListVideos<T = unknown>(){

    const categoryId = useCategoryContext().categoryId;

    const  [data, setData] = useState<T | null>(null);
    const  [isFetching, setIsFetching] = useState(true);
    const  [error, setError] = useState<Error | null>(null);   
    
    useEffect( () => {
        const CACHE_KEY = `vd_mytube_${categoryId}`;
        const CACHE_EXPIRATION = 1000 * 60 * 60 * 3; // 3 horas em milissegundo
        const storedData = localStorage.getItem(CACHE_KEY);

        const fetchAndStoreData = async () => {
            if(storedData) {
                const parsedData = JSON.parse(storedData);
                const storedTime = parsedData.time;
                const storedRepos = parsedData.data;

                if (Date.now() - storedTime <= CACHE_EXPIRATION) {
                setData(storedRepos);
                setIsFetching(false);
                return;
                }

            }

            // Axios
            api.get('/videos',{ 
                params:{
                    key: API_KEY,
                    videoCategoryId: categoryId,
                    maxResults: '48',
                    part: 'snippet,statistics',
                    chart: 'mostPopular',
                    hl: 'pt_BR',
                    regionCode: 'br',
                }
            })
            .then(response => {
                const fetchData = response.data.items;
                const channelIds = fetchData.map((video:TypeVideos) => video.snippet.channelId).join(',');

                
                api.get('/channels',{
                    params:{
                        key: API_KEY,
                        id: channelIds,
                        part: 'snippet'
                    }
                }).then(responseChannels => {
                    const ListChannels = responseChannels.data.items;
                    
                    const videosFull = fetchData.map((video:TypeVideos) => {
                        const channelId = video.snippet.channelId;
                        const channel = ListChannels.find((item:TypeChannel) => item.id === channelId) || null;
              
                        return {
                          video,
                          channel
                        };
                    });
                    setData(videosFull);
                    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: videosFull, time: Date.now() }));
                }).catch(errChannel => {
                    setError(errChannel);
                })
               
            })
            .catch( err =>{
                setError(err);
            })
            .finally( () => {
                setIsFetching(false);
            })
        }
        
            
        fetchAndStoreData();
        
    }, [categoryId])

    return { data, error, isFetching }
}



export function useFetchVideo<T = unknown>(getIdVideo:string | null){

    const categoryId = useCategoryContext().categoryId;

    const  [data, setData] = useState<T | TypeVideoWithChannel[] | null>(null);
    const  [isFetching, setIsFetching] = useState(true);
    const  [error, setError] = useState<Error | null | string>(null);   
    

    useEffect( () => {

        if(!getIdVideo){
            
            setError('Falha, idVideo nulo!');
            setIsFetching(false);
            return;
        }

        const CACHE_KEY = `vd_mytube_${categoryId}`;
        const storedData = localStorage.getItem(CACHE_KEY);

        let shouldLoadVideo = false;

        
        
        const fetchAndStoreData = async () => {
            if(storedData) {
                const parsedData = JSON.parse(storedData).data;
                parsedData.forEach( (item:any) => {
                    if(item?.video.id === getIdVideo){
                      const total = [{...item}];
                      setData(total)
                      shouldLoadVideo = true;
                      setIsFetching(false);
                      return;
                    }
                  })
                
            }


            if (!shouldLoadVideo) {
                // Axios
                api.get('/videos',{ 
                    params:{
                        key: API_KEY,
                        part: 'snippet,statistics',
                        id: getIdVideo,
                    }
                })
                .then(response => {
                    const fetchData  = response.data.items;                
                    const channelIds = fetchData[0].snippet.channelId;

                    api.get('/channels',{
                        params:{
                            key: API_KEY,
                            id: channelIds,
                            part: 'snippet'
                        }
                    }).then(responseChannels => {
                        const ListChannels = responseChannels.data.items;
                        
                        const videosFull = fetchData?.map((video:TypeVideos) => {
                            const channelId = video.snippet.channelId;
                            const channel = ListChannels.find((item:TypeChannel) => item.id === channelId) || null;
                
                            return {
                            video,
                            channel
                            };
                        });
                        
                        setData(videosFull);
                        
                    }).catch(errChannel => {
                        setError(errChannel);
                    })
                
                })
                .catch( err =>{
                    setError(err);
                })
                .finally( () => {
                    setIsFetching(false);
                })
            }
            
            
        }
        
            
        fetchAndStoreData();
        
    }, [categoryId, getIdVideo])

    return { data, error, isFetching }
}


export function useFetchRelated<T = unknown>(getIdVideo:string | null){

    const  [data, setData] = useState<T | null>(null);
    const  [isFetching, setIsFetching] = useState(true);
    const  [error, setError] = useState<Error | null | string>(null);   
    
    const categoryId = useCategoryContext().categoryId;

    useEffect( () => {
        
        const CACHE_KEY = `vd_mytube_${categoryId}`;        
        const storedData = localStorage.getItem(CACHE_KEY);
        const storedDataSelect = storedData ? storedData : localStorage.getItem('vd_mytube_0');

        const fetchRelatedData = async () => {

            if(storedDataSelect) {
                let parsedData = JSON.parse(storedDataSelect).data;
                let itensSelecionados:any = [];
                    
                while (itensSelecionados.length < 12) {
                    const indiceAleatorio = Math.floor(Math.random() * parsedData.length);

                    const itemSelecionado = parsedData[indiceAleatorio];
                    // Verificar se o item selecionado não é undefined
                    if (itemSelecionado !== undefined) {
                        // Adicionar o item selecionado à nova array
                        itensSelecionados.push(itemSelecionado);
                        // Remover o item selecionado da array original
                        parsedData.splice(indiceAleatorio, 1);
                    }
                }

                setData(itensSelecionados);
                setIsFetching(false);
                return;
                
            }else{
                setError('error ao gerar videos realacionados')
            }

            
        }
        
            
        fetchRelatedData();
        
    }, [categoryId, getIdVideo])

    return { data, error, isFetching }
}


export function useFetchSearch<T = unknown>(getSearch?:string | null){


    const  [data, setData] = useState<T | null>(null);
    const  [isFetching, setIsFetching] = useState(true);
    const  [error, setError] = useState<Error | null>(null);   
    
    useEffect( () => {

        const fetchAndStoreData = async () => {
            
            // Axios
            api.get('/search',{ 
                params:{
                    key: API_KEY,                    
                    maxResults: '10',
                    q: getSearch,
                    part: 'snippet',
                    hl: 'pt_BR',
                    regionCode: 'br',
                }
            })
            .then(response => {
                const fetchData = response.data.items;
                const channelIds = fetchData.map((video:TypeVideos) => video.snippet.channelId).join(',');

                
                api.get('/channels',{
                    params:{
                        key: API_KEY,
                        id: channelIds,
                        part: 'snippet'
                    }
                }).then(responseChannels => {
                    const ListChannels = responseChannels.data.items;
                    
                    const videosFull = fetchData.map((video:TypeVideos) => {
                        const channelId = video.snippet.channelId;
                        const channel = ListChannels.find((item:TypeChannel) => item.id === channelId) || null;
              
                        return {
                          video,
                          channel
                        };
                    });
                    setData(videosFull);
                    console.log(videosFull);


                }).catch(errChannel => {
                    setError(errChannel);
                })
               
            })
            .catch( err =>{
                setError(err);
            })
            .finally( () => {
                setIsFetching(false);
            })
        }
        
            
        fetchAndStoreData();
        
    }, [getSearch])

    return { data, error, isFetching }
}