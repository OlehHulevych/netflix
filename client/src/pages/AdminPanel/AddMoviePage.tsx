import React, {useState} from 'react';
import {Link} from "react-router-dom";

const AddMoviePage = () => {
    const [name, setName] = useState<String|null>(null);
    const [year, setYear] = useState<String|null>(null);
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
                    <input className={"w-full max-w-[500px] py-1 px-2 rounded-sm bg-slate-700 outline-none"} type="text"/>
                </div>
                <div className={"mb-2  flex flex-col "}>
                    <label className={"text-white mr-2"}  htmlFor="">Year</label>
                    <input className={"w-full max-w-[500px] py-1 px-2 rounded-sm bg-slate-700 outline-none"}  type="text"/>
                </div>
                <div className={"mb-2 flex flex-col "}>
                    <label className={"text-white "} htmlFor="">Duration</label>
                    <input className={"w-full max-w-[500px] py-1 px-2 rounded-sm bg-slate-700 outline-none"}  type="text"/>
                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2"}  htmlFor="type">type</label>
                    <select className={"py-1 px-2 rounded-sm "} name="type" id="type">
                        <option value="Movie">Movie</option>
                        <option value="Tv Shows">Tv shows</option>
                    </select>
                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2"} htmlFor="type">Genre</label>
                    <select className={"py-1 px-2 rounded-sm "}  name="type" id="type">
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Fantasize">Fantasize</option>
                    </select>
                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2"} htmlFor="">Banner image</label>
                    <input className={"py-1 px-2 rounded-sm "} type="file" id={"Banner image"}/>
                </div>
                <div className={"mb-2"}>
                    <label className={"text-white mr-2"} htmlFor="description">Name image</label>
                    <input className={"py-1 px-2 rounded-sm "} type="file" id={"Name image "}/>
                </div>
                <div className={"mb-2 flex flex-col"}>
                    <label className={"text-white"} htmlFor="description">Description</label>
                    <textarea className={"rounded-sm bg-slate-700 outline-none max-[768px]:w-3/4"} name="description" id="description" cols="30" rows="10"></textarea>
                </div>

            </form>
        </main>
        </>
    );
};

export default AddMoviePage;