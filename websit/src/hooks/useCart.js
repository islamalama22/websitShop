 import React from 'react'
import useFetch from './useFetch'
import axiosAuthInstance from '../API/axiosAuthInstance'
 
 function useCart() {
    //  cash  store  ,  api  ,  axiose  type

   return useFetch(['cart'],'/Carts',axiosAuthInstance);
 }
 
 export default useCart
 