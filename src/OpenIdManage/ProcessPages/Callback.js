import {  useEffect } from "react";
import {  ChatPage } from "../../Routes/RoutesConsts";
import {  oidcCallBackManager } from "../OpenIdApi";


const CallBack = () => {
    
    useEffect(() => {
        oidcCallBackManager.signinRedirectCallback()
            .then(
                (user)=>{
                    console.log(user);
                    window.location = ChatPage
                }
                )
                .catch(e=>console.log(e));
    },[]);
    return (
        <>
            callback
        </>
    )
}
export default CallBack;