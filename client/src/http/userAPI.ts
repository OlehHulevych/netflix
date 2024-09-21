import {$authHost, $host} from "./index.ts";
import { jwtDecode } from "jwt-decode";


export const registration = async(email:String,name:String, password:String, role:String)=>{
    const {data} = await $host.post('api/user/registration', {email, name, password, role});
    console.log("API Response:", data); // Log the full response

    if (typeof data.token === 'string') {
        localStorage.setItem("token", data.token);
        return jwtDecode(data.token);
    } else {
        throw new Error("Invalid token format");
    }
}


export const login = async(email:String, password:String)=> {
    const { data } = await $host.post('api/user/login', { email, password });
    console.log("API Response:", data); // Log the full response
    if(data.message==="Wrong Password" || data.message==="User not found"){
        return data
    }
    else{
        if (typeof data.token === 'string') {
            localStorage.setItem("token", data.token);
            return jwtDecode(data.token);
        } else {
            throw new Error("Invalid token format");
        }
    }

}

export const check = async()=>{

    const {data} = await $authHost.get('api/user/auth');
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
}

export const logout = ()=>{
    localStorage.removeItem('token');
}

export const getUserInfo = async () => {
    try{
        const token:any = localStorage.getItem('token');
        const data:any = jwtDecode(token)
        const id = data.id;
        const userInfo = await $host.get(`api/user/${id}`);
        const user:any = {}
        user.id = userInfo.data.user.id;
        user.name = userInfo.data.user.name;
        user.email = userInfo.data.user.email;
        user.role = userInfo.data.user.role
        return user
    }
    catch (e){
        console.log(e)
    }


}

export const checkEmail = async (email:String)=>{
    const data = await $host.post('api/user/check-email', {email});
    return data;
}

export const checkName = async(name:String)=>{
    const data = await $host.post('api/user/check-name', {name});
    return data
}