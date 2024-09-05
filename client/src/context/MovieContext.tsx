import {createContext, ReactNode, useState} from 'react';
import React from "react";




type MovieContextType = {
    types:any[],
    genres:any[],
    setTypes:React.Dispatch<React.SetStateAction<any[]>>
    setGenre:React.Dispatch<React.SetStateAction<any[]>>
}
const MovieContext = createContext<MovieContextType|String>("");

interface providerProps  {
    children:ReactNode
}

 const MovieProvider:React.FC<providerProps> = ({children})=>{
    const [types,setTypes] = useState<any[]>([]);
    const [genres, setGenres] = useState<any[]>([]);

    return (
        <MovieContext.Provider value={{
            types:types,
            genres:genres,
            setTypes:setTypes,
            setGenre:setGenres
        }} >
            {children}
        </MovieContext.Provider>
        )



}


export default MovieProvider