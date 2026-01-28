import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import axiosAuthInstance from '../API/axiosAuthInstance';

export default function useCheckout() {
    const queryClient=useQueryClient();
  return  useMutation({
    mutationFn:async({paymentMethod})=>{
        return await axiosAuthInstance.post('/checkouts' ,{paymentMethod})
    },onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['carts']});
    }
  })
}
