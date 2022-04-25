import { Container , Grid, Button} from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import {Context} from '../index';

const Login = () => {
    const {auth} = useContext(Context);
   
    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50 }}
                alignItems="center"
                justifyContent="center"
            >    
                 <Grid style ={{width:400, border: 'DarkOrchid 2px solid', background: 'Azure'}}
                    container
                    alignItems="center"
                    justifyContent="center"
                 >
                    <Box p={5}>
                        <Button color = 'secondary' variant="contained">Войти с помощью Google</Button>
                    </Box>
                 </Grid>
            </Grid>
        </Container>
    )
}
export default Login;