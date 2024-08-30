import { FaEye, FaCheck, FaGlobe} from "react-icons/fa";
import {useContext, useState} from "react";
import {Link} from 'react-router-dom'
import Footer from "../Components/Footer.tsx";
import {login} from '../http/userAPI.ts';
import {Context} from '../main.tsx'



export default function SignPage():JSX.Element {

    // @ts-ignore
    const {user} = useContext(Context);
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");

    const handleSubmit = async ()=>{
        try{
            const data = await login(email, password);
            user.setUser(user);
        }


    }
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
        <>
            <header className={"w-full h-24 bg-black-500 absolute top left-0 z-20"}>
                <img src="/images/Netflix_Logo_1.png" alt="" className={"w-1/8 h-1/8 max-[900px]:w-3/12"}/>
            </header>
            <main className="w-full font-inter min-h-screen bg-[url('/images/login_bg.png')] bg-cover bg-center text-white flex justify-center items-center   ">
                <div className={"flex  w-1/4 min-h-[500px] min-w-[250px] bg-black bg-opacity-80 items-center justify-center"}>

                    <form className={'flex w-full flex-col justify-center px-8 text-black  overflow-hidden py-4 max-[1090px]:px-4   '}>
                        <h2 className={"text-white text-3xl font-medium"}>Log In</h2>
                        <div className={"relative my-4 "}>
                            <input  type={"text"}  id="email" className={"pl-4 text-xl w-1/2  w-full px-1 py-1 h-[60px] text-base  outline-none group rounded-md peer max-[1090px]:h-[50px] "} required={true}/>
                            <label htmlFor={"email"} className={"cursor-text absolute text-black text-base  transform px-1 top-4 left-0 peer-focus:text-[15px] pl-4 peer-focus:-top-0.5  peer-focus:pb-2 peer-valid:text-[15px] peer-valid:-top-0.5 peer-valid:pb-2   "} >Email</label>
                        </div>
                        <div className={"relative my-4 flex "}>
                            <input type={showPassword?"text":"password"} id="password"
                                   className={"pl-4 text-xl w-1/2  w-full px-1 py-1 h-[60px] text-base  outline-none group rounded-l-md peer max-[1090px]:h-[50px]"}
                                   required={true}/>
                            <label htmlFor={"password"}
                                   className={"cursor-text absolute text-black text-base  transform px-1 top-4 left-0 peer-focus:text-[15px] pl-4 peer-focus:-top-0.5  peer-focus:pb-2 peer-valid:text-[15px] peer-valid:-top-0.5 peer-valid:pb-2    "}>Password</label>
                            <button className={"w-full max-w-[60px]  text-white text-center p-3 bg-gray-500 rounded-r-md max-[1090px]:h-[50px] max-[1090px]:max-w-[50px]"}><FaEye onClick={()=>setShowPassword(!showPassword)} className={"text-black text-2xl"}/></button>
                        </div>
                        <button className={"bg-red-700 p-5 rounded-md mt-4 text-white text-xl max-[768px]:py-2"}>Sign In</button>
                        <div className={"w-full py-4 px-2 flex"} >
                            <label htmlFor={"check-box"} className={" relative   "}>

                                <input type={"checkbox"} className={" appearance-none w-5 h-5 bg-gray-500 border-1 rounded cursor-pointer  "} id={"check-box-1"} />
                                <FaCheck className={" absolute  check-1 top-1 left-1 text-red-700  text-[0px]  opacity-0  "}/>

                            </label>
                            <div className={"ml-2 text-gray-500 flex justify-between w-full text-sm max-[768px]:text-xs"}>
                                <p className={"cursor-default"}>Remember me</p>
                                <p><a href={"#"}>Need help?</a></p>
                            </div>

                        </div>

                        <div className={"flex text-gray-500 px-1 mb-4 max-[768px]:text-sm"}>
                            <p>New to Netflix?</p>
                            <span className={"text-white ml-1"}><Link to={"/reg"}>Sign up now</Link></span>

                        </div>
                        <p className={"w-full text-gray-500 text-xs pl-1"}>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span>
                        </p>


                    </form>

                </div>
            </main>
           <Footer/>
        </>

    )
}