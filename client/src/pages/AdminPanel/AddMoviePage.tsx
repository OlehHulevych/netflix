import React, {useState, useContext, useEffect, ChangeEvent} from 'react';
import {Link} from "react-router-dom";
import {MovieContext} from "../../context/MovieContext.tsx";
import {fetchTypes, fetchGenres, createMovie} from "../../http/MovieAPI.ts";

const AddMoviePage = () => {
    // @ts-ignore
    const {types, genres, setTypes, setGenre} = useContext(MovieContext);
    const [name, setName] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [duration, setDuration] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [bannerImg, setBannerImg] = useState<File|null>(null);
    const [nameImg, setNameImg] = useState<File|null>(null);
    const [movieType, setMovieType] = useState<any>(null);
    const [movieGenre, setMovieGenre] = useState<any>();
    const [trailer, setTrailer] = useState<string>("");
    const [bannerTrailer, setBannerTrailer] = useState<string>("");
    const [disabled, setDisabled] = useState(true);
    const [added, setAdded] = useState(false);

    useEffect(()=>{
        fetchGenres().then((data)=>setGenre(data));
        fetchTypes().then((data)=>setTypes(data));

        console.log(types)
    },[])


    useEffect(()=>{
        if(movieType!=null){
            setDisabled(false);
        }
    },[movieType])


    const addMoviesEvent = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('year', year);
        formData.append('duration', duration);
        formData.append('typeId', movieType.id);
        formData.append('genreId', movieGenre.id);
        // @ts-ignore
        formData.append('name_image', nameImg);
        // @ts-ignore
        formData.append('banner_image', bannerImg);
        formData.append('banner_trailer', bannerTrailer);
        formData.append("trailer", trailer);
        formData.append("description", description)
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
        const result = await createMovie(formData);
        console.log(result)
        setAdded(true);
        setTimeout(()=>{
            setAdded(false);
        },2000)
    }

    const onChangeDuration =(e:ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        if(movieType.name==="Tv shows"){
            setDuration(value );
        }
        else{
            setDuration(value);
        }
    }


    return (
        <>
            <header className={"w-full h-4 bg-black-500  z-20 max-[768px]:mb-8 "}>
                <Link to={"/admin/main"}>
                    <img src="/images/Netflix_Logo_1.png" alt="" className={"w-[12%] h-1/8 max-[900px]:w-2/12 cursor-pointer"}/>
                </Link>
            </header>
            <div className={`transition-all duration-500 ease-in-out fixed text-center top-4 right-[2%] w-[20%]  text-white border-2 border-green-500 px-6 py-2 text-xl font-bold uppercase font-inter bg-green-500 ${added?'right-[2%]':'right-[-50%]'}`}>The movie was added</div>
        <main  className={"w-full min-h-screen flex justify-center items-center overflow-hidden    text-white font-inter "}>
            <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>addMoviesEvent(e)} className={" flex flex-col text-black align-middle  max-[430px]:items-center"} action="">
                <div className={"mb-2 align-middle flex flex-col  "}>
                    <label  className={"text-white mr-2 font-bold "}  htmlFor="">Name</label>
                    <input className={"w-full max-w-[500px] text-white font-bold py-1 px-2 rounded-sm bg-slate-800 outline-none max-[570px]:max-w-[400px]  "} value={name} onChange= {(e:any)=>setName(e.target.value)} type="text"/>
                </div>
                <div className={"mb-2  flex flex-col "}>
                    <label className={"text-white mr-2 font-bold"} htmlFor="">Year</label>
                    <input className={"w-full font-bold text-white max-w-[500px] py-1 px-2 rounded-sm bg-slate-800 outline-none max-[570px]:max-w-[300px]"} value={year} onChange = {(e:any)=>setYear(e.target.value)}  type="text"/>
                </div>

                <div className={"mb-2 flex flex-col "}>
                    <label className={"text-white font-bold "} htmlFor="">Trailer</label>
                    <input className={"w-full max-w-[500px] font-bold text-white py-1 px-2 rounded-sm bg-slate-800 outline-none max-[570px]:max-w-[300px]"} value={trailer} onChange={(e:any)=>setTrailer(e.target.value)}   type="text"/>
                </div>
                <div className={"mb-2 flex flex-col font-bold "}>
                    <label className={"text-white "} htmlFor="">Banner Trailer</label>
                    <input className={"w-full max-w-[500px] font-bold text-white py-1 px-2 rounded-sm bg-slate-800 outline-none max-[570px]:max-w-[300px]"} value={bannerTrailer} onChange={(e:any)=>setBannerTrailer(e.target.value)}   type="text"/>
                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2 font-bold"}  htmlFor="type">type</label>
                    <div className={"flex mt-2"}>
                        {types.map((item:any)=>(
                            <div onClick = {()=>setMovieType(item)}  className={`text-white capitalize text-xl mr-4 block border-white border-2 border-solid px-4 py-2 cursor-pointer font-bold hover:bg-white hover:text-black max-[600px]:text-base ${movieType===item?" bg-red-500":"bg-none text-white"}`} id={item.id} >{item.name}</div>
                        ))}
                    </div>
                    <div className={"mb-2 flex flex-col mt-2"}>
                        <label className={"text-white font-bold "} htmlFor="">{movieType?.name==='Tv shows'?"seasons":"duration"}</label>
                        <input disabled={disabled} className={`w-full max-w-[500px] font-bold text-white py-1 px-2 rounded-sm bg-slate-800 outline-none ${disabled?'opacity-60':'opacity-100'} max-[570px]:max-w-[300px]`} value={duration} onChange={onChangeDuration}   type={movieType?.name==='Tv shows'?"number":"text"}/>
                    </div>

                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2 font-bold"} htmlFor="type">Genre</label>
                    <div className={"flex mt-2 justify-center "}>
                        {genres.map((item:any)=>(
                            <div className={`text-white capitalize text-xl mr-2  block border-white border-2 border-solid px-4 py-2 cursor-pointer font-bold hover:bg-white hover:text-black ${movieGenre===item?" bg-red-500":"bg-none text-white "} max-[600px]:text-base`} id={item.id} onClick={()=>setMovieGenre(item)}>{item.name}</div>
                        ))}
                    </div>
                </div>
                <div className={"max-[430px]:flex max-[430px]:flex-col max-[430px]:justify-center max-[430px]:w-full max-[430px]:items-center  max-[430px]:ml-[35%] max-[430px]:mx-auto"}>
                <div className={"mb-2 "}>
                    <label className={"text-white mr-2 font-bold"} htmlFor="">Banner image</label>
                    <input className={"py-1 px-2 rounded-sm "}  onChange={(e:any)=>{
                        setBannerImg(e.target.files[0])
                        console.log(bannerImg)
                    }} type="file" id={"Banner image"}/>
                    <div className={"text-white"}>{bannerImg?.name}</div>
                </div>

                    <div className={"mb-2"}>
                        <label className={"text-white mr-2 font-bold"} htmlFor="description">Name image</label>
                        <input className={"py-1 px-2 rounded-sm "}  onChange={(e:any)=>setNameImg(e.target.files[0])} type="file" id={"Name image "}/>
                        <div className={"text-white"}>{nameImg?.name}</div>
                    </div>
                </div>
                    <div className={"mb-2 flex flex-col max-[430px]:w-10/12"}>
                        <label className={"text-white font-bold"} htmlFor="description">Description</label>
                        <textarea className={"rounded-sm font-bold text-white min-h-[150px] bg-slate-800 resize-none outline-none max-[768px]:w-5/6 max-[430px]:w-full"} name="description" id="description"   value={description} onChange={(e:any)=>setDescription(e.target.value)}></textarea>
                    </div>

                <button type={"submit"} className={"bg-red-600 text-3xl py-2 rounded-xl mt-3 font-bold hover:bg-red-700 transition-all duration-500 ease-in-out hover:text-white max-[570px]:w-3/4  "}>Add movie</button>
            </form>
        </main>
        </>
    );
};

export default AddMoviePage;