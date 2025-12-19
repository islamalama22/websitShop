import React, { useState } from "react";

import { Box, Button, TextField ,Link } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';


import { useForm } from "react-hook-form";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

import{Link as RouterLink} from 'react-router-dom'

function RestPassword() {
  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();
  const navigate=useNavigate();
const [serverError, setServerError] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);
  //  from  Mui  for  password  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => { event.preventDefault();};
  const handleMouseUpPassword = (event) => {  event.preventDefault();};


  const RestPasswordForm=async(values)=>{
    console.log(values);
    try{
    const response=await axios.patch(`https://knowledgeshop.runasp.net/api/Auth/Account/ResetPassword`,values);
    console.log( 'api  response  of  new  passweord',response);

    if(response.status==200){
      setSuccessMessage(response.data?.data?.message);
      console.log(' Password  Changed Succfuly ');
      navigate('/Login');

    }

    }catch(err){
      console.log('Error:' , err.response.data.message);
      setServerError(err.response?.data?.message);

  }
   
  }
   
  return (
       <>
        <Box sx={{padding:1}} >
          {serverError && ( <Alert severity="error"> {serverError} </Alert>)}
          {successMessage && ( <Alert severity="success"> {successMessage} </Alert> )}
        </Box>
        <Box  onSubmit={handleSubmit(RestPasswordForm)} component={'form'}  sx={{padding:3 , display:"flex" , flexDirection:"column" ,gap:1 ,width:"50%"}} >

          <TextField {...register("email")} id="outlined-basic-Email" label="Email" variant="outlined" />
          <TextField  {...register("code")} id="outlined-basic-Code" label="Code" variant="outlined" />
    
          <FormControl  variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput 
              {...register("newPassword")} 
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end"    >
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
          </FormControl>


            <Button   sx={{border:1,   background: "#1e76d2" , color:'white' , textAlign:"center" , width:"50%" , padding:1} }
            type="submit"  underline='none'> Rest  The  Password</Button>

        </Box>
     
      </>   
  )
}

export default RestPassword;
