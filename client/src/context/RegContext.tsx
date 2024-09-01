import React, {createContext, ReactNode, useState} from "react";


type userType = {
    email:String,
    name:String,
    id:Number,
}



type contextType = {
    email:String,
    name:String,
    password:String,
    user:userType,
    setUser:React.Dispatch<React.SetStateAction<userType>>,
    setEmail:React.Dispatch<React.SetStateAction<string>>,
    setName:React.Dispatch<React.SetStateAction<string>>,
    setPassword:React.Dispatch<React.SetStateAction<string>>,



}
const RegContext = createContext<contextType|undefined>(undefined);

interface providerProps  {
    children:ReactNode
}

const RegProvider:React.FC<providerProps> = ({children})=>{
    const [email, setEmail] = useState<string>("");
    const [name,setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user,setUser] = useState<userType>({
        id:0,
        name:"",
        email:""
    })


    return(
       <RegContext.Provider value={{
           email:email,
           name:name,
           password:password,
           user:user,
           setUser:setUser,
           setEmail:setEmail,
           setName:setName,
           setPassword:setPassword,
       }}>
           {children}
       </RegContext.Provider>
    )
}

export  {RegProvider, RegContext}


