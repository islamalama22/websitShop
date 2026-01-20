import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export default function useRegister(){
     //  errors from  the  backend like  the  id  is  taken  and  username  is taken  
      const [serverError,setServerErrors]=useState(null);
      const [successful,setSuccessful]=useState(null);
      const navigate=useNavigate();
    
    
      const registerMutation=useMutation({
    
        mutationFn:async(values)=>{
         return await axiosInstance.post(`/Auth/Account/Register`,values);
    
        },
        onSuccess:()=>{
         navigate('/login');
         setSuccessful(response.data?.data?.message || response.data?.message || "User registered successfully");
         setServerErrors(null);
    
        },
        onError:(err)=>{
          console.log(err.response.data.errors);
            setServerErrors(err.response.data?.errors);
            setSuccessful(null);
        }
      });

      return {serverError,registerMutation,successful};
}