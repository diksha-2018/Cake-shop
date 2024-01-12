import React from 'react'
import {Typography,Card,CardContent,CardMedia,Stack} from "@mui/material"

const CardSection = () => {
    const cakes=[{
        name:"Red Valvet",image:"https://img.freepik.com/free-photo/delicious-sweet-cake-with-strawberries-baiser-plate_181624-29179.jpg?w=1060&t=st=1688144512~exp=1688145112~hmac=93dc2edf7b31fe1c2ed7f56a4c2717a001868d9323276dfa5192b70c5f3bde7c"
    },
    {name:"Choclate cake",image:"https://img.freepik.com/free-photo/chocolate-cake-with-dried-fruit_144627-9029.jpg?w=1060&t=st=1688214402~exp=1688215002~hmac=95dff3c00f2053a6f7680467e6dc1689791452b4e5019ad58aa0471ca7d33104"

    },
    {
        name:"Strawberry",image:"https://img.freepik.com/free-photo/vanilla-cake-dessert-with-strawberry-top_1203-8937.jpg?w=1060&t=st=1688213509~exp=1688214109~hmac=8afcf9ff889502aa478ab174b721bd9d680d12bff3a5d3e5796f05d6a6136233"
    },
    {
      name:"Mix fruit",image:"https://img.freepik.com/free-photo/fruits-cake_1203-8378.jpg?w=1060&t=st=1688213611~exp=1688214211~hmac=557fe3e15c01f071e923f63ac53ed0445be6808468291cd5b1c23d0d0541fe8c"
    },
    {
      name:"Rose",image:"https://img.freepik.com/free-photo/wedding-cake-with-color-flores_144627-13809.jpg?w=1060&t=st=1688213703~exp=1688214303~hmac=846753e52bf816f69fe159f5ad68b04fb15111d568eaef1353cf1f68752216f5"
    }
   ]
  return (
    <>
      <Typography variant="h5" mb={2} mt={5} color={"green"}>Cakes</Typography>
      <Stack direction="row" justifyContent="space-evenly" spacing={4}>
        {
            cakes.map(cake=>{
              return(
                <Card sx={{ maxWidth: "300px" }}>
                <CardMedia
                component="img"
                height="200"
                  image={cake.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography variant="h5">
                    {cake.name}
                  </Typography>
                </CardContent>
                </Card>
              )
            })
        }
      </Stack>

    </>
  )
}

export default CardSection;