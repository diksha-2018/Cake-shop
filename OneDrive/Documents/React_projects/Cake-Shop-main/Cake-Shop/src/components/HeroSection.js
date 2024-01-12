import React,{useState} from 'react'
import {Typography,Grid,Box,Button} from "@mui/material"
import cake from '../images/cake.jpg'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const HeroSection = () => {
    const [data, setData] = useState([]);
    const navigate=useNavigate();

  const handleClick = async () => {
    try {
      const response = await axios.get("https://the-birthday-cake-db.p.rapidapi.com/", {
        headers: {
            'X-RapidAPI-Key': '89c0fd3a63msh1ac22a4d541fb83p17c8d1jsn1c0e90bf16c4',
            'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
        },
      });
      navigate('/results', { state: { results: response.data } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
            <Typography variant="h3">
                A bliss in every bite
            </Typography>
            <Typography variant="h6">
                We offer tasty cakes and sweets for you.
            </Typography>
            <Button variant='contained' size="large" sx={{borderRadius:'10px'}} onClick={handleClick}>order now</Button>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
            <Box className="image" component="img" src="https://cdn.pixabay.com/photo/2016/10/27/22/12/cakes-1776661_1280.jpg"></Box>
        </Grid>
    </Grid>
  )
}

export default HeroSection;