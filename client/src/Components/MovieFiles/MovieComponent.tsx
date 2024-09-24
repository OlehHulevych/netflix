import {FaPlay} from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import {useParams} from "react-router-dom";
import React, { useEffect, useState} from "react";
import {getMovieOne} from "../../http/MovieAPI.ts";
import ReactPlayer from "react-player";

import {Element, Link} from 'react-scroll'
import {addMovieToList, checkMovieExist, removeMovieFromList} from "../../http/MovieAPI.ts";

import Footer from "../Footer.tsx";




// interface movieType {
//     name_image:String,
//     banner_name_image:String,
//     description:String,
//     duration:String,
//     genre:String,
//
// }

const MovieComponent = () => {
    const [movie, setMovie] = useState<any>();
    const [added, setAdded] = useState<string>("add")
    // @ts-ignore
    const [listId,setListId] = useState(localStorage.getItem('listId'));



    const{id} = useParams();
    useEffect(()=>{
        getMovieOne(id).then((data)=>{

            setMovie(data)
        })
    },[]);

    useEffect(()=>{
        checkMovieExist(id,listId).then((data)=>{
            if(data.message === 'ok'){
                console.log(data.message)
                setAdded("add")
            }
            else{
                console.log(data.message)
                setAdded("remove")
            }
        })
    },[added])


    const FormatDuration = (duration:string) => {
        if (duration) {
            const [hour, min] = duration.split(":");
            let formattedDuration = "";
            if (movie.type.name === "Movie") {
                formattedDuration = `${hour}h ${min}m`
            } else {
                formattedDuration = duration + " seasons"
            }
            return formattedDuration


        }

    }

    const handleAddMovieList = async (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        if(added==='add'){
            console.log(id,listId)
            const data = await addMovieToList(id,listId);
            setAdded('remove')
            console.log(data);
        }
        else if(added==='remove'){
            const data = await removeMovieFromList(id, listId)
            setAdded('add')
            console.log(data)
        }


    }



    return (
        <>
        <main className={"w-full font-inter"}>
        <div className={`  relative bg-[url(${import.meta.env.VITE_API_URL +"banner_images/"+movie?.banner_img}] bg-cover bg-center   w-full h-full min-h-screen  flex flex-col max-[470px]:h-[400px]`} >
            <img src={import.meta.env.VITE_API_URL +"banner_images/"+movie?.banner_img} alt="" className={" absolute w-full max-h-[800px] h-full object-fill max-[570px]:h-[400px] "}/>
            {/*content*/}
            <div className={`   overflow-hidden absolute bg-custom-gradient box-shadow-xl w-1/2 h-full top-0 left-0 flex flex-col pl-8 flex justify-center  z-10 max-[768px]:w-full  max-[768px]:items-center  max-[768px]:justify-start max-[768px]:pt-10  `}>
                <div className={" "}>
                <div className={"max-[769px]:flex max-[769px]:justify-center pl-4 "}>
                    <img  src={import.meta.env.VITE_API_URL+"name_images/"+movie?.name_img} alt="" className=' max-w-[500px] max-h-[250px] w-full -ml-10 max-[900px]:max-w-[350px] max-[900px]:-ml-5 max-[768px]:text-center max-[600px]:max-w-[250px] max-[530px]:max-w-[175px]   ' />
                </div>
                <div className={"text-4xl font-bold text-white my-2 capitalize max-[900px]:text-2xl"}>{movie?.name}</div>
                <div>
                    <p className={'font-inter text-white  text-xl max-w-[500px] max-[950px]:text-base max-[600px]: text-sm max-[530px]:text-xs max-[530px]:max-w-[350px] max-[380px]:text-[10px]'}>
                        {movie?.description}
                    </p>
                    <div className={"flex  mt-4 text-xl text-gray-500 capitalize max-[900px]:text-lg"}>
                        {movie?.year} | {movie?.genre.name} | {FormatDuration(movie?.duration)}
                    </div>
                </div>
                <div className={'text-white pt-5 max-[768px]:text-center '}>
                    <Link to ="movie" spy = {true} smooth = {true} offset={90} duration = {500}>
                    <button className={'inline-flex align-top justify-center w-[157px] items-center text-black text-xl font-bold max-[950px]:max-h-[50px]   h-[75px]  bg-white mr-10 rounded-sm group hover:bg-opacity-30 hover:text-white max-[900px]:w-1/4 max-[950px]:h-full max-[950px]:max-h-[50px] max-[768px]:p-2 max-[600px]:text-base  max-[530px]:max-h-[40px]'}>

                            <FaPlay className={'text-3xl mr-1 max-[768px]:text-6xl max-[530px]:text-xl '}/>
                            Play

                    </button>
                    </Link>
                    <button onClick={handleAddMovieList} className={'inline-flex align-top justify-center  w-[157px] items-center text-black text-xl font-bold max-[950px]:max-h-[50px]   h-[75px]  bg-white mr-10 rounded-sm group hover:bg-opacity-30 hover:text-white max-[900px]:w-1/4 max-[950px]:h-full max-[950px]:max-h-[50px] max-[768px]:p-2 max-[600px]:text-base max-[530px]:p-0.5 max-[530px]:max-h-[40px]'}>
                        <div className={'text-6xl mr-1 font-thin max-[768px]:text-3xl '}><CiCirclePlus/></div>
                        <div>{added}</div>
                    </button>
                </div>
                </div>



            </div>
        </div>
            <Element name={"movie"}>
                <div className = {"w-full flex justify-center items-center  relative overflow-hidden  text-white    min-h-screen max-[550px]:min-h-[150px] "}>
                    <ReactPlayer  width={"70%"}  url={movie?.trailer}/>
                </div>
            </Element>
        </main>
            <Footer/>
        </>
    );
};

export default MovieComponent;