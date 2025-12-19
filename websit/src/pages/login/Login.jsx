import React from "react";
// hooks
import { useForm } from "react-hook-form";
import axios from "axios";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import RestPassword from "../resetPassword/RestPassword";
//  the  Linke of  routing 
import {Link as RouterLink} from 'react-router-dom'



function Login() {
  //  form  hook  used  in input  and  halp  to  do  validtion
  const { register, handleSubmit } = useForm({});

  const loginForm = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(
        `https://knowledgeshop.runasp.net/api/Auth/Account/login`,
        values
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
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

      <Box
        onSubmit={handleSubmit(loginForm)}
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 5,
          alignItems: "flex-start",
        }}
      >
        <TextField
          {...register("email")}
          label="User  Email"
          fullWidth
          variant="outlined"
        />
        <TextField
          {...register("password")}
          label="Password"
          fullWidth
          variant="outlined"
        />
       <Box  display={'flex'}  gap={2}>
        <Button variant="contained" type="submit"> Login </Button>
        <Link  sx={{ border:1, padding:1, textTransform:'capitalize' }} component={RouterLink} to='/SendCode' color='inherit'  underline='none' > Resend  password</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login