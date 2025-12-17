import React, { useState } from 'react'
import { Box, TextField, Typography, Button, CircularProgress } from '@mui/material' 
 
// hooks 
import { useForm } from 'react-hook-form'
import axios from 'axios'
//  validation 
import RegisterSchema from '../../validations/RegisterSchema'
//  to  show the  errors  of schema
import { yupResolver } from '@hookform/resolvers/yup';






function Register() {
  //  errors from  the  backend like  the  id  is  taken  and  username  is taken  
  const [serverError,setServerErrors]=useState([]);


  //  form  hook  used  in input  and  halp  to  do  validtion
  //  resolver  its  in  each  send to  values  chaek  the  values 
  // resolver  ://  it  will  provent  the  clinet  to  send  requst  befor  chaek  the  inputs

  const { register, handleSubmit ,formState:{errors,isSubmitting} } = useForm({
    resolver:yupResolver(RegisterSchema),
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
    setServerErrors(err.response.data.errors);
    }

  }
  return (
    <Box className="register-form">
      <Typography variant='' > register  page</Typography>

      {serverError.length>0 ?  serverError.map((err)=>{
         <Typography> {err}</Typography>
      }) :null}

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

        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress /> :'register'}
          
        </Button>

      </Box>

    </Box>
  )
}

export default Register
