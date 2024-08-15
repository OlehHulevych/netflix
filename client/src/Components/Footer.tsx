import {FaGlobe} from "react-icons/fa";
import {useState} from "react";

const Footer = () => {
    const [showLanguageSelector, setShowLanguageSelector] = useState(false);
    const [language, setLanguage] = useState<String>("English");
    const changeLanguage = (e:any) =>{
        let newLanguage:string=  e.currentTarget.querySelector('div').textContent;
        console.log(newLanguage);
        if (e.textContent !== null) {
            // @ts-ignore
            e.currentTarget.querySelector('div').textContent = language;
        }
        setLanguage(newLanguage);

    }
    return (
        <footer className={"w-full bg-gray-950 pt-8  flex justify-center mt-12 "}>
            <div className={" w-[90%] flex   flex-col pl-16 justify-start items-start max-[980px]:w-full max-[635px]:pl-4 text-white "}>
                <h2 className={"w-[80%] text-xl mb-5 flex text-gray-500 justify-start max-[980px]:w-full max-[980px]:text-xl max-[590px]:text-lg  "}>Questions?  Call 000-800-919-1694.</h2>
                <div className="flex w-[90%] text-gray-500    flex-row justify-between items-center  max-[980px]:w-full   ">

                    <div className={"text-base w-full max-w-[320px] max-[980px]:text-base max-[590px]:text-sm relative  "}>
                        <div className={"mb-2 underline"}>FAQ</div>
                        <div className={"mb-2 underline"}>Investion Relations</div>
                        <div className={"mb-2 underline"}>Privacy</div>
                        <div className={"mb-2 underline"}>Speed Test</div>

                    </div>
                    <div className={"text-base w-full max-w-[320px] max-[980px]:text-base max-[590px]:text-sm "}>
                        <div className={"mb-2 underline"}>Help Center</div>
                        <div className={"mb-2 underline"}>Jobs</div>
                        <div className={"mb-2 underline"}>Cookie Preferences</div>
                        <div className={"mb-2 underline"}>Legal Notices</div>
                    </div>
                    <div className={"text-base w-full max-w-[320px] max-[980px]:text-base max-[590px]:text-sm "}>
                        <div className={"mb-2 underline"}>Accounts</div>
                        <div className={"mb-2 underline"}>Ways to watch</div>
                         <div className={"mb-2 underline"}>Corporate Information</div>
                         <div className={"mb-2 underline"}>Only on Netflix</div>
                    </div>
                    <div className={"text-base w-full max-w-[320px] max-[980px]:text-base max-[590px]:text-sm "}>
                        <div className={"mb-2 underline"}>Media Center</div>
                        <div className={"mb-2 underline"}>Terms of Use</div>
                        <div className={"mb-2 underline"}>Contact US</div>
                    </div>
                </div>

                <div className = {"transition-all w-full max-w-[102px] flex flex-col text-white text-xs mt-4 text-gray-500"}>

                    <div onClick={()=>setShowLanguageSelector(!showLanguageSelector)} className={` broder-white h-[50px] border-solid border-2 p-0.5 flex   items-center justify-around cursor-pointer ${showLanguageSelector?"rounded-t-md":"rounded-md"}`}>
                        <FaGlobe className={""}/>
                        <div>{language}</div>
                        <div className={`block border-white border-l-2 border-b-2 w-2 h-2 transform   ${showLanguageSelector?"rotate-[135deg] translate-y-0.5":"-rotate-45 -translate-y-0.5"}  `}></div>
                    </div>
                    <div  className={`w-full ${showLanguageSelector?"visible":"invisible"} last:rounded-md `}>
                        <div onClick={(e:any)=>changeLanguage(e)} className={" broder-white h-[40px] border-solid border-2 p-0.5 flex   items-center cursor-pointer "}>
                            <FaGlobe className={"mr-2"}/>
                            <div onClick={(e:any)=>changeLanguage(e)}>Ukrainian</div>
                        </div>
                        <div onClick={(e:any)=>changeLanguage(e)} className={" broder-white h-[40px] border-solid border-2 p-0.5 flex  items-center cursor-pointer "}>
                            <FaGlobe className={"mr-2"}/>
                            <div >Czech</div>
                        </div>
                    </div>

                </div>
                <div className={"text-white text-lg font-inter text-gray-500"}>Netflix Ukraine</div>
            </div>


        </footer>
    );
};

export default Footer;