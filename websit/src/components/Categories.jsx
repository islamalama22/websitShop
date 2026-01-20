import { useEffect } from 'react'
import React, { useState } from 'react'
import axioInstance from '../API/axiosInstance'
import { Box, Grid, Typography, Card, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import useCategories from '../hooks/useCategories'

function Categories() {
   const {isLoading,isError,data}=useCategories();

  if(isLoading) return <> <CircularProgress>  </CircularProgress>  </>
  if(isError) return <>
   <Typography>  error </Typography>  </>

 
  return (
    <>
      <Box p={3} >
        <Typography component={'h2'} variant="h4">  Categories</Typography>
      </Box>
      {
        <container>
          <Grid container spacing={2}>
            {data.map((categyory) =>
              <Grid p={4} textAlign={'center'} key={categyory.id} item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Card > {categyory.id} </Card>
              </Grid>
            )}
          </Grid>
        </container>
      }
    </>
  )
}

export default Categories
