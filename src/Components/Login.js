import { Container , Grid, Button, } from "@mui/material";
import { Box } from "@mui/system";
import { Context } from "../index";
import { getAccessTokenAsync, oidcManager } from "../Constansts/Constants";
import { useContext } from "react";
import { TestFunc } from "../http/UserApi";



const Login = () => {

    const UserLogin = () => oidcManager.signinRedirect() ;
    const {store} = useContext(Context);

    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50 }}
                alignItems="center"
                justifyContent="center"
            >    
                 <Grid style ={{width:400, border: 'DarkOrchid 2px solid', background: 'Azure'}}>
                    <Box p={5}>
                        <Button   color = 'secondary' variant="contained">Войти с помощью Google</Button>
                        {/* <Box mt={1}>    
                           {!showForm?<Button  onClick = {()=>setShowForm(true)} color = 'primary' variant="contained">Войти</Button>:
                           <Button  onClick = {()=>{userLogin(loginData);setShowForm(false) }} color = 'primary' variant="contained">Подтвердить</Button>} 
                        </Box> */}
                        <Box mt={1}>    
                           <Button  onClick = {UserLogin} color = 'primary' variant="contained">Войти</Button>
                        </Box>
                        <Box mt={1}>    
                           <Button  onClick = {TestFunc} color = 'primary' variant="contained">Токен</Button>
                        </Box>
                        
                     {/* {showForm&&
                            <Box  mt= {2}>
                                <TextField 
                                    size = 'small' 
                                    id="outlined-basic" 
                                    label="Username" 
                                    variant="outlined"  
                                    style={{marginBottom:5}}
                                    value ={loginData.username}
                                    onChange ={e=> setLoginData({...loginData, Name: e.target.value})}
                                   
                                />
                                <TextField 
                                    size = 'small' 
                                    type ="password"
                                    id="outlined-basic" 
                                    label="Password" 
                                    variant="outlined" 
                                    value ={loginData.password}
                                    onChange = {e=> setLoginData({...loginData, Password: e.target.value})}
                                />
                            </Box >
                        }    */}
                    </Box>
                 </Grid>
            </Grid>
        </Container>
    )
}
export default Login;