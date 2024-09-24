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
        <header className='z-20 fixed font-inter w-full min-w-[800px], max-h-18 h-full  , bg-black bg-opacity-60 min-[320px]:px-1 px-6 py-3 flex justify-between max-[800px]:max-h-16 max-[770px]:max-h-12'>
            <nav className='w-2/3 flex items-center '>
                <Link to={'/'} className=" min-[769px]:w-1/6 min-[320px]:absolute z-10 min-[768px]:static min-[768px]:text-sm min-[250px]:w-1/4">
                    <img onClick={()=>setOpened(!opened)} src={"/images/Netflix_Logo.png"} alt=""   />
                </Link>


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




