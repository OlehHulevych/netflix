import { FaSearch, FaRegUserCircle} from "react-icons/fa";
import { useState } from "react";
import {Link} from 'react-router-dom'




export default function Header() {
  const[opened,setOpened] = useState(false);
  const[openedUser, setOpenedUser] = useState(false);
  
  return (
    <header className='z-20 fixed font-inter w-full min-w-[800px], max-h-24 h-full  , bg-black bg-opacity-60 min-[320px]:px-1 px-6 py-3 flex justify-between max-[800px]:max-h-16 max-[770px]:max-h-12'>
      <nav className='w-2/3 flex items-center '>
        <img onClick={()=>setOpened(!opened)} src={"/images/Netflix_Logo.png"} alt="" className=" min-[769px]:w-1/6 min-[320px]:absolute z-10 min-[768px]:static min-[768px]:text-sm min-[250px]:w-1/4"  />
        <ul className='text-white flex w-full text-center md:text-xs min-[780px]:visible min-[250px]:invisible xl:text-base'>
            <li className="hover:text-gray-300 mr-4 md:mr-1 "><a  href="#">Home</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1  "><a href="#">TV Series</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1"> <a href="#">Movies</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1"> <a href="#">New & Popular</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1"><a href="#">My List</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1"><a href="#">Browse by language</a></li>
        </ul>
        <ul className={`text-white flex w-[250px] pt-24  transition-all duration-500 min-h-screen flex-col align-start bg-neutral-900 rounded-tr-2xl rounded-tb-3xl justify-start  md:text-xs min-[780px]:invisible    fixed top-0 ${opened?'min-[250px]:left-0':'min-[250px]:left-[-100%]'}  p-2 `}>
            <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2 hover:bg-gray-500 "><a  href="#">Home</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500 "><a href="#">TV Series</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500"> <a href="#">Movies</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500"> <a href="#">New & Popular</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500"><a href="#">My List</a></li>
            <li className="hover:text-gray-300 mr-4 md:mr-1 mb-2 p-2  hover:bg-gray-500"><a href="#">Browse by language</a></li>
        </ul>
      </nav>
      <div className='w-1/3 flex items-center justify-end lg-2/3'>
        <div className="flex text-xl min-[250px]:text-xs min-[769px]:text-xl items-center">
          <div className="group">
          <form action="" className="flex rounded-full   items-center mr-4  group-hover:bg-white group-focus-within:bg-white pr-2">
            <input type="text" placeholder="Search something" className="  transition-width mr-2 opacity-0 w-[1px]  group-focus-within::opacity-100 sm:group-focus-within:w-[150px] min-[550px]:group-focus-within:w-[200px] min-[320px]:group-focus-within:w-[160px]    min-[1023px]:group-focus-within:w-[250px] group-focus-within:visible group-focus-within:opacity-100  ease-in-out duration-700  capitalize rounded-full min-[780px]:group-focus-within:w-[130px]   min-[769px]:h-7 py-4 min-[320px]:py-0 min-[320px]:pl-2 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline  min-[320px]:text-xs text-xs" />
            <FaSearch className=" text-white group-focus-within:text-black group-hover:text-black"/>
          </form>
          </div>
          <div ><FaRegUserCircle onClick={()=>setOpenedUser(!openedUser)} className="text-white mr-2 text-4xl p-2  cursor-pointer transition-all ease-in-out duration-300  hover:bg-slate-600 rounded-full "/></div>
        </div>
      </div>
        <div className = {`align-middle transition-height .5s   text-white absolute top-16 right-0 ${openedUser?'max-h-[400px] opacity-100 ':'max-h-0 opacity-0 '} max-w-[200px] min-w-[100px] min-h-[150px]  p-6    h-full  bg-slate-950 flex flex-col justify-center items-center text-xl z-20 max-[880px]:top-16 max-[800px]:top-12 max-[770px]:text-base max-[640px]:top-10 max-[500px]:text-sm max-[600px]:p-4 max-[380px]:text-xs max-[380px]:p-2 max-[380px]:min-h-[100px]`}>
            <button className={"table-fixed w-full max-w-[150px] bg-red-600 font-bold px-6 py-0.5 rounded-md mb-2 transition-all .5s hover:bg-red-300 hover:text-black max-[770px]:max-w-[125px] "}>Sign up</button>
            <button className={"table-fixed w-full max-w-[150px] bg-red-600 font-bold px-6 py-0.5 rounded-md mb-2 transition-all .5s hover:bg-red-300 hover:text-black max-[770px]:max-w-[125px]"}><Link to={'/login'}>Log in</Link></button>
            <button className={"table-fixed w-full max-w-[150px] bg-red-600 font-bold px-6 py-0.5 rounded-md mb-2 transition-all .5s hover:bg-red-300 hover:text-black max-[770px]:max-w-[125px]"}>Settings</button>
        </div>
    </header>
  )
}
