import './App.css';
import { useContext, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AppRouter from './Routes/AppRouter';
import { oidcManager } from './Constansts/Constants';
import { Context } from './index';


function App() {
    const {store} = useContext(Context);

    useEffect(() => {
        oidcManager.getUser().then(
             user => { user? store.setUser(user): console.log("not loggin!")}
         )
        
     },[]);

    return (
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
    );
}

export default App;
