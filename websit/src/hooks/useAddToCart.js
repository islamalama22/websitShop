import React from 'react'
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosAuthInstance from '../API/axiosAuthInstance';
import { Navigate, useNavigate } from 'react-router-dom';


function useAddToCart() {
     const Navigate=useNavigate();
    const queryClient=useQueryClient();
    const  addToCartMuation=useMutation({
        mutationFn:async({ProductId,Count})=>{
         return await axiosAuthInstance.post('/Carts',{
            ProductId,
            Count,

         });
        },onSuccess:()=>{
            // when there  is a  add to  cart  go  to  cache and  make the data  old
            //  dont  wait  untile  its  5  mint  to  get  the  data 
            queryClient.invalidateQueries({queryKey:['carts']});
            Navigate('/cart');
        }

   
    });


    return addToCartMuation;
}

export default useAddToCart
