
import { Grid, Avatar } from "@mui/material";
const Message = ({message, userId}) => {
    
    return (

        <div style={{
                    margin: 10,
                    border: userId === message.uid ? '2px solid green' : '2px dashed red',
                    marginLeft: userId === message.uid ? 'auto' : '10px',
                    width: 'fit-content',
                    padding: 5,
                }}>
                <Grid container>
                    <Avatar src={message.photoURL}/>
                    <div>{message.displayName}</div>
                </Grid>
                <div>{message.text}</div>
                        
        </div>
    )
}
export default Message;