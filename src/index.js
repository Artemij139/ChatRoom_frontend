import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStore from './Store/GlobalStore';

export const Context = createContext(null);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Context.Provider value= {{ store: new GlobalStore()}}>
        <App/>
    </Context.Provider>
    
);


