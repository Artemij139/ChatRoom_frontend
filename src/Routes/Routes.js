
import CallBack from "../Components/Callback";
import Chat from "../Components/Chat";
import Login from "../Components/Login";

export const publicRoutes = 
    [ 
        {
            path: '/login',
            Component: Login
        }
        ,
        {
            path: '/callback',
            Component: CallBack
        }
    ]


export const privateRoutes = 
    [ 
        {
            path: '/chat',
            Component: Chat
        }
        
    ]