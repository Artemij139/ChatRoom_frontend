
import CallBack from "../OpenIdManage/ProcessPages/Callback";
import Chat from "../Components/Chat";
import Login from "../Components/Login";
import RefreshCallBack from "../OpenIdManage/ProcessPages/refreshCallback";
import { CALLBACK_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, REFRESH_ROUTE } from "./RoutesConsts";


export const publicRoutes = 
    [ 
        {
            path: LOGIN_ROUTE,
            Component: Login
        }
        ,
        {
            path: CALLBACK_ROUTE,
            Component: CallBack
        }
        
        
    ]


export const privateRoutes = 
    [ 
        {
            path: CHAT_ROUTE,
            Component: Chat
        }
            ,
        {
            path: REFRESH_ROUTE,
            Component: RefreshCallBack
        }
        
    ]