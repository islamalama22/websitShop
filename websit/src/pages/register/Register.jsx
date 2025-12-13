import React from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'

// hooks 
import { useForm } from 'react-hook-form'
import axios from 'axios'


function Register() {
  //  form  hook  used  in input  and  halp  to  do  validtion
  const { register, handleSubmit } = useForm({});

  const registerForm = async(values) => {
    console.log(values);
    try {
      const response=await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`,values);
      //  it  will  returen  status 201 :  added data   susccfully    ,   200 :  succfully 
      console.log(response);
    } catch (err) {
    console.log(err)
    }

  }
  return (
    <Box className="register-form">
      <Typography variant='' > register  page</Typography>

      <Box onSubmit={handleSubmit(registerForm)} component={"form"} sx={{ display: 'flex', flexDirection: "column", gap: 3, mt: 5, alignItems: "flex-start" }} >
        <TextField {...register('userName')} label="user name" fullWidth variant='outlined' />
        <TextField  {...register('fullName')} label="Full  Nmae" fullWidth variant='outlined' />
        <TextField {...register('email')} label="User  Email" fullWidth variant='outlined' />
        <TextField {...register('password')} label="Password" fullWidth variant='outlined' />
        <TextField {...register('phoneNumber')} label="Phone  Number" fullWidth variant='outlined' />

        <Button variant="contained" type="submit">Register</Button>

      </Box>

    </Box>
  )
}

export default Register
