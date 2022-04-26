import { makeAutoObservable } from "mobx";
import {MockMessages} from '../Constansts/MockConstans';

export default class GlobalStore{
    
    constructor(){
        this.connection = null
        this.messages = MockMessages
        makeAutoObservable(this)
    }

    setConnection(connection){
        this.connection =connection;
    }

    setMessages(messages){
        this.messages =messages;
    }

    get getConnection(){
        return this.connection;
    }

    get getMessages(){
        return this.messages;
    }

}