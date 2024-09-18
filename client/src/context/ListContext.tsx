import React, {createContext, ReactNode, useState} from "react";




type ListContextType = {
    movies:any[],
    listId:number,
    setMovies:React.Dispatch<React.SetStateAction<any[]>>,
    setListId:React.Dispatch<React.SetStateAction<number>>
}

export const ListContext = createContext<ListContextType|String>("");


interface providerProps  {
    children:ReactNode
}

// @ts-ignore
export const ListProvider:React.FC<providerProps> = ({children}) => {
    const [movies, setMovies] = useState<any[]>([]);
    const [listId, setListId] = useState<number>(0);
    // @ts-ignore





    return (
        <ListContext.Provider value={{
            movies:movies,
            listId:listId,
            setListId:setListId,
            setMovies:setMovies
        }}>
            {children}
        </ListContext.Provider>
    );
};



