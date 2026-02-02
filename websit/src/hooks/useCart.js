 import React from 'react'
import useFetch from './useFetch'
import axiosAuthInstance from '../API/axiosAuthInstance'
import i18n from '../i18n';
 
 function useCart() {
    //  cash  store  ,  api  ,  axiose  type
    //  {} for  the  filter  data  

   return useFetch(['carts',i18n.language],'/Carts',{},axiosAuthInstance);
 }
 
 export default useCart
 