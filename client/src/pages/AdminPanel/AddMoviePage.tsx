import React, {useState, useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import {MovieContext} from "../../context/MovieContext.tsx";
import {fetchTypes, fetchGenres} from "../../http/MovieAPI.ts";

const AddMoviePage = () => {
    const {types, genres, setTypes, setGenre} = useContext(MovieContext);
    const [name, setName] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [duration, setDuration] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [bannerImg, setBannerImg] = useState<any>();
    const [nameImg, setNameImg] = useState<any>();
    const [movieType, setMovieType] = useState<any>();
    const [movieGenre, setMovieGenre] = useState<any>();

    useEffect(()=>{
        fetchGenres().then((data)=>setGenre(data));
        fetchTypes().then((data)=>setTypes(data));
    },[])


    const addMoviesEvent = async ()=>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('year', year);
        formData.append('duration', duration );
        //formData.append('name_ima')
    }
    return (
        <>
            <header className={"w-full h-4 bg-black-500  z-20 max-[768px]:mb-8"}>
                <Link to={"/"}>
                    <img src="/images/Netflix_Logo_1.png" alt="" className={"w-[12%] h-1/8 max-[900px]:w-3/12 cursor-pointer"}/>
                </Link>
            </header>
        <main className={"w-full min-h-screen flex justify-center items-center overflow-hidden    text-white font-inter"}>
            <form className={" flex flex-col text-black align-middle max-[600px]:ml-12"} action="">
                <div className={"mb-2 align-middle flex flex-col "}>
                    <label  className={"text-white mr-2"}  htmlFor="">Name</label>
                    <input className={"w-full max-w-[500px] py-1 px-2 rounded-sm bg-slate-800 outline-none"} value={name} onChange= {(e:any)=>setName(e.target.value)} type="text"/>
                </div>
                <div className={"mb-2  flex flex-col "}>
                    <label className={"text-white mr-2"}  htmlFor="">Year</label>
                    <input className={"w-full max-w-[500px] py-1 px-2 rounded-sm bg-slate-800 outline-none"} value={year} onChange = {(e:any)=>setYear(e.target.value)}  type="text"/>
                </div>
                <div className={"mb-2 flex flex-col "}>
                    <label className={"text-white "} htmlFor="">Duration</label>
                    <input className={"w-full max-w-[500px] py-1 px-2 rounded-sm bg-slate-800 outline-none"} value={duration} onChange={(e:any)=>setDuration(e.target.value)}   type="text"/>
                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2"}  htmlFor="type">type</label>
                    <select className={"py-1 px-2 rounded-sm "} name="type" id="type">
                        {types.map((data:any)=>(
                            <option key={data.id} onClick={()=>setMovieType(data)} value={data.name}>{data.name}</option>
                        ))}
                    </select>
                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2"} htmlFor="type">Genre</label>
                    <select className={"py-1 px-2 rounded-sm "}  name="type" id="type">
                        {genres.map((data:any)=>(
                            <option key={data.id} onClick={()=>setMovieGenre(data)} value={data.name}>{data.name}</option>
                        ))}
                    </select>
                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2"} htmlFor="">Banner image</label>
                    <input className={"py-1 px-2 rounded-sm "} value={bannerImg}  onChange={(e:any)=>setBannerImg(e.target.files[0])}  type="file" id={"Banner image"}/>
                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2"} htmlFor="description">Name image</label>
                    <input className={"py-1 px-2 rounded-sm "} value={nameImg} onChange={(e:any)=>setNameImg(e.target.files[0])} type="file" id={"Name image "}/>
                </div>
                <div className={"mb-2 flex flex-col"}>
                    <label className={"text-white"} htmlFor="description">Description</label>
                    <textarea className={"rounded-sm bg-slate-800 outline-none max-[768px]:w-3/4"} name="description" id="description" cols="30" rows="10" value={description} onChange={(e:any)=>setDescription(e.target.value)}></textarea>
                </div>
                <button className={"bg-red-600 text-3xl py-2 rounded-xl mt-3 font-bold hover:bg-red-700 transition-all duration-500 ease-in-out hover:text-white "}>Add movie</button>
            </form>
        </main>
        </>
    );
};

export default AddMoviePage;