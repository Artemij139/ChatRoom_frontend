import { Container , Grid, Button, } from "@mui/material";
import { Box } from "@mui/system";
import { Context } from "../index";
import { getAccessTokenAsync, oidcManager } from "../OpenIdManage/OpenIdApi";





const Login = () => {

    const UserLogin = () => oidcManager.signinRedirect() ;
    

    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50 }}
                alignItems="center"
                justifyContent="center"
            >    
                 <Grid 
                    container
                    alignItems="center"
                    justifyContent="center"
                    style = {{
                            width:400,
                            border: 'DarkOrchid 2px solid',
                            background: 'Azure',
                        }}>
                    <Box p={3}>
                         <Button  onClick = {UserLogin} color = 'secondary' variant="contained">Войти</Button>
                    </Box>
                 </Grid>
            </Grid>
        </Container>
    )
}
export default Login;