
import { Grid, Avatar } from "@mui/material";
import './Components.css';
import {Context} from '../index';
import {  useContext } from "react";
import { observer } from "mobx-react-lite";

const Message = observer(({message}) => {
    const {store} = useContext(Context);  
   
    return (

        <div style={{
                    margin: 10,
                    border: message.userName === store.getUser.profile.name ? '2px solid DodgerBlue' : '2px solid SlateBlue',
                    marginLeft: message.userName === store.getUser.profile.name ? 'auto' : '10px',
                    width: 'fit-content',
                    padding: 5,
                    color: message.userName === store.getUser.profile.name ? '2px solid DodgerBlue' : '2px solid SlateBlue',
                }}>
                
                <div>{message.text}</div>
                <Grid container justifyContent="flex-end">
                    {/* <Avatar src={message.photoURL}/> */}
                    <div style={{fontSize: 'small'}}>{message.userName}</div>
                </Grid>   
        </div>
    )})

export default Message;