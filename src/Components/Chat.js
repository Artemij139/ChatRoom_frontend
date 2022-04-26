import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { buildConnection } from "../Utils/Connection";
import {Context} from '../index';

const Chat = () => {
    const {store} = useContext(Context);
    const [fieldValue, setFieldValue] = useState('');
    

    useEffect(() => {
        const con =  buildConnection();
        store.SetConnection(con);
    },[]);

    

    const SendMessage = () => {
        console.log(fieldValue);
    }

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
                            onClick = {SendMessage}
                            variant="contained" 
                            style={{marginTop: 5}}
                        >Отправить</Button>
                    </Grid>
                </Grid>
        </Container>
    )
}
export default Chat;