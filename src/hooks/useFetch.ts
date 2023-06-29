import { useEffect, useState } from "react";
import axios from 'axios';
import { useCategoryContext } from "../contexts/searchCategories";

const API_KEY = 'AIzaSyBuLjyrS1VkFDQ6v4ycRkDG9uLNwPAee2A';
const api = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3'
})

export function useFetchVideoCategory<T = unknown>(){

    const categoryId = useCategoryContext().categoryId;

    const  [data, setData] = useState<T | null>(null);
    const  [isFetching, setIsFetching] = useState(true);
    const  [error, setError] = useState<Error | null>(null);
    const url = `/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`;
   
    
    useEffect( () => {
        const CACHE_KEY = `vd_mytube_${categoryId}`;
        const CACHE_EXPIRATION = 1000 * 60 * 60 * 5; // 3 horas em milissegundo
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
            api.get(url)
            .then(response => {
                const fetchData = response.data.items
                setData(fetchData);
                localStorage.setItem(CACHE_KEY, JSON.stringify({ data: fetchData, time: Date.now() }));
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