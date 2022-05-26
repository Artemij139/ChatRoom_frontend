import './App.css';
import { useContext, useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AppRouter from './Routes/AppRouter';
import { oidcManager } from './OpenIdManage/OpenIdApi';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import Loader from './Components/Loader';


const App = observer(() => {
    
    const {store} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        oidcManager.getUser()
        .then( user => 
            { 
                if(user){
                    store.setUser(user);
                    setLoading(false);
                    
                }
                else
                {
                    console.log("not login");
                    setLoading(false);
                }

            }).catch((e)=>console.log(e))
    },[]);

    if (loading) {
        return <Loader/>
    }

    return (
            <BrowserRouter>
             {store.getUser&&<Navbar/>}   
                <AppRouter/>
            </BrowserRouter>
    );
})

export default App;
