import { makeAutoObservable } from "mobx";
import {MockMessages} from '../OpenIdManage/Constans';

export default class GlobalStore{
    
    constructor(){
        this.user = null
        this.connection = null
        this.messages = MockMessages
        this.isAuth = false
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

    get getUser(){
        return this.user;
    }

    setUser(user){
        this.user = user;
    }

}