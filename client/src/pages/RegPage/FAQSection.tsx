import data from "./question.json"
import FAQItem from "./FAQItem.tsx";
import {useState} from "react";
import {FaAngleRight} from "react-icons/fa";

const FaqSection = () => {
    const [selected,setSelected] = useState<Number|null>(null);
    return (
        <section className={"w-full min-h-screen text-white font-inter "}>
            <h1 className={"uppercase text-center font-bold font-inter text-4xl mb-12 max-[768px]:text-2xl "}>Frequently asked Questions</h1>
            <div className={"w-full flex justify-center"}>
                <div className={"w-full max-w-[950px] min-w-[150px]"} >
                    {data?.map((item=>(
                        <FAQItem id={item.id} selected={selected} setSelected={setSelected} question={item.question} answer={item.answer}/>
                    )))}

                </div>
            </div>
            <div className={"mt-14 text-center w-full"}>
                <h3 className={"text-3xl font-inter font-bold max-[460px]:text-xl"}>Ready to watch? Enter your email to create or restart your membership.</h3>
                <form action="" className={"flex justify-center mt-4"}>
                    <div className={" mr-2  relative"}>
                        <input type="text" className={"max-w-[300px] min-w-[100px] max-[460px]:w-full  w-[300px] bg-gray-500 bg-opacity-70 max-h-[48px] h-full px-2 pt-1 outline-green-400 peer "} required={true} id={"email"}/>
                        <label className={"absolute top-3 left-2 text-base peer-focus:top-0 peer-focus:text-xs peer-valid:top-0 peer-valid:text-xs  "} htmlFor="">Email</label>
                    </div>
                    <button className={"bg-red-650 text-lg px-4 py-2 flex items-center"}>
                        <div className={"mr-2 max-[460px]:text-xs"}>Get Started</div>
                        <FaAngleRight className={"text-[18px] max-[400px]:text-[14px]"}/>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default FaqSection;