import React, { useState } from 'react'
import { Box, TextField, Typography, Button, CircularProgress } from '@mui/material' 
import Alert from '@mui/material/Alert';
 
// hooks 
import { useForm } from 'react-hook-form'
import axios from 'axios'
//  validation 
import RegisterSchema from '../../validations/RegisterSchema'
//  to  show the  errors  of schema
import { yupResolver } from '@hookform/resolvers/yup';






function Register() {
  //  errors from  the  backend like  the  id  is  taken  and  username  is taken  
  const [serverError,setServerErrors]=useState(null);
  const [successful,setSuccessful]=useState(null);


  //  form  hook  used  in input  and  halp  to  do  validtion
  //  resolver  its  in  each  send to  values  chaek  the  values 
  // resolver  ://  it  will  provent  the  clinet  to  send  requst  befor  chaek  the  inputs

  const { register, handleSubmit ,reset,formState:{errors,isSubmitting} } = useForm({
    resolver:yupResolver(RegisterSchema),
    // to  show the  error  in the  bulre
    mode:"onBlur"});

  const registerForm = async(values) => {
    console.log(values);
    try {
      const response=await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`,values);
      //  it  will  returen  status 201 :  added data   susccfully    ,   200 :  succfully 
      console.log(response);
      if(response.status==201){
        setSuccessful(response.data?.data?.message || response.data?.message || "User registered successfully");
        setServerErrors(null);
        reset();
      }
    } catch (err) {
      if(err.response?.status==400){
        console.log(err.response.data.errors);
        setServerErrors(err.response.data?.errors);
        setSuccessful(null);

      }
   }

  }
  return (

    <>

    <Box>
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
          {isSubmitting ? <CircularProgress /> :'register'}
         </Button>

      </Box>

    </Box>

    </>
  )
}

export default Register
