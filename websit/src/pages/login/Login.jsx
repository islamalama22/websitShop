import React, { useContext } from "react";
// hooks
import { useForm } from "react-hook-form";
import axios from "axios";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
//  the  Linke of  routing 
import {Navigate, Link as RouterLink, useNavigate} from 'react-router-dom'
import useAuthStore from "../../store/authStore";
import {jwtDecode} from 'jwt-decode'


//  islam  add  the validation if  the  user  inter  shomting  wrong  
function Login() {
  //  form  hook  used  in input  and  halp  to  do  validtion
  const { register, handleSubmit } = useForm({});
  const navigate=useNavigate();
  //  to  use  the  token from another  compoenet (context), will not  used
   // const {setToken,setAcessToken}=useContext(AuthContext);



   ////////////////////
   const setToken=useAuthStore((state)=>state.setToken);
   const setUser=useAuthStore((state)=>state.setUser);

   //////////////////////
  const loginForm = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/login`, values);
      if (response.status === 200) {
        //  from  context 
       // setToken("token", response.data.accessToken);
       // setAcessToken(response.data.accessToken) ;
       console.log(response); 

       //  use  the token to  extract  the  name  and  use  it  in muli  pages  
       const  decoded=jwtDecode(response.data.accessToken);
       const user={
        name:decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
        role:decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
       }


       setUser(user); 
       console.log(user);
       setToken(response.data.accessToken);
      navigate('/home');
      }
      //  it  will  returen  status 201 :  added data   susccfully    ,   200 :  succfully
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box className="Login-form">
      <Typography variant="h3"> Login Page</Typography>

      <Box  onSubmit={handleSubmit(loginForm)}  component={"form"}
        sx={{ display: "flex",   flexDirection: "column",   gap: 3,   mt: 5,  alignItems: "flex-start"  }}  >
        <TextField  {...register("email")}  label="User  Email"  fullWidth  variant="outlined" />
        <TextField   {...register("password")}  label="Password"   fullWidth  variant="outlined"   />
       <Box  display={'flex'}  gap={2}>
        <Button variant="contained" type="submit"> Login </Button>
        <Link  sx={{ border:1, padding:1, textTransform:'capitalize' }} component={RouterLink} to='/SendCode' color='inherit'  underline='none' > Forgit Password?</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login