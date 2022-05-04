import axios from "axios"
import { LoginAddress } from "../Constansts/Constants"


export const userLogin = async (data) => {
    await axios.post(LoginAddress, data);
}