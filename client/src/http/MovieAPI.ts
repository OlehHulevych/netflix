import {$authHost} from "./index.ts";


export const fetchTypes = async () =>{
    const result = await $authHost.get('api/type/');
    return result.data;
}

export const fetchGenres = async ()=>{
    const result =  await $authHost.get('api/genre/');

    return result.data
}


export const createMovie = async (device:any)=>{
    const {data} = await $authHost.post('api/movie/', device);
    return data;
}

export const getMovies = async () =>{
    const {data} = await $authHost.get('api/movie/');
    return data;
}

export const getMovieOne = async (id:any) =>{
    const {data} = await $authHost.get(`api/movie/${id}`);
    return data;
}

export const getGenreOne = async(id:any)=>{
    const {data} = await $authHost.get(`api/genre/${id}`);
    return data;
}