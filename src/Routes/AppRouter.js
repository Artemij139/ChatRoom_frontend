import {Route, Routes, Navigate} from 'react-router-dom';
import { privateRoutes } from './Routes';
import { publicRoutes } from './Routes';
import { useContext } from "react";
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import { CHAT_ROUTE, LOGIN_ROUTE } from './RoutesConsts';



const AppRouter = observer(() => {

    const {store} = useContext(Context);
    
        return store.getAuth? 
        (
            <Routes>
                 {privateRoutes.map(({path, Component})=>
                        <Route key = {path}  path = {path} element = {<Component/>} />
                    )}
                <Route path = "*"  element={<Navigate to={CHAT_ROUTE} replace />}/>
            </Routes>
               
        ):(
            <Routes>
                {publicRoutes.map(({path, Component})=>
                    <Route  key = {path} path = {path} element ={<Component/>} />
                )}

                <Route path = "*"  element={<Navigate to={LOGIN_ROUTE} replace />}/>
            </Routes>
        )
})
export default AppRouter;