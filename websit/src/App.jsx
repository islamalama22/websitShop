import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

function App() {
  //  the  function  is  for  routing mangmnet
  return (  <RouterProvider  router={router}/> )
}

export default App
