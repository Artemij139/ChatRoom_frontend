
import { Grid, Avatar } from "@mui/material";
import './Components.css';
const Message = ({message, userId}) => {
    
    return (

        // <div className='user-message'>
        //     <div className="message ">{message.text}</div>
        //     <div className="from-user">{message.userName}</div>
        // </div>
        <div style={{
                    margin: 10,
                    border: userId === message.uid ? '2px solid DodgerBlue' : '2px solid SlateBlue',
                    marginLeft: userId === message.uid ? 'auto' : '10px',
                    width: 'fit-content',
                    padding: 5,
                }}>
                
                <div>{message.text}</div>
                <Grid container justifyContent="flex-end">
                    {/* <Avatar src={message.photoURL}/> */}
                    <div style={{fontSize: 'small'}}>{message.userName}</div>
                </Grid>
                        
        </div>
    )}

export default Message;