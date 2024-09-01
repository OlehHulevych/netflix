
import {FaPlayCircle, FaSearch} from "react-icons/fa";
import {MdMovieCreation} from "react-icons/md";
import {PiTelevisionSimple} from "react-icons/pi";
import {CiBoxList} from "react-icons/ci";
import {Link} from "react-router-dom";
import {logout} from "../http/userAPI.ts";
import {useNavigate} from 'react-router-dom'
import {useContext, useEffect} from 'react';
import {RegContext} from "../context/RegContext.tsx";
import {getUserInfo} from "../http/userAPI.ts";


type props ={
    opened:Boolean;
}



const Sidebar = ({opened}:props) => {

    // @ts-ignore
    const {user, setUser} = useContext(RegContext);
    const navigate = useNavigate();

    const handleUserInformation = async()=>{
        const data = await getUserInfo();
        if(!data){
            navigate('/login')
        }
        user.id = data.id;
        user.name = data.name;
        user.email = data.email;

        console.log(user)

    }

    useEffect(()=>{
        handleUserInformation()
    },[user])


    const onLogout =()=>{
        logout()
        navigate('/login');

    }

    // @ts-ignore



    return (
        <div className = {` bg-opacity-80 backdrop-blur-lg shadow-2xl  shadow-slate-950 align-middle transition-height duration-500  text-white absolute top-0  min-h-screen  ${opened?' right-0 ':'right-[-100%] '} max-w-[400px] w-1/4 min-w-[100px] min-h-[150px]  p-2 pt-12     bg-slate-950 flex flex-col  text-xl z-20 max-[620px]:w-1/2 max-[320px]:w-3/4  max-[770px]:text-base  max-[500px]:text-sm max-[600px]:p-4 max-[380px]:text-xs max-[380px]:p-2 `}>
            <div className={"w-full flex mb-8  "}>
                <img className={" max-w-[40px] max-h-[40px] w-full h-full border-4 border-white border-solid rounded-full mr-2"} src="/images/user.png" alt=""/>
                <div>
                    <div className={"text-lg max-[880px]:text-base max-[680px]:text-sm"}>{user.name}</div>
                    <div onClick={onLogout} className={"text-sm cursor-pointer max-[680px]:text-xs"}>Change profile</div>
                </div>


            </div>
            <div className={" text-gray-500 flex w-full items-center align-top mt-6 cursor-pointer transform hover:scale-110 hover:translate-x-4 hover:text-white"}>
                <FaPlayCircle className={"mr-2 text-3xl max-[880px]:text-xl"}/>
                <div className={"text-lg"}>Watch Now</div>
            </div>
            <div className={" text-gray-500 flex w-full items-center align-top mt-6 cursor-pointer transform hover:scale-110 hover:translate-x-4 hover:text-white "}>
                <FaSearch className={"mr-2 text-3xl max-[880px]:text-xl"}/>
                <div className={"text-lg"}><Link to={"/browse"}>Browse</Link></div>
            </div>
            <div className={" text-gray-500 flex w-full items-center align-top mt-6 cursor-pointer transform hover:scale-110 hover:translate-x-4 hover:text-white "}>
                <MdMovieCreation className={"mr-2 text-3xl max-[880px]:text-xl"}/>
                <div className={"text-lg"}>Movies</div>
            </div>
            <div className={" text-gray-500 flex w-full items-center align-top mt-6 cursor-pointer transform hover:scale-110 hover:translate-x-4 hover:text-white"}>
                <PiTelevisionSimple className={"mr-2 text-3xl max-[880px]:text-xl"}/>
                <div className={"text-lg"}>TV Shows</div>
            </div>
            <div className={" text-gray-500 flex w-full items-center align-top mt-6 cursor-pointer transform hover:scale-110 hover:translate-x-4 hover:text-white "}>
                <CiBoxList className={"mr-2 text-3xl max-[880px]:text-xl"}/>
                <div className={"text-lg"}>My List</div>
            </div>

        </div>
    );
};



export default Sidebar;