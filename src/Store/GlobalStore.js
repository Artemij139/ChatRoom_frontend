import { makeAutoObservable } from "mobx";
import {MockMessages} from '../OpenIdManage/MockConstans';

export default class GlobalStore{
    
    constructor(){
        this.user = {name: "Artem"}
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

    get getAuth(){
        return this.isAuth;
    }

    setIsAuth(bool){
        this.isAuth =bool;
    }

    setUser(user){
        this.user = user;
    }

}