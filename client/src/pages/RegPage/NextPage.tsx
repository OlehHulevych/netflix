import {Link} from "react-router-dom";
import {FaEye} from "react-icons/fa";
import React, {useState, useContext, useEffect} from "react";
import {RegContext} from "../../context/RegContext.tsx";
import {registration, checkName} from "../../http/userAPI.ts";
import {useNavigate} from "react-router-dom";
import PasswordChecklist from "react-password-checklist";


const NextPage = () => {
    const navigate = useNavigate();
    // @ts-ignore
    const {email,setEmail, name, setName, password, setPassword} = useContext(RegContext);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [allValid, setAllValid] = useState<boolean>(false);
    const [usedName, setUsedName] = useState<boolean>(false);
    // @ts-ignore

    useEffect(()=>{
        setEmail(localStorage.getItem('email'))
    },[email])

    const onChange = async (e:any)=>{
        const currentName = e.target.value;
        const result:any = await checkName(currentName);
        setName(currentName)

        if(result.data.error==="This name is used"){
            setUsedName(true);
            console.log(result.data.error)
        }
        else if(result.data.message==="ok"){
            setUsedName(false);
            console.log(result.data.message)
        }

    }

    const onClick = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            // @ts-ignore
            const data = await registration(email, name, password);


            setEmail("");
            setName("")
            setPassword("")

            navigate('/')

        }
        catch(e:any){
            console.log(e)
        }

    }
    return (
        <>
            <header className={"w-full h-24 bg-black-500 absolute top left-0 z-20"}>
                <Link to={"/"}>
                    <img src="/images/Netflix_Logo_1.png" alt="" className={"w-[12%] h-1/8 max-[900px]:w-3/12 cursor-pointer"}/>
                </Link>
            </header>
            <main className={"w-full min-h-screen flex justify-center text-white items-center font-inter flex-col "}>
                <div>
                    <div className={"font-bold text-2xl"}>Welcome {email}</div>
                    <div className={"font-bold text-2xl"}>Sign up to start your free month</div>
                    <p className={"text-xl"}>Just few steps and you finished. Create and password please</p>
                </div>
                <form className={"w-full max-w-[600px] text-black"} onSubmit={(e:React.FormEvent<HTMLFormElement>)=>onClick(e)}>
                    <div className={" relative my-4 "}>
                        <input  type={"text"}  id="name" value={name} onChange={(e:any)=>onChange(e)} className={"pl-4 text-xl w-1/2  w-full px-1 py-1 h-[60px] text-base  outline-none group rounded-md peer max-[1090px]:h-[50px] "} required={true}/>
                        <label htmlFor={"name"} className={"cursor-text absolute text-black text-base  transform px-1 top-4 left-0 peer-focus:text-[15px] pl-4 peer-focus:-top-0.5  peer-focus:pb-2 peer-valid:text-[15px] peer-valid:-top-0.5 peer-valid:pb-2   "} >Name</label>
                        {usedName && <div className={"text-red-500 mt-2"}>Name is using by someone</div>}
                    </div>
                    <div className={"relative my-4 flex "}>
                        <input type={showPassword?"text":"password"} id="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                               className={"pl-4 text-xl w-1/2  w-full px-1 py-1 h-[60px] text-base  outline-none group rounded-l-md peer max-[1090px]:h-[50px]"}
                               required={true}/>
                        <label htmlFor={"password"}
                               className={"cursor-text absolute text-black text-base  transform px-1 top-4 left-0 peer-focus:text-[15px] pl-4 peer-focus:-top-0.5  peer-focus:pb-2 peer-valid:text-[15px] peer-valid:-top-0.5 peer-valid:pb-2    "}>Password</label>
                        <button className={"w-full max-w-[60px]  text-white text-center p-3 bg-gray-500 rounded-r-md max-[1090px]:h-[50px] max-[1090px]:max-w-[50px]"}><FaEye onClick={()=>setShowPassword(!showPassword)} className={"text-black text-2xl"}/></button>
                    </div>
                    <PasswordChecklist className={"text-white"}
                        rules={[
                            "minLength",
                            "specialChar",
                            "number",
                            "capital",
                        ]}
                        minLength={6}
                        value={password}
                        onChange={(isValid)=>setAllValid(isValid)}
                    />
                    <button disabled={!allValid} type={"submit"} className={"w-full bg-red-500 p-5 rounded-md mt-4 text-white text-xl max-[768px]:py-2"}>Finish</button>
                </form>
            </main>
        </>
    );
};

export default NextPage;