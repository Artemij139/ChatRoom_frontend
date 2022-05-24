import { AppBar, Toolbar, Grid, Button } from "@mui/material";

import { observer } from "mobx-react-lite";
import { Logout } from "../OpenIdManage/OpenIdApi";
import { Context } from "../index";
import { useContext } from "react";

const Navbar = observer(() => {
    const {store} = useContext(Context);
    
    const  AppLogoutAsync = async () => {
       store.setIsAuth(false);
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
})
export default Navbar;