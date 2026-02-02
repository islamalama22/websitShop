import React from 'react'
import useProfile from '../../hooks/useProfile'
import { Typography } from '@mui/material';

export default function ProfileOrders() {
    const {data ,isError,isLoading}=useProfile();
   

  return (
  <Typography>  profile orders  </Typography>
//  { // data.map}
  )
}
