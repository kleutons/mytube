import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3'
})

const API_KEY = 'AIzaSyBuLjyrS1VkFDQ6v4ycRkDG9uLNwPAee2A';

export function fecthAxios(url:string, options?: AxiosRequestConfig){
    const retorno = api?.get(url, options)
    return retorno ;
}

export function urlByCategory(id:string){
    return `/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${id}&key=${API_KEY}`;
}