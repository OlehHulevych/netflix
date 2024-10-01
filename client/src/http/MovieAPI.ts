import {$authHost} from "./index.ts";


export const fetchTypes = async () =>{
    const result = await $authHost.get('https://netflix-backend-rlp5.onrender.com/api/type/');
    return result.data;
}

export const fetchGenres = async ()=>{
    const result =  await $authHost.get('https://netflix-backend-rlp5.onrender.com/api/genre/');

    return result.data
}


export const createMovie = async (device:any)=>{
    const {data} = await $authHost.post('https://netflix-backend-rlp5.onrender.com/api/movie/', device);
    return data;
}

export const getMovies = async () =>{
    const {data} = await $authHost.get('https://netflix-backend-rlp5.onrender.com/api/movie/');
    return data;
}

export const getMovieOne = async (id:any) =>{
    const {data} = await $authHost.get(`https://netflix-backend-rlp5.onrender.com/api/movie/${id}`);
    return data;
}

export const getGenreOne = async(id:any)=>{
    const {data} = await $authHost.get(`https://netflix-backend-rlp5.onrender.com/api/genre/${id}`);
    return data;
}

export const getListById = async(id:any) =>{
    const {data} = await $authHost.get(`https://netflix-backend-rlp5.onrender.com/api/list-movie/user/${id}`);
    return data;
}

export const addMovieToList = async (movieId:any, listId:any)=>{
    const {data} = await $authHost.post('https://netflix-backend-rlp5.onrender.com/api/list-movie/', {movieId, listId});
    return data;
}

export const removeMovieFromList = async (movieId:any, listId:any)=>{
    const {data} = await $authHost.post('https://netflix-backend-rlp5.onrender.com/api/list-movie/delete/', {movieId, listId});
    return data;
}



export const checkMovieExist = async (movieId:any, listId:any)=>{
    // @ts-ignore
    const {data} = await $authHost.post('https://netflix-backend-rlp5.onrender.com/api/list-movie/check/', {movieId, listId})
    return data;
}



