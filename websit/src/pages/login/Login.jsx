import React from "react";
// hooks
import { useForm } from "react-hook-form";
import axios from "axios";
import { Box, Typography, TextField, Button } from "@mui/material";

function Login() {
  //  form  hook  used  in input  and  halp  to  do  validtion
  const { register, handleSubmit } = useForm({});

  const registerForm = async (values) => {
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
        onSubmit={handleSubmit(registerForm)}
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

        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
