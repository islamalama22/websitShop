import React from 'react'
import useProfile from '../../hooks/useProfile'
import { Box, Button, CircularProgress, InputLabel, TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';


export default function ProfileInfo() {

 const {data,isError,isPending}=useProfile();
 console.log('the profile api data',data);
  if(isError) return <Typography>isError</Typography>
 if(isPending) return <CircularProgress></CircularProgress>

  return (
    <>
    <Typography variant='h3' sx={{padding:1,fontSize:'2.5rem'}}> user Information </Typography>
    <Box  variant="contained" sx={{padding:3, borderColor:'#e7e4e4', border:1 ,fontSize:'2rem' }}>
       <Box sx={{color:'#000', display: 'flex', alignItems: 'flex-end' }}>
        <InputLabel sx={{textTransform:'capitalize' ,color:'#000', pr:6 }}> full  name </InputLabel>
        <AccountCircle sx={{  mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  value={data.fullName} variant="standard" />
      </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <InputLabel sx={{textTransform:'capitalize' ,color:'#000', pr:6 }}> Email </InputLabel>
        <TextField id="input-with-sx"  value={data.email} variant="standard" />
      </Box> 
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <InputLabel sx={{textTransform:'capitalize' , color:'#000',pr:6 }}> Phone Number </InputLabel>
        <TextField id="input-with-sx"  value={data.phoneNumber} variant="standard" />
      </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <InputLabel sx={{textTransform:'capitalize' , pr:6 ,color:'#000' }}> City </InputLabel>
        <TextField id="input-with-sx"  value={data.city} variant="standard" />
      </Box>
      <Button  variant="contained" sx={{color:'dark'}} > Edit Information</Button>
    </Box>

    </>
  )
}
