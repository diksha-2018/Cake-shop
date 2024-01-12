import React from 'react'
import {AppBar,Typography,Button, Toolbar} from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position='static'>
        <Toolbar >
        <Typography variant="h5" flexGrow={1}>Blissful bytes</Typography>
        <Button  onClick={()=>navigate("/signup")} variant="text" color='inherit' startIcon={<LoginIcon/>}>Login</Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;


//<Button variant="text" color='inherit' endIcon={<LogoutIcon/>}>Logout</Button>