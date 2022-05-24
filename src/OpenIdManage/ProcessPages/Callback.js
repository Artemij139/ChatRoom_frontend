import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  CHAT_ROUTE, } from "../../Routes/RoutesConsts";
import {  oidcCallBackManager } from "../OpenIdApi";
import { Context } from "../../index";

const CallBack = () => {
 
    const {store} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        oidcCallBackManager.signinRedirectCallback()
            .then(
                ()=>navigate(CHAT_ROUTE))
            .catch(error=>console.log(error)) ;      
     },[]);

    return (
        <>
        </>
    )
}
export default CallBack;