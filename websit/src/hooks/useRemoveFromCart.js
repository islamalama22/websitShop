import React from 'react'
import {useMutation, useQueryClient}from '@tanstack/react-query';
import axiosAuthInstance from '../API/axiosAuthInstance';


export default function useRemoveFromCart() {
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn:(cartItemId)=>axiosAuthInstance.delete(`/Carts/${cartItemId}`),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['carts']})
        }
    })
 
}
