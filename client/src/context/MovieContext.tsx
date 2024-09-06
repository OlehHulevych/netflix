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
    const [genres, setGenre] = useState<any[]>([]);

    return (
        <MovieContext.Provider value={{
            types:types,
            genres:genres,
            setTypes:setTypes,
            setGenre:setGenre
        }} >
            {children}
        </MovieContext.Provider>
        )
}
export  {MovieProvider, MovieContext}