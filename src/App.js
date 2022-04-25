import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AppRouter from './Routes/AppRouter';
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import { useEffect, useState } from 'react';
import { HubAddress } from './Constansts/Constants';
import { Button } from '@mui/material';


function App() {
    const newUser = "newUser";
    const hello = "hello";

    const[connection, SetConnection] = useState('')

    useEffect(() => {
        buildConnection();

      },[]);
      
  const buildConnection = async () =>{
    const connection = new HubConnectionBuilder()
        .withUrl(HubAddress)
        .configureLogging(LogLevel.Information)
        .build();

    connection.on("SendMessageAsync", (user, message) => {
        console.log(message);
    });
    
    await connection.start();
    await connection.invoke("SendMessageAsync", newUser, hello);

    SetConnection(connection);
  }
  
  return (
    <BrowserRouter>
        <Navbar/>
        <Button variant='contained' onClick={()=> {connection.invoke("SendMessageAsync", newUser, hello) }}>sdfsd</Button>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
