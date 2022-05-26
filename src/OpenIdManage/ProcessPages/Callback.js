import {  useEffect } from "react";
import {  ChatPage } from "../../Routes/RoutesConsts";
import {  oidcCallBackManager } from "../OpenIdApi";


const CallBack = () => {
 
    useEffect(() => {
        oidcCallBackManager.signinRedirectCallback()
            .then(()=>{window.location = ChatPage})
              
     },[]);

    return (
        <>
       
        </>
    )
}
export default CallBack;