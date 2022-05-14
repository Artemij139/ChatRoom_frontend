import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {Context} from '../index';
import { observer } from "mobx-react-lite";

const Navbar = observer(() => {
    const {store} = useContext(Context);
    
    return (
        <AppBar  position="static">
            <Toolbar variant="dense" >
                <Grid container justifyContent={'flex-end'}>
                    {!store.isAuth? <NavLink to='/login'>
                                <Button  color = 'secondary' variant="contained">  Логин </Button>
                             </NavLink>
                    :
                    <Button   color = 'secondary' variant="contained">  Выйти </Button>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
})
export default Navbar;