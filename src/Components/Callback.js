import { useEffect } from "react";
import {  oidcCallBackManager } from "../Constansts/Constants";

const CallBack = () => {
    
    useEffect(() => {
        oidcCallBackManager.signinRedirectCallback()
            .then(()=> window.location.href = "http://localhost:3000/login" )
            .catch(error=>console.log(error)) ;      
     },[]);

    return (
        <>
        </>
    )
}
export default CallBack;