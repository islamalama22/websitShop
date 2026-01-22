import React from 'react'
import { useProducts } from '../../hooks/useProducts'
import { Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import useFetch from '../../hooks/useFetch';

function Products() {
    const {isLoading,isError,data}=useProducts();
    console.log('product  array:')
    console.log(data);
    if(isLoading) return<CircularProgress></CircularProgress>
    if(isError) return <Typography > error </Typography>
  return (
    <>
        <Typography component={'h2'} textTransform={'capitalize'} > products</Typography>

        <Grid  container spacing={4}  sx={{display:"flex" , flex:"nowarp" , alignContent:"space-between" , justifyContent:"center" ,alignItems:"center"}}>
            {data.response.data.map((product) =>
             <Grid  key={product.id} size={{xs:12,sm:6,md:5,lg:3}}>
             <Card  >
                <CardMedia component='img' image={product.image} alt={product.title}  sx={{objectFite:'contain', height:200 ,  }}></CardMedia>
                <CardContent>
                    <Typography component={'h3'}>{product.name}</Typography>
                    <Typography component={'span'}>price: {product.price}$</Typography>
                    <Typography component={'h3'}> rate :{product.rate}</Typography>
                    <Typography component={'h3'}>{product.name}</Typography>

                </CardContent>
             </Card>


             </Grid>
            )}
        </Grid>
    </>
  )
}

export default Products
