import Oidc from 'oidc-client';
import { AuthServer, LoginPage, LoginRedirect, SilentLoginRedirect } from '../Routes/RoutesConsts';



export const oidcManager = new Oidc.UserManager({ 
    
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
    authority: AuthServer,
    client_id: "ChatClient",
    response_type: "code",
    scope:"openid profile chatHub",
    redirect_uri: LoginRedirect,
    silent_redirect_uri: SilentLoginRedirect,
    post_logout_redirect_uri: LoginPage
    
});

export const  getRefreshTokenAsync  = async () => {
   const user = await oidcManager.signinSilent();
   return user;
} 

export const  getAccessTokenAsync  = async () => {
    const user =  await oidcManager.getUser();
    return user.access_token;
}  

export const  Logout  = async () => {
   await oidcManager.signoutRedirect();  
} 
   
export const oidcCallBackManager = new Oidc.UserManager({
    
    userStore: new Oidc.WebStorageStateStore({store:window.localStorage}),
    loadUserInfo:true, 
    response_mode:'query',
   
});

export const RefreshCallBackManager = new Oidc.UserManager();