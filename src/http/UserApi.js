import axios from "axios"
import { getAccessTokenAsync, LoginAddress, } from "../Constansts/Constants"


const $authHost = axios.create({
    baseURL: 'https://localhost:7240/'
})


const authInterceptor = async config => {
    config.headers.authorization = `Bearer ${await getAccessTokenAsync()}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)


export const TestFuncx = async () => {
    const data = await $authHost.get('values')
    console.log(data);
}