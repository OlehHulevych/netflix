import {$authHost, $host} from "./index.ts";
import { jwtDecode } from "jwt-decode";


export const registration = async(email:String,name:String, password:String)=>{
    const {data} = await $host.post('api/user/registration', {email, name, password, role:'USER'});
    localStorage.setItem("token", data.token)
    return jwtDecode(data.token)
}


export const login = async(email:String, password:String)=> {
    const { data } = await $host.post('api/user/login', { email, password });
    console.log("API Response:", data); // Log the full response

    if (typeof data.token === 'string') {
        localStorage.setItem("token", data.token);
        return jwtDecode(data.token);
    } else {
        throw new Error("Invalid token format");
    }
}

export const check = async()=>{

    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
}