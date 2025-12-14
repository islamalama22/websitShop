import React from 'react'
import { Box, TextField, Typography, Button } from '@mui/material' 

// hooks 
import { useForm } from 'react-hook-form'
import axios from 'axios'
//  validation
import * as yup from 'yup'
//  validation 
import { yupResolver } from '@hookform/resolvers/yup';


//  schema  its for  validation
//  clint  sid validation
const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  username: yup
    .string()
    .min(4, 'Username must be at least 4 characters')
    .matches(/^[a-zA-Z0-9._-]+$/, 'Invalid username')
    .required('Username is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Must contain at least one number')
    .matches(/[@#$&?!]/, 'Must contain at least one special character')
    .required('Password is required'),
});


function Register() {
  //  form  hook  used  in input  and  halp  to  do  validtion
  //  resolver  its  in  each  send to  values  chaek  the  values 
  // resolver  ://  it  will  provent  the  clinet  to  send  requst  befor  chaek  the  inputs

  const { register, handleSubmit ,formState:{errors} } = useForm({
    resolver:yupResolver(schema),
    // to  show the  error  in the  bulre
    mode:"onBlur"
  });

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
        <TextField {...register('userName')} label="user name" fullWidth variant='outlined' 
          error={errors.userName} helperText={errors.userName?.message}
        />
        <TextField  {...register('fullName')} label="Full  Nmae" fullWidth variant='outlined' 
           error={errors.fullName} helperText={errors.fullName?.message}
        />
        <TextField {...register('email')} label="User  Email" fullWidth variant='outlined'
         error={errors.email} helperText={errors.email?.message} />
        <TextField {...register('password')} label="Password" fullWidth variant='outlined'
          error={errors.password} helperText={errors.password?.message}
           />
        <TextField {...register('phoneNumber')} label="Phone  Number" fullWidth variant='outlined' 
        error={errors.phoneNumber} helperText={errors.phoneNumber?.message}
        />

        <Button variant="contained" type="submit">Register</Button>

      </Box>

    </Box>
  )
}

export default Register
