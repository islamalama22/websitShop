import React, { useState } from "react";

import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useNavigate} from 'react-router-dom'




function SendCode() {
  const [serverError, setServerErrors] = useState([]);
  const { register,handleSubmit,  formState: { errors, isSubmitting }, } = useForm();
  const navegate=useNavigate();

  const SendCodeForm = async (values) => {
    console.log(` valuse  of  input : `, values);
    try {
      const response = await axios.post(
        `https://knowledgeshop.runasp.net/api/Auth/Account/SendCode`, values);
      console.log("  response  of  api : ", response);
      if(response.status==200){
       navegate('/RestPassword');
       console.log(" 200  go  to  reset  password");
      }
    } catch (err) {

      if(err.status==400){
       setServerErrors(err.response);
      console.log(" 400  error  ")

      }
      console.log(" error  in  api  send  :", err.response);
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(SendCodeForm)}
      className="SendCodeForm"
      sx={{ padding: 2, display: "flex", gap: 3 }}
    >
      <TextField
        {...register("email")}
        label="User  Email"
        variant="outlined"
      />
      <Button variant="contained" endIcon={<SendIcon />} type="submit">
        {" "}
        Send
      </Button>
    </Box>
  );
}

export default SendCode
