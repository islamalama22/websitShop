import React, { useState } from 'react'
import { createContext } from 'react'


export const AuthContext=createContext();
export default function AuthContextProvider({children}) {
    // its  the  varible  that  will  cheked  its  value  in  all  pages  
    //  to  cheak  if  hte  user  is  login in or  not 
    //  why  null ! :  if  the  user  not login the  token is  null 
    //  but  null  is  cass  a  problme  that  if  the  user  do  refresh  it  will  make  the  token null  
    //  so  must  be  like  this  :   
    //  with  refresh  if  there  is token take it  if  not  be  null 
    const [token,setToken]=useState(localStorage.getItem('token')|| null);

    const logout=()=>{
        localStorage.removeItem('token');
        setToken(null);
    }
    
    //  store  the  token i local  storg
    const  setAcessToken=(token)=>{
        localStorage.setItem('token',token);
    }
    
  return (
    <AuthContext.Provider  value={{token,setToken,logout,setAcessToken}}>
     {children}
    </AuthContext.Provider>
  )
}

