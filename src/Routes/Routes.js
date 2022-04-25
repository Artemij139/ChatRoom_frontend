
import Chat from "../Components/Chat";
import Login from "../Components/Login";

export const publicRoutes = 
    [ 
        {
            path: '/login',
            Component: Login
        }
    ]


export const privateRoutes = 
    [ 
        {
            path: '/chat',
            Component: Chat
        }
    ]