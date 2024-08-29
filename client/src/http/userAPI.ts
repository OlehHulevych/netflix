import {$authHost, $host} from "./index.ts";
import { jwtDecode } from "jwt-decode";


export const registration = async(email:String,name:String, password:String)=>{
    const {data} = await $host.post('api/user/registration', {email, name, password, role:'USER'});
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}


export const login = async(email:String, password:String)=>{
    const {data} = await $host.post('api/user/registration',{email,password});
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
}

export const check = async()=>{
    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
}