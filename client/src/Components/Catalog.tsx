import MovieCaroseul from "./MovieFiles/MovieCaroseul.tsx";

import {useEffect, useContext} from "react";
import {MovieContext} from "../context/MovieContext.tsx";
import {getMovies, fetchGenres, fetchTypes} from "../http/MovieAPI.ts";



const Catalog = () => {
    //@ts-ignore
    const {setMovies, movies, types, setTypes, genres, setGenre} = useContext(MovieContext);


    useEffect(()=>{
        getMovies().then((data)=>setMovies(data));
        fetchGenres().then((data)=>setGenre(data));
        fetchTypes().then((data)=>setTypes(data));

    },[])
    const sortFilms = (genre:any)=>{

        const newMovies =  movies.filter((movie:any)=>movie.genreId===genre.id)
        console.log(newMovies)
        return newMovies
    }
    return (
        <main className={"w-full text-white font-inter px-6 "}>
            <h1 className={"text-3xl font-bold mb-4"}>Movies</h1>


            {genres.map((item:any)=>(
                <>
                    <h2 className={"text-2xl font-bold mb-2"}>{item.name}</h2>
                    <div className={"w-full  flex justify-center text-center"}>
                        <MovieCaroseul movies={sortFilms(item)}/>
                    </div>
                </>
            ))}

        </main>
    );
};

export default Catalog;