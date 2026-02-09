import React, { useEffect } from 'react'
import useProfile from '../../hooks/useProfile'
import { Input,InputAdornment,FormControl,Box, Button, CircularProgress, InputLabel, TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useForm } from 'react-hook-form';
import useUpdateProfile from '../../hooks/useUpdateProfile';
import useUpdateEmail from '../../hooks/useUpdateEmail';


export default function ProfileInfo() {
  
   const {data,isError:isErrorGetPrfile, isPending:isPendingGetPrfile}=useProfile();

   console.log(`user  data  from useProfile:`,data );

   const { register, handleSubmit,reset ,getValues } = useForm();
   const {mutate:updateProfile,isPending:isUpdating}=useUpdateProfile();

   const {mutate:updateEmail,isPending:isPendingUpdateEmail,isError:isErrorUpdateEmail}=useUpdateEmail();
   console.log('error  of  change  the  email :',isErrorUpdateEmail);

    //  reset 
      useEffect(() => {
      if (data) {
        reset({
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          city: data.city,
        })
      }
    }, [data, reset])

   
   const onSubmit=(values)=>{
    updateProfile(values)
   }
    
   const handleChangeEmail=()=>{
    const email=getValues("email");
    updateEmail({newEmail:email});
   }
   
  
    
 return (<>
     <Box component={'section'}>
      <Typography variant='h4' sx={{textTransform:"capitalize" }}
        
        > User Information  </Typography>

      <Box   component={"form"} onSubmit={handleSubmit(onSubmit)}  sx={{}} >  
      <Box classname='userinfo' sx={{display:'flex' ,gap:10 , py:4}} >
          <Box sx={{display:'flex',gap:1}}>
        <TextField {...register("fullName")}      label="user name" variant='outlined' />
        <TextField {...register("phoneNumber")}  label="phone number"   variant='outlined' />
        <TextField {...register("city")}         label='city'           variant='outlined' />
          </Box>
        <Button  sx={{border:1 ,backgroundColor:'indianred', color:'wheat'}}  type='submit' disabled={isUpdating}  > {isUpdating?'saving...':'edit'}</Button>

      </Box>

      <Box classname='emailChange' sx={{display:'flex' ,gap:10 }}>
          <TextField {...register("email")}   label="email"  variant='outlined' /> 
          <Button  sx={{border:1 ,backgroundColor:'indianred', color:'wheat'}} onClick={handleChangeEmail}  disabled={isPendingUpdateEmail} > {isPendingUpdateEmail?'changing done':'cahange email'} </Button>
      </Box>
      </Box>
      


     </Box>
 </>)
}
