import React from 'react'
import useAuthStore from './store/authStore'
import { Navigate } from 'react-router-dom';



///  to  porduct  access  page  if  the  user dosent login
function ProdtectedRouter({children}) {
    const token=useAuthStore((state)=>state.token);
    if(!token){
      return  <Navigate to="/login" />
    }
  return children;
}

export default ProdtectedRouter
