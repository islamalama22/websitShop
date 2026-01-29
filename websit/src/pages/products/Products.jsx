import React, { useState } from 'react'
import { useProducts } from '../../hooks/useProducts';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardContent, CardMedia, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {Box}  from '@mui/material'

export default function Products() {
    const {t}=useTranslation();
    const {register,handleSubmit}=useForm({
        defaultValues:{
            search:"",
            categoryId:"",
            minPrice:"",
            maxPrice:""
        }
    })

    const [activeFilters,setActiveFilters]=useState({});

    const {isLoading,isError,data}=useProducts(activeFilters);
    const applyFilters=(values)=>{
        setActiveFilters({
            search:values.search || null,
            categoryId:values.categoryId || null,
            minPrice:values.minPrice || null,
            maxPrice:values.maxPrice || null


        })
    }
    console.log('product  array:')
    console.log(data);
    if(isLoading) return<CircularProgress></CircularProgress>
    if(isError) return <Typography > error </Typography>

  return (
      <>
      <Box  sx={{display:'flex' ,flexDirection:"column"}} component={'form'} onSubmit={handleSubmit(applyFilters)} >
        
      <TextField  {...register ("search") } label='search' />
      <TextField  {...register ("categoryId") } label='categyory' />
    <TextField  {...register ("minPrice") } label='minPrice' />
   <TextField  {...register ("maxPrice") } label='maxPrice' />

     <Button   color='dark' type='submit'> apply  submit</Button>
      </Box>

        <Typography component={'h2'} textTransform={'capitalize'} > products all filter page </Typography>
        <Grid  container spacing={4}  sx={{display:"flex" , flex:"nowarp" , alignContent:"space-between" , justifyContent:"center" ,alignItems:"center"}}>
            {data.response.data.map((product) =>
             <Grid  key={product.id} size={{xs:12,sm:6,md:5,lg:3}}>
             <Link to={`/Products/${product.id}`}>
             <Card  >
                <CardMedia component='img' image={product.image} alt={product.title}  sx={{objectFite:'contain', height:200 ,  }}></CardMedia>
                <CardContent>
                    <Typography component={'h3'}>{product.name}</Typography>
                    <Typography component={'span'}>price: {product.price}$</Typography>
                    <Typography component={'h3'}> rate :{product.rate}</Typography>
                    <Typography component={'h3'}>{product.name}</Typography>

                </CardContent>
             </Card>
             </Link>

             </Grid>
            )}
        </Grid>
    </>
  )
}
