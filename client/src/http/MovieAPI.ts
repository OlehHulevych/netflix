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