import Oidc from 'oidc-client';

export const HubAddress = 'https://localhost:7240/chat';
export const LoginAddress = 'https://localhost:7240/login';

export const oidcManager = new Oidc.UserManager({ 
    
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
    authority: "https://localhost:10001",
    client_id: "ChatClient",
    response_type: "code",
    scope:"openid profile ChatServer",
    redirect_uri: "http://localhost:3000/callback"
    
});

export const  getAccessTokenAsync  = async () => {
    const user =  await oidcManager.getUser();
    return user.access_token;
}  
   


export const oidcCallBackManager = new Oidc.UserManager({
    
    userStore: new Oidc.WebStorageStateStore({store:window.localStorage}),
    loadUserInfo:true, 
    response_mode:'query',
   
});