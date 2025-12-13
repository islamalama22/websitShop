import React from 'react'
//  import  the  mui 
import { Typography ,Link, Box } from '@mui/material'
//  import  css file 
import styles from './home.module.css'



function Home() {
  return (
    <Box>
      <Typography  className='bg' variant='h6' component="h1">Home</Typography>
      <Typography sx={{background:'red' ,fontSize:'12px'}} component="p">Hi Soos</Typography>
      <Typography bgcolor={'red'}  ml={3} component="h3">Home is live</Typography>
      <Link> detalis</Link>
    </Box>
  );
}

export default Home;
