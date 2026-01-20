import React, { useState } from 'react'
import { Box, TextField, Typography, Button, CircularProgress, capitalize } from '@mui/material' 
import Alert from '@mui/material/Alert';
 
// hooks 
import { useForm } from 'react-hook-form'
import axios from 'axios'
//  validation 
import RegisterSchema from '../../validations/RegisterSchema'
//  to  show the  errors  of schema
import { yupResolver } from '@hookform/resolvers/yup';
import useRegister from '../../hooks/useRegister';






function Register() {
 
  const {serverError,registerMutation,successful}=useRegister();
  //  form  hook  used  in input  and  halp  to  do  validtion
  //  resolver  its  in  each  send to  values  chaek  the  values 
  // resolver  ://  it  will  provent  the  clinet  to  send  requst  befor  chaek  the  inputs

  const { register, handleSubmit ,reset,formState:{errors,isSubmitting} } = useForm({
    resolver:yupResolver(RegisterSchema),
    // to  show the  error  in the  bulre
    mode:"onBlur"});

  const registerForm = async(values) => {
   await  registerMutation.mutateAsync(values);

  }
  return (

    <>

    <Box>
     {/* this is server error handling */}
     {successful && ( <Alert severity="success">{successful} </Alert>)}
     { (serverError) && ( <Alert severity="error">{serverError} </Alert>)}

    </Box>
    <Box className="register-form">
      <Typography variant='' > register  page</Typography>


      <Box onSubmit={handleSubmit(registerForm)} component={"form"} sx={{ display: 'flex', flexDirection: "column", gap: 3, mt: 5, alignItems: "flex-start" }} >
        <TextField {...register('userName')} label="user name" fullWidth variant='outlined' 
          error={errors.userName} helperText={errors.userName?.message }
        />
        <TextField  {...register('fullName')} label="Full  Nmae" fullWidth variant='outlined' 
           error={errors.fullName} helperText={errors.fullName?.message  }
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
        {/* this loader  */}
          {isSubmitting ? <CircularProgress /> :'register'}
         </Button>

      </Box>

    </Box>

    </>
  )
}

export default Register
