import React from 'react';
import {useLocation} from "react-router-dom"
import {Grid,Card,CardMedia,CardContent,Typography} from "@mui/material";

const ResultsComponent = () => {
    const location=useLocation();
    const { results } = location.state || {};

  return (
    <Grid container spacing={2}>
    {results.map((result) => (
        <Grid item key={result.id} xs={12} sm={6} md={4} lg={3} sx={{margin:"50px"}}>
        <Card sx={{height:"400px", position: 'relative', '&:hover': { boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.5)' } }}>
        <CardMedia
         component="img"
         height="300"
         image={result.image}
         alt={result.title}
        />
        <CardContent>
            <Typography  component="div" sx={{fontSize:"20px"}}>{result.title}</Typography>
        </CardContent>
     </Card>
    </Grid>
    ))}
  </Grid>
  );
};

export default ResultsComponent;
