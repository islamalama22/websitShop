import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function  useAddReview(productId) {
  const queryClient=useQueryClient();

  const  addReviweMutation=useMutation({
    mutationFn:async({Comment,Rating})=>{
      console.log("reviwe  in  hook :  ",Comment);
      return await axiosAuthInstance.post(`/Products/${productId}/reviews`,{Rating,Comment})
    },onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['reviews']} );
      console.log('reviwe  added successfuly ');
    },onError:()=>{
      console.log('error  in  added  the  reviwe ')
    }
  });

  return addReviweMutation;
}

export default useAddReview;
