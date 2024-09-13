import {createContext, ReactNode, useState} from 'react';
import React from "react";




type MovieContextType = {
    types:any[],
    genres:any[],
    movies:any[],
    setTypes:React.Dispatch<React.SetStateAction<any[]>>,
    setGenre:React.Dispatch<React.SetStateAction<any[]>>,
    setMovies:React.Dispatch<React.SetStateAction<any[]>>,
}
const MovieContext = createContext<MovieContextType|String>("");

interface providerProps  {
    children:ReactNode
}

 const MovieProvider:React.FC<providerProps> = ({children})=>{
    const [types,setTypes] = useState<any[]>([]);
    const [genres, setGenre] = useState<any[]>([]);
    const [movies, setMovies] = useState<any[]>([]);

    return (
        <MovieContext.Provider value={{
            types:types,
            genres:genres,
            movies:movies,
            setTypes:setTypes,
            setGenre:setGenre,
            setMovies:setMovies
        }} >
            {children}
        </MovieContext.Provider>
        )
}
export  {MovieProvider, MovieContext}