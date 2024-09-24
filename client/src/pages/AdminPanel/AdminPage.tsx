import Header from './Header.tsx'
import MovieItem from "../../Components/MovieFiles/MovieItem.tsx";
import Footer from '../../Components/Footer.tsx'
import {ChangeEvent, useEffect, useState} from "react";
import {getMovies} from "../../http/MovieAPI.ts";

const AdminPage = () => {
    const [movies,setMovies] = useState<any[]>();
    const [searchedMovies, setSearchedMovies] = useState<any[]>();
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const query = e.target.value;
        const searchedMovies = movies?.filter((item)=>item.name.toLowerCase().includes(query));
        setSearchedMovies(searchedMovies)
    }
    useEffect(()=>{
        getMovies().then((data)=>setMovies(data));
        getMovies().then((data)=>setSearchedMovies(data));
    },[])

    return (
        <>
            <Header/>
            <main className={" w-full min-h-screen  text-white "}>
                <div className={" w-full min-h-screen max-h-[800px] text-white pt-[10%]"}>
                    <div className={"w-full flex justify-center "}>
                        <input onChange={(e:ChangeEvent<HTMLInputElement>)=>handleChange(e)} type="text" className={"w-1/2 mt-8  p-2 text-black bg-gray-700 outline-none focus:outline-red-500 max-[769px]:w-5/6"} />
                    </div>

                    <div className={"flex w-full flex-wrap mt-10 pl-8"}>
                        {searchedMovies?.map((movie:any)=>(
                            <MovieItem id={movie.id} name={movie.name} preview_image={movie.banner_img}/>
                        ))}
                    </div>

                </div>
            </main>
            <Footer/>
        </>
  );
            };



export default AdminPage;