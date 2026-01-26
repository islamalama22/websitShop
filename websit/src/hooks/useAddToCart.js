import React from 'react'
import { useMutation } from "@tanstack/react-query";
import axiosAuthInstance from '../API/axiosAuthInstance';


function useAddToCart() {
    const  addToCartMuation=useMutation({
        mutationFn:async({ProductId,Count})=>{
         return await axiosAuthInstance.post('/Carts'),{
           ProductId,
           Count

         }
        }
    })

    return addToCartMuation

}

export default useAddToCart
