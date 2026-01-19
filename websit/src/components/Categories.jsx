import { useEffect } from 'react'
import React, { useState } from 'react'
import axioInstance from '../API/axiosInstance'
import { Box, Grid, Typography, Card } from '@mui/material';

function Categories() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const response = await axioInstance.get(`/Categories`);
      console.log('this is  responce  of  category  api : ');
      console.log(response.data.response);
      setCategories(response.data?.response);
    }
    catch (err) {
      console.log('this is ERROR  of  category  api : ');
      console.log(err);
    }
  }

  useEffect(() => {
    getCategories();
  }, [])




  return (
    <>
      <Box p={3} >
        <Typography component={'h2'} variant="h4">  Categories</Typography>

      </Box>
      {
        <container>
          <Grid container spacing={2}>
            {categories.map((categyory) =>
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
