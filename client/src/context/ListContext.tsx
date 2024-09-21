import React, {createContext, ReactNode, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import {getListById} from "../http/MovieAPI.ts";




type ListContextType = {
    moviesOfList:any[],
    listId:number,
    listInfo:any;
    setMoviesOfList:React.Dispatch<React.SetStateAction<any[]>>,
    setListId:React.Dispatch<React.SetStateAction<number>>
    setListInfo:React.Dispatch<React.SetStateAction<any[]>>

}

export const ListContext = createContext<ListContextType|String>("");


interface providerProps  {
    children:ReactNode
}

// @ts-ignore
export const ListProvider:React.FC<providerProps> = ({children}) => {
    const [moviesOfList, setMoviesOfList] = useState<any[]>([]);
    const [listId, setListId] = useState<number>(0);
    const [listInfo, setListInfo] = useState<any>([]);

    useEffect(() => {
        const token = localStorage.getItem('token');


        if (token) {
            try {
                const decodedToken: any = jwtDecode(token);
                console.log("Decoded Token: ", decodedToken);

                getListById(decodedToken.id)
                    .then((data) => {
                        console.log("Data received: ", data);
                        setListInfo(data); // Update the listInfo state
                        setListId(data.id); // Update the listId state
                        localStorage.setItem('listId', data.id)
                    })
                    .catch((err) => {
                        console.error("Error fetching list by ID: ", err);
                    });
            } catch (err) {
                console.error("Error decoding token: ", err);
            }
        } else {
            console.log("No token found.");
        }
    }, []);

    useEffect(() => {
        console.log("Updated listInfo: ", listInfo);
    }, [listInfo]);

    // @ts-ignore





    return (
        <ListContext.Provider value={{
            moviesOfList:moviesOfList,
            listId:listId,
            listInfo:listInfo,
            setListId:setListId,
            setMoviesOfList:setMoviesOfList,
            setListInfo:setListInfo
        }}>
            {children}
        </ListContext.Provider>
    );
};



