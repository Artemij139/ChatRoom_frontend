import { useEffect } from "react";
import {  RefreshCallBackManager } from "../OpenIdApi";

const RefreshCallBack = () => {
    
    useEffect(() => {
        RefreshCallBackManager.signinSilentCallback();   
     },[]);

    return (
        <>
            
        </>
    )
}
export default RefreshCallBack;