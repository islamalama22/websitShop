import React from 'react'
import useProfile from '../../hooks/useProfile';
import { Button, CircularProgress, Typography ,Box  } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';


export default function ProfileLayout() {
  
  return (
    <Box>
      <Typography> my  profile </Typography>
      <Button  color='dark' component={NavLink} to='' > info </Button>
      <Button  color='dark'  component={NavLink}  to='orders' > ORDERS</Button>

      <Outlet/>
    </Box>
  )
}
