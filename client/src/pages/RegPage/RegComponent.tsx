import { FaAngleRight } from "react-icons/fa";
import {Link} from 'react-router-dom'


const RegComponent = () => {


    return (
        <>
            <header className={"w-full h-24 bg-black-500 absolute top left-0 z-20"}>
                <Link to={"/"}>
                    <img src="/images/Netflix_Logo_1.png" alt="" className={"w-1/8 h-1/8 max-[900px]:w-3/12 cursor-pointer"}/>
                </Link>

            </header>
            <main className={"w-full font-inter min-h-screen bg-[url('/images/login_bg.png')] bg-cover bg-center text-white flex justify-center items-center text-white  "}>

                <div className={"max-w-[850px] w-full text-center font-bold font-inter "}>
                    <h1 className={"text-5xl font-bold leading-relaxed max-[500px]:text-3xl "}>The new hits.Ready to watch here from 15$</h1>
                    <h2 className={"text-2xl"}>Join today. Cancel anytime.</h2>
                    <div className={"mt-14"}>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <form action="" className={"flex justify-center mt-4"}>
                            <div className={" mr-2 text-start relative"}>
                                <input type="text" className={"max-w-[300px] w-full bg-black bg-opacity-70 max-h-[48px] h-full px-2 pt-1 outline-green-400 peer "} required={true} id={"email"}/>
                                <label className={"absolute top-3 left-2 text-base peer-focus:top-0 peer-focus:text-xs peer-valid:top-0 peer-valid:text-xs  "} htmlFor="">Email</label>
                            </div>
                            <button className={"bg-red-650 text-lg px-4 py-2 flex items-center"}>
                                <div className={"mr-2 max-[460px]:text-sm"}>Get Started</div>
                                <FaAngleRight className={"text-[18px]"}/>
                            </button>


                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

export default RegComponent;