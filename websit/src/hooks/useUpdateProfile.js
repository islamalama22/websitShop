import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance';

function useUpdateProfile() {
  const queryClient=useQueryClient();

  const updateProfile=useMutation({
    mutationFn:async({fullName,email,phoneNumber,city})=>{
        return await axiosAuthInstance.patch('/Profile',{
            fullName,email,phoneNumber,city
        });
    },onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['profile']});
    }
  })

  return updateProfile;
   
}

export default useUpdateProfile
