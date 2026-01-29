import React from 'react'
//  import  the  mui 
import { Typography ,Link, Box } from '@mui/material'
//  import  css file 
import styles from './home.module.css'
import Categories from '../../components/Categories';
import ProductsSection from '../products/ProductsSection';



function Home() {
  return (
   <>
    <Categories/>
    <ProductsSection/>
   </>
  );
}

export default Home;
