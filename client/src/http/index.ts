
import axios, { AxiosRequestConfig} from "axios";



const $host = axios.create({
    baseURL:'https://netflix-backend-rlp5.onrender.com/'
})

const $authHost = axios.create({
    baseURL:'https://netflix-backend-rlp5.onrender.com/'
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

