import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';

function Product() {

   const {mutate:addToCart,isPending}=useAddToCart();

    const {id}=useParams();
    const  {isLoading,isError,data}=useProduct(id);
    const product=data?.response;
    const reviwes=product.reviews;

   console.log(' one  product  detalis Api:',product);
    console.log(' product  reviwes ',reviwes);

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
                <Button   onClick={()=>addToCart({ProductId:product.id , Count:1} )}
                           disabled={isPending} 
                 variant='contained' color='primary'> add  to  cart </Button>


            </Grid>
        </Grid>
        <Box sx={{padding:2}}>
            <Typography> {product.description}</Typography>
        </Box>
     </Card>

    </Box>

    <Box component={'section'}    sx={{display:'flex' ,flexDirection:'column' ,padding:2,gap:2}}  >
    <Typography variant='h6'> users  reviwes</Typography>
           {reviwes.map((reviwe)=>
             <Box component={'div'}   sx={{ padding:1.5, border:1 ,borderColor:'rgb(186, 186, 181)'  , borderRadius:1,  }} >
                 <Typography sx={{fontSize:'0.9rem',textTransform:'capitalize' }}> {reviwe.userName}</Typography>
                    <Box sx={{display:"flex" , justifyContent:'space-between'}}>
                        <Typography sx={{fontSize:'0.7rem'}}> {reviwe.comment} </Typography>
                        <Rating value={Number(reviwe.rating)}> </Rating>
                    </Box>
             </Box>
           
           )}
    </Box>

   </>
  )
}

export default Product
