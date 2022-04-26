
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import {HubAddress}  from '../Constansts/Constants';


export const buildConnection = async () => {

    const con =  new HubConnectionBuilder()
                        .withUrl(HubAddress)
                        .configureLogging(LogLevel.Information)
                        .build();   

    await con.on("SendMessageAsync", (user, message) => {
        console.log(user,'send', message);
    });

    await con.start();    
    
    await con.invoke("SendMessageAsync", "Artem", " I Joined Chat!");
    return con;
} 


