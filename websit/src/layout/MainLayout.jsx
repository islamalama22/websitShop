import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

//  the layout  is  the arrengmnet  of page
//  outlet its any  compnent  send  by router.jsx  by  the  url  
function MainLayout() {
  return (
    <>
  <Navbar />
  <Container maxWidth='lg'> 
   <Outlet />
   </Container>
  <Footer/>
    </>
  )
}

export default MainLayout
