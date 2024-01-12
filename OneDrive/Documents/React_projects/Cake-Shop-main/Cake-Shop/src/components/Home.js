import React, {useState ,useEffect } from 'react'
import {AppBar,Typography,Button, Toolbar} from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { createTheme ,ThemeProvider} from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';
import axios from "axios";

const theme = createTheme({
  palette: {
    primary: lightGreen,
  },
});

const Home = () => {
  const location = useLocation();
  const userEmail = location.state?.userEmail || null;
  const email = userEmail.toString()
  const [name] = email.split('@');

  const logOut=()=>{
    if(userEmail)
    {
      window.location.href = '/';
    }
  }
  
  return (
    <ThemeProvider theme={theme}>
    <AppBar position='static' >
        <Toolbar >
        <Typography variant="h5" flexGrow={1}>Blissful bytes</Typography>
        <Button variant="text" color='inherit' endIcon={<LogoutIcon/>} onClick={logOut}>Logout</Button>
        </Toolbar>
    </AppBar>
    <Typography variant="h4" flexGrow={1} sx={{textAlign:"center",marginTop:"200px",fontWeight:"bold"}}>Welcome! {name} </Typography>
    </ThemeProvider>
  )
}

export default Home;


// {loggedInUser && <Typography variant="h4">Welcome! {loggedInUser}</Typography>}


//{userEmail && (<Typography variant="h4" flexGrow={1}>Welcome! {name} </Typography>)}