
import dotenv from 'dotenv'
import axios, { AxiosRequestConfig} from "axios";
dotenv.config();


const $host = axios.create({
    baseURL:process.env.REACT_API_URL
})

const $authHost = axios.create({
    baseURL:process.env.REACT_API_URL
})

const authInterceptor = (config:AxiosRequestConfig):AxiosRequestConfig=>{
    if (config.headers) {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    } else {
        config.headers = {
            authorization: `Bearer ${localStorage.getItem('token')}`
        };
    }
    return config;
}

// @ts-ignore
$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}