import { FaEye, FaCheck } from "react-icons/fa";
import {useState} from "react";


export default function SignPage() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <main className="w-full font-inter min-h-screen bg-[url('/images/login_bg.png')] bg-cover bg-center text-white flex justify-center items-center   ">
                <div className={"flex  w-1/4 min-h-[600px] min-w-[250px] bg-black bg-opacity-80 items-center justify-center"}>

                    <form className={'flex w-full flex-col justify-center px-12 text-black  overflow-hidden    '}>
                        <h2 className={"text-white text-3xl font-medium"}>Log In</h2>
                        <div className={"relative my-4 "}>
                            <input  type={"text"}  id="email" className={"pl-4 text-xl w-1/2  w-full px-1 py-1 h-[60px] text-base  outline-none group rounded-md peer "} required={true}/>
                            <label htmlFor={"email"} className={"cursor-text absolute text-black text-base  transform px-1 top-4 left-0 peer-focus:text-[15px] pl-4 peer-focus:-top-0.5  peer-focus:pb-2 peer-valid:text-[15px] peer-valid:-top-0.5 peer-valid:pb-2   "} >Email</label>
                        </div>
                        <div className={"relative my-4 flex "}>
                            <input type={showPassword?"text":"password"} id="password"
                                   className={"pl-4 text-xl w-1/2  w-full px-1 py-1 h-[60px] text-base  outline-none group rounded-l-md peer "}
                                   required={true}/>
                            <label htmlFor={"password"}
                                   className={"cursor-text absolute text-black text-base  transform px-1 top-4 left-0 peer-focus:text-[15px] pl-4 peer-focus:-top-0.5  peer-focus:pb-2 peer-valid:text-[15px] peer-valid:-top-0.5 peer-valid:pb-2   "}>Password</label>
                            <button className={"text-white text-center p-4 bg-gray-500 rounded-r-md"}><FaEye onClick={()=>setShowPassword(!showPassword)} className={"text-black text-2xl"}/></button>
                        </div>
                        <button className={"bg-red-700 p-5 rounded-md mt-4 text-white text-xl"}>Sign In</button>
                        <label htmlFor={"check-box-1"} className={"p-4 peer  "}>
                            <FaCheck className={"check-sign top-5 left-5 text-red-700  text-sm checked:text-blue-500  "}/>
                            <input type={"checkbox"} className={" appearance-none w-5 h-5 bg-gray-500 border-1 rounded "} id={"check-box-1"} />

                        </label>

                    </form>

                </div>
            </main>
        </>

    )
}