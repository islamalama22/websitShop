import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Grid, Rating, Typography } from '@mui/material';

function Product() {

    const {id}=useParams();
    const  {isLoading,isError,data}=useProduct(id);
    console.log('product  detalis Api responce:')
    const product=data.response;
    console.log(product);

    if(isError ) return <Typography> error</Typography>
    if(isLoading) return <CircularProgress></CircularProgress>


      return (
   <>
    <Box component={'section'}  sx={{padding:2}}>
     <Card  sx={{padding:3}}>
        <Grid sx={{display:"flex" , alignContent:"center" ,alignItems:"center" }} container spacing={3}>
            <Grid item  size={{xs:12,md:5 }}>
                  <CardMedia component={'img'}  image={product.image} sx={{height:300 ,objectFit:'contain'}}></CardMedia>
            
            </Grid>

            <Grid  sx={{display:"flex" ,  flexDirection:"column",gap:1 , alignItems:'flex-start'}} item size={{xs:12,md:7 }} >
                <Typography component={'h1'} variant='h3'> {product.name}</Typography>
                <Typography component={'h1'} variant='h4'> ${product.price}</Typography>
                <Rating value={product.rate}></Rating>
                <Typography component={'h3'} variant='h3'>  availabile quntity :{product.quantity}</Typography>
                <Button  variant='contained' color='primary'> add  to  cart </Button>


            </Grid>
        </Grid>
        <Box sx={{padding:2}}>
            <Typography> {product.description}</Typography>
        </Box>
     </Card>

    </Box>
   </>
  )
}

export default Product
