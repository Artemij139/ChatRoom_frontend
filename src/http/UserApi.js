import axios from "axios"
import { getAccessTokenAsync, LoginAddress, } from "../Constansts/Constants"


const $authHost = axios.create({
    baseUrl: LoginAddress
})



const authInterceptor = async config => {
    config.headers.authorization = `Bearer ${await getAccessTokenAsync()}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)


export const TestFunc = async () => {
    const data = await $authHost.get('api/user/registration')
    console.log(data);
}