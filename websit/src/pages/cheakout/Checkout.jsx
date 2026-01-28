import React, { useState } from 'react'
import useCart from '../../hooks/useCart'
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, Typography ,Box,TableRow,Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";
import useCheckout from '../../hooks/useCheckout';

 
export default function Checkout() {
 const {mutate:checkout,isPending:isCheckoutPending,isError:isCheckoutError}=useCheckout();
   
 const handleCheckout=()=>{
  console.log(paymentMethod);
  checkout({paymentMethod});
 }
const [paymentMethod, setPaymentMethod] = useState('cash');
   
  const {data,isLoading,isError}=useCart();
  if(isLoading) return <CircularProgress/>
  if(isError) return <Typography> error </Typography>

  console.log('data  of  cart  in  cheak  out page  : ')
  console.log(data);
    
  return (
   <Box component='section' sx={{py:5}}>
     <TableContainer>
        <Table >
          <TableHead>
            <TableCell> Product name</TableCell>
            <TableCell> price</TableCell>
            <TableCell> quantity</TableCell>
            <TableCell> Total</TableCell>
          </TableHead>
         <TableBody>
            {data.items.map((item) => (
              <TableRow key={item.productId}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Typography>{item.count}</Typography>
                </TableCell>
                <TableCell>{item.totalPrice}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={4}>
                cart total: {data.cartTotal}
              </TableCell>
            </TableRow>
          </TableBody>

         
        </Table>
         
          <FormControl  fullWidth sx={{maxWidth:'500px'}}>
            <InputLabel id="PaymentMethod">Payment Method</InputLabel>
            <Select value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)} labelId="PaymentMethod">
              <MenuItem value={'cash'}>cash</MenuItem>
              <MenuItem value={'visa'}>visa</MenuItem>
            </Select>
          </FormControl>

           <Button variant='contained' color='success'
           onClick={handleCheckout} > pay now</Button>
      </TableContainer>

   </Box>
  )
}
