import {Route, Routes, Navigate} from 'react-router-dom';
import { privateRoutes } from './Routes';
import { publicRoutes } from './Routes';
import { useContext } from "react";
import {Context} from '../index';
import { observer } from 'mobx-react-lite';



const AppRouter = observer(() => {

    const {store} = useContext(Context);
    console.log(store.getAuth)
        return  (
            <Routes>
             {store.getAuth&&privateRoutes.map(({path, Component})=>
                    <Route key = {path}  path = {path} element = {<Component/>} />
                )}
               
            
                 {publicRoutes.map(({path, Component})=>
                    <Route  key = {path} path = {path} element ={<Component/>} />
                )}
            </Routes>
        )
})
export default AppRouter;