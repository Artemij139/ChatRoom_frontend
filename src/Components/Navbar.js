import { AppBar, Toolbar, Grid, Button } from "@mui/material";

import { Logout } from "../OpenIdManage/OpenIdApi";



const Navbar = () => {

    
    const  AppLogoutAsync = async () => {
            await Logout();
    }

    return (
        <AppBar  position="static">
            <Toolbar variant="dense" >
                <Grid container justifyContent={'flex-end'}>
                   
                        <Button  
                            color = 'secondary' 
                            variant="contained"
                            onClick={AppLogoutAsync}
                        >
                            Выйти</Button>
                
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;