import React from 'react'
import { Outlet } from 'react-router-dom';


//  its  for  login & reg  there is  no  navbar  and  reg 
//  so  used  diffrent  layout
const AuthLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthLayout;
