import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {Context} from '../index';

const Navbar = () => {
    const {auth} = useContext(Context);
    
    return (
        <AppBar  position="static">
            <Toolbar variant="dense" >
                <Grid container justifyContent={'flex-end'}>
                    {!auth? <NavLink to='/login'>
                                <Button  color = 'secondary' variant="contained">  Логин </Button>
                             </NavLink>
                    :
                    <Button   color = 'secondary' variant="contained">  Выйти </Button>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;