import React, { useEffect } from 'react'
import useProfile from '../../hooks/useProfile'
import { Input,InputAdornment,FormControl,Box, Button, CircularProgress, InputLabel, TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useForm } from 'react-hook-form';
import useUpdateProfile from '../../hooks/useUpdateProfile';
import useUpdateEmail from '../../hooks/useUpdateEmail';
import useChangePassword from '../../hooks/useChangePassword';


export default function ProfileInfo() {
  
   const {data,isError:isErrorGetPrfile, isPending:isPendingGetPrfile}=useProfile();
   console.log(`user  data  from useProfile:`,data );

   const { register, handleSubmit,reset  } = useForm();
   const {mutate:updateProfile,isPending:isUpdating}=useUpdateProfile();
   

   const { register:registerEmail, handleSubmit:handleSubmitEmail ,reset:resetEmail } = useForm();
   const {mutate:updateEmail,isPending:isPendingUpdateEmail,isError:isErrorUpdateEmail}=useUpdateEmail();


   const { register:registerPassword, handleSubmit:handleSubmitPassword,getValues:getValuesPassword} = useForm();
   const {mutate:chanagePasswordMutata,isPending:isPendingChangePassword,isError:isErrorChangePassword}=useChangePassword();

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
   
    useEffect(()=>{
      if(data){
        resetEmail({email:data.email});
      }
    },[data,resetEmail])

   const onSubmit=(values)=>{
    updateProfile(values)
   }
    
   const onChangeEmail=(values)=>{
    updateEmail({newEmail:values.email});
   }

   
   const onChangePassword=(values)=>{
    console.log('send new  password  to  api ',values)
    chanagePasswordMutata(values);
  }
    
  
    
 return (<>
     <Box component={'section'}>
      <Typography variant='h4' sx={{textTransform:"capitalize" }}
        
        > User Information  </Typography>

      <Box   component={"form"} onSubmit={handleSubmit(onSubmit)}  sx={{}} >  
      <Box sx={{display:'flex' ,gap:10 , py:4}} >
          <Box sx={{display:'flex',gap:1}}>
        <TextField {...register("fullName")}      label="user name" variant='outlined' />
        <TextField {...register("phoneNumber")}  label="phone number"   variant='outlined' />
        <TextField {...register("city")}         label='city'           variant='outlined' />
          </Box>
        <Button  sx={{border:1 ,backgroundColor:'indianred', color:'wheat'}}  type='submit' disabled={isUpdating}  > {isUpdating?'saving...':'edit'}</Button>

      </Box>
      </Box>

          <Box
        component="form"
        onSubmit={handleSubmitEmail(onChangeEmail)}
        sx={{ display: 'flex', gap: 2 }}
      >
        <TextField
          {...registerEmail("email")}
          label="Email"
        />

        <Button type="submit" disabled={isPendingUpdateEmail}>
          {isPendingUpdateEmail ? "Changing..." : "Change Email"}
        </Button>
      </Box>



       <Box  component={'form'} onSubmit={handleSubmitPassword(onChangePassword)}  
        sx={{display:'flex' ,gap:10 , py:4}}>
         <Box sx={{display:'flex' ,gap:1 }}>
            <TextField {...registerPassword('currentPassword') } label='CurrentPassword' type='password'/>
            <TextField {...registerPassword('newPassword') }  label='NewPassword' type='password' />
            <TextField {...registerPassword('confirmNewPassword')} label='ConfirmNewPassword' type='password'/>
          </Box>

          <Button
            type='submit'
            sx={{border:1 ,backgroundColor:'indianred', color:'wheat'}}
            disabled={isPendingChangePassword}
          >
            {isPendingChangePassword ? 'Changing...' : 'Change Password'}
          </Button>

        </Box>




     </Box>
 </>)
}
