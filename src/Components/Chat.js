import { Button, Container, Grid, TextField } from "@mui/material";
import { margin } from "@mui/system";
import { useState } from "react";

const Chat = () => {
    
    const [fieldValue, setFieldValue] = useState('');

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