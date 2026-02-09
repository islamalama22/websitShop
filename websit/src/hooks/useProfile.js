 import React from 'react'
import useFetch from './useFetch'
import axiosAuthInstance from '../API/axiosAuthInstance'
 
 function useProfile() {
    //  cash  store  ,  api  ,  axiose  type 
   return useFetch(['profile'],'/Profile',{},axiosAuthInstance);
 }
 
 export default useProfile
 