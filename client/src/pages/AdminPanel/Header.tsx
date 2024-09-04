import { FaRegUserCircle } from "react-icons/fa";


import { useState, useEffect } from "react";
import {Link} from "react-router-dom"


import Sidebar from "./Sidebar.tsx";




export default function Header() {
    const[opened,setOpened] = useState(false);
    const[openedUser, setOpenedUser] = useState(false);

    const handleKeyEscPressing = (event:KeyboardEvent)=>{

        if(event.key === "Escape"){
            setOpenedUser(false);
            console.log("Work")
        }

    }

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyEscPressing);
        return()=>{
            window.removeEventListener("keydown",handleKeyEscPressing);
        }
    },[])


    return (
        <header className='z-20 fixed font-inter w-full min-w-[800px], max-h-24 h-full  , bg-black bg-opacity-60 min-[320px]:px-1 px-6 py-3 flex justify-between max-[800px]:max-h-16 max-[770px]:max-h-12'>
            <nav className='w-2/3 flex items-center '>
                <img onClick={()=>setOpened(!opened)} src={"/images/Netflix_Logo.png"} alt="" className=" min-[769px]:w-1/6 min-[320px]:absolute z-10 min-[768px]:static min-[768px]:text-sm min-[250px]:w-1/4"  />
                <ul className='text-white flex w-full text-center md:text-xs min-[780px]:visible min-[250px]:invisible xl:text-base'>
                    <li className="hover:text-gray-300 mr-4 md:mr-1 "><Link to={"/"}>Home</Link></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1  "><a href="#">TV Series</a></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1"> <a href="#">Movies</a></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1"> <a href="#">New & Popular</a></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1"><Link to={"/favorites"}>My List</Link></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1"><a href="#">Browse by language</a></li>
                </ul>
                <ul className={`text-white flex w-[250px] pt-24  transition-all duration-500 min-h-screen flex-col align-start bg-neutral-900 rounded-tr-2xl rounded-tb-3xl justify-start  md:text-xs min-[780px]:invisible    fixed top-0 ${opened?'min-[250px]:left-0':'min-[250px]:left-[-100%]'}  p-2 `}>
                    <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2 hover:bg-gray-500 "><Link to={"/"}>Home</Link></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500 "><a href="#">TV Series</a></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500"> <a href="#">Movies</a></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500"> <a href="#">New & Popular</a></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500"><Link to={"/favorites"}>My List</Link></li>
                    <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500"><a href="#">Browse by language</a></li>
                </ul>
            </nav>
            <div className='w-1/3 flex items-center justify-end lg-2/3'>
                <div className="flex text-xl min-[250px]:text-xs min-[769px]:text-xl items-center">

                    <div ><FaRegUserCircle onClick={()=>setOpenedUser(!openedUser)} className="text-white mr-2 text-4xl p-2  cursor-pointer transition-all ease-in-out duration-300  hover:bg-slate-600 rounded-full "/></div>
                </div>
            </div>
            <Sidebar opened={openedUser}/>

        </header>
    )
}




