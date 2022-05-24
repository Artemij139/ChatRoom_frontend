import './App.css';
import { useContext, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AppRouter from './Routes/AppRouter';
import { oidcManager } from './OpenIdManage/OpenIdApi';
import { Context } from './index';
import { observer } from 'mobx-react-lite';


const App = observer(() => {

    const {store} = useContext(Context);
    console.log(store.getAuth)
    useEffect(() => {
        oidcManager.getUser().then(
             user => { 
                 if(user){
                     store.setUser(user);
                     store.setIsAuth(true);  
                     console.log("logIN")  
                 }
                 else{
                    console.log("not login");
                 }

             }
         )
        
     },[]);

    return (
            <BrowserRouter>
             {store.getAuth&&<Navbar/>}   
                <AppRouter/>
            </BrowserRouter>
    );
})

export default App;
