import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import {Context} from '../index';
import { observer } from "mobx-react-lite";
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {HubAddress}  from '../Constansts/Constants';
import { toJS } from 'mobx';
import Message from "./Message";

const Chat = observer(() => {
    
    const {store} = useContext(Context);
    const [fieldValue, setFieldValue] = useState('');
     
    const CreateConnetion = async () =>{
        
        const con =  new HubConnectionBuilder()
        .withUrl(HubAddress)
        .configureLogging(LogLevel.Information)
        .build();   

        await con.on("SendMessageAsync", (userName, text) => {
            store.setMessages([...store.getMessages, {userName, text} ])
        });

        await con.start();  
        
        store.setConnection(con);
    }

    const SendMessage = async () => {
        await store.getConnection.invoke("SendMessageAsync", store.getUser.name, fieldValue);
    }

    useEffect(() => {
        CreateConnetion();
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
                            <Message message = {message}/>
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
                    </Grid>
                </Grid>
        </Container>
    )
})
export default Chat;