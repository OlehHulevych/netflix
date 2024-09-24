import Layout from "../Layout.tsx";

import MovieItem from "../Components/MovieFiles/MovieItem.tsx";
import {getMovies} from "../http/MovieAPI.ts";
import {useState, useEffect, ChangeEvent} from "react";


const BrowsePage = () => {
    const [movies,setMovies] = useState<any[]>();
    const [searchedMovies, setSearchedMovies] = useState<any[]>();
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const query = e.target.value;
        const searchedMovies = movies?.filter((item)=>item.name.toLowerCase().includes(query));
        setSearchedMovies(searchedMovies)
    }
    useEffect(()=>{
        getMovies().then((data:any)=>{setMovies(data)});
        getMovies().then((data:any)=>{
            const currentMovies = data.filter((item:any)=>item.typeId===6)
            setSearchedMovies(currentMovies)
        });

    },[])
    return (
        <Layout>
            <div className={" w-full min-h-screen max-h-[800px] text-white pt-[10%]"}>
                <div className={"w-full flex justify-center "}>
                    <input onChange={(e:ChangeEvent<HTMLInputElement>)=>handleChange(e)} type="text" className={"w-1/2 mt-8 p-2 text-black bg-gray-700 outline-none focus:outline-red-500 max-[769px]:w-5/6"} />
                </div>

                <div className={"flex w-full flex-wrap mt-10 pl-8"}>
                    {searchedMovies?.map((movie:any)=>(
                        <MovieItem id={movie.id} name={movie.name} preview_image={movie.banner_img}/>
                    ))}
                </div>

            </div>
        </Layout>
    );
};

export default BrowsePage;