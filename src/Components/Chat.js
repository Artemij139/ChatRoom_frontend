import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import {Context} from '../index';
import { observer } from "mobx-react-lite";
import {HubConnectionBuilder, LogLevel, HttpTransportType} from '@microsoft/signalr';
import { HubAddress}  from '../Routes/RoutesConsts';
import Message from "./Message";
import { v4 as uuidv4 } from 'uuid';
import { getRefreshTokenAsync, oidcManager } from "../OpenIdManage/OpenIdApi";


const Chat = observer(() => {
   
    const {store} = useContext(Context);
    const [fieldValue, setFieldValue] = useState('');
     
    const CreateConnetion = async () =>{
        
        const con =  new HubConnectionBuilder()
        .withUrl(HubAddress,    
        {   
            skipNegotiation: true,
		    transport: HttpTransportType.WebSockets,
            accessTokenFactory: () => {
                return store.getUser.access_token                                       
             }
        })
        .configureLogging(LogLevel.Information)
        .build();   
        await con.start();

        await con.on("SendMessageAsync", (userName, text) => {
            store.setMessages([...store.getMessages, {userName, text} ])
        });

        store.setConnection(con);
    }

    const SendMessage = async () => {
        await store.getConnection.invoke("SendMessageAsync", store.getUser.profile.name, fieldValue);
    }

    useEffect(() => {
        CreateConnetion().catch(()=>getRefreshTokenAsync()).then(user=>store.setUser(user)).then(()=>CreateConnetion());
    },[]);

  
    return (

        <Container>
              <Grid container
                style={{height: window.innerHeight - 50 }}
                justifyContent="center"
              >    
                <div 
                    style = {{width: '80%', 
                    height: '70vh', 
                    border: '2px solid DarkOrchid', 
                    overflowY: 'auto',
                    marginTop:20
                    }}> 
                        {store.getMessages.map(message =>
                            <Message key ={uuidv4()} message = {message}/>
                        )}
                </div>            
                <Grid   
                        container
                        direction='column'
                        alignItems='flex-end'
                        style={{width:'80%'}}
                    >
                        <TextField 
                            fullWidth
                            multiline
                            maxRows={2}
                            value ={fieldValue}
                            onChange ={e=> setFieldValue(e.target.value)}
                        />
                        <Button 
                            onClick = {SendMessage}
                            variant="contained" 
                            style={{marginTop: 5}}
                        >Отправить</Button>

                        <Button 
                            onClick = {getRefreshTokenAsync}
                            variant="contained" 
                            style={{marginTop: 5}}
                        >Токен</Button>
                    </Grid>
                </Grid>
        </Container>
    )
})
export default Chat;