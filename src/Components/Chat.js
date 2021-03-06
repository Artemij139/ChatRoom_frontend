import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import {Context} from '../index';
import { observer } from "mobx-react-lite";
import {HubConnectionBuilder, LogLevel, HttpTransportType} from '@microsoft/signalr';
import { HubAddress}  from '../Routes/RoutesConsts';
import Message from "./Message";
import { v4 as uuidv4 } from 'uuid';
import { getRefreshTokenAsync } from "../OpenIdManage/OpenIdApi";
import { toJS } from 'mobx'

const Chat = observer(() => {
   
    const {store} = useContext(Context);
    const [fieldValue, setFieldValue] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    
    console.log(allUsers);
    console.log(toJS(store.getMessages));
    const CreateConnetion = async (hoba) =>{
        
        const con =  new HubConnectionBuilder()
        .withUrl(HubAddress,    
        {   
            skipNegotiation: true,
		    transport: HttpTransportType.WebSockets,
            accessTokenFactory: ()=>{ return hoba? hoba: store.getUser.access_token}                         
            
        })
        .configureLogging(LogLevel.Information)
        .build();   
        await con.start();

        await con.on("SendMessageAsync", (userName, text) => {
            store.setMessages([...store.getMessages, {userName, text} ])
        });

        await con.on("UpdateUsersAsync", (users) => {
            setAllUsers(users)
            console.log(users);
        });

        await con.on("UpdateMessagesAsync", (mess) => {
            store.setMessages(mess)
            console.log(mess);
        });

        store.setConnection(con);
    }

    const SendMessage = async () => {
        await store.getConnection.invoke("SendMessageAsync", store.getUser.profile.name, fieldValue);
    }


    useEffect(() => {
        CreateConnetion()
        .catch(
            ()=>{
                getRefreshTokenAsync().then((user)=>CreateConnetion(user.access_token)); 
            }
        )
        
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
                                <Message key ={message.id} message = {message}/>
                            )}
                    </div> 
                    <div 
                        style = {{width: '15%', 
                        height: '70vh', 
                        border: '2px solid #1976d2', 
                        overflowY: 'auto',
                        marginTop:20,
                        marginLeft:5,
                        padding:10
                        }}> 
                            {allUsers.map((user,index) =>
                                <li key ={index} style={{listStyleType:'circle'}}>{user}</li>
                            )}
                    </div>                   
                <Grid   
                        container
                        direction='column'
                        alignItems='flex-end'
                        style={{width:'95%'}}
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
                        >??????????????????</Button>

                        {/* <Button 
                            onClick = { ()=>{
                                console.log(store.getUser.access_token);  
                            }}
                            variant="contained" 
                            style={{marginTop: 5}}
                        >??????????</Button> */}
                    </Grid>
                </Grid>
        </Container>
    )
})
export default Chat;