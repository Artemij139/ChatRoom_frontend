import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import {Context} from '../index';
import { observer } from "mobx-react-lite";
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {HubAddress}  from '../Constansts/Constants';

const Chat = observer(() => {
    
    const {store} = useContext(Context);
    const [fieldValue, setFieldValue] = useState('');
     
    const CreateConnetion = async () =>{
        
        const con =  new HubConnectionBuilder()
        .withUrl(HubAddress)
        .configureLogging(LogLevel.Information)
        .build();   

        await con.on("SendMessageAsync", (user, message) => {
            store.setMessages([...store.getMessages, {user, message} ])
        });

        await con.start();    
        await con.invoke("SendMessageAsync", "Artem", " I Joined Chat!");
        console.log(store.getMessages);
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
                    border: '1px solid DarkOrchid', 
                    overflowY: 'auto',
                    marginTop:20
                    }}> 
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
                           
                            variant="contained" 
                            style={{marginTop: 5}}
                        >Отправить</Button>
                    </Grid>
                </Grid>
        </Container>
    )
})
export default Chat;