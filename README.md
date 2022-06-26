# ChatRoom_frontend
This is a real-time chat application. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This is a client part of app. Backend located on https://github.com/Artemij139/ChatRoom_backend. For authorization with identity server 4  used <b>oidc-client-js package</b>. For real-time data transfer, used <b>@microsoft/signalr</b>(WebSocket only).

## User interface description
When you launch the application, the login page will open. Click enter("Войти"), you will be redirected to the authorization page. First time, you need to register ("Зарегистрируйся!"). Fill out the form and click enter.  After that, you will be redirected to the chat page, where you will be able to send messages("Отправить").
To exit the application, click exit button("Выйти").

### App start
- Firstly run the backend part 
- Execute command "<b>npm install</b>" to restore npm packages
- Execute command "<b>npm start</b>" to start app
<b>expected that this project will be launched at http://localhost:3000</b>


