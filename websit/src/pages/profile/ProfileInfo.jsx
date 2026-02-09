import React, { useEffect } from 'react'
import useProfile from '../../hooks/useProfile'
import { Input,InputAdornment,FormControl,Box, Button, CircularProgress, InputLabel, TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useForm } from 'react-hook-form';
import useUpdateProfile from '../../hooks/useUpdateProfile';


export default function ProfileInfo() {
  
   const {data,isError:isErrorGetPrfile, isPending:isPendingGetPrfile}=useProfile();

   console.log(`user  data  from useProfile:`,data );

   const { register, handleSubmit,reset } = useForm();
   const {mutate:updateProfile,isPending:isUpdating}=useUpdateProfile();
 

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
    

    
 return (<>
     <Box component={'section'}>
      <Typography variant='h4' sx={{textTransform:"capitalize" }}
        
        > User Information  </Typography>

      <Box   component={"form"} onSubmit={handleSubmit(onSubmit)}  sx={{display:"flex" , flexDirection:"column"  ,gap:2 ,py:3}} >
        
        <TextField {...register("fullName")}      label="user name" variant='outlined' />
        <TextField {...register("email")}         label="email"         variant='outlined' />
        <TextField {...register("phoneNumber")}  label="phone number"   variant='outlined' />
        <TextField {...register("city")}         label='city'           variant='outlined' />
        <Box sx={{display:"flex",justifyContent:"center" }} >
        <Button  sx={{border:1 ,backgroundColor:'indianred', color:'wheat'}}  type='submit' disabled={isUpdating}  > {isUpdating?'saving...':'edit'}</Button>
        <Button  sx={{border:1 ,backgroundColor:'indianred', color:'wheat'}}  > chanage  email </Button>
        <Button sx={{border:1 ,backgroundColor:'indianred', color:'wheat'}} > change  the password</Button>
     
        </Box>
      </Box>
     </Box>
 </>)
}
