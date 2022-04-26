import {Route, Routes, Navigate} from 'react-router-dom';
import { privateRoutes } from './Routes';
import { publicRoutes } from './Routes';
import { useContext } from "react";
import {Context} from '../index';

const AppRouter = () => {
    const {auth} = useContext(Context);
    return auth? 
    (
        <Routes>
            {privateRoutes.map(({path, Component})=>
                <Route key = {path }  path = {path} element = {<Component/>} exact = {true}/>
            )}
            <Route path="*" element={<Navigate replace to="/chat" />} />
        </Routes>
    ) :
    (
        <Routes>
             {publicRoutes.map(({path, Component})=>
                <Route  key = {path } path = {path} element ={<Component/>} exact = {true}/>
            )}
             <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
    ) 
    
}
export default AppRouter;