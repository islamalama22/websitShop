import React from 'react'
import useProfile from '../../hooks/useProfile'
import { Box, Typography } from '@mui/material';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function ProfileOrders() {
    const {data ,isError,isLoading}=useProfile();
    const orders=data?.orders;
    console.log('Orders:',orders);
   

  return ( 
    <Box >
    <Typography variant='h3'> orders</Typography>

     <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">paid $</TableCell>
            <TableCell align="right">paymentStatus</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">orderDate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {orders.map((order)=>(
            <TableRow key={order.id} >
              <TableCell align="right">{order.id}</TableCell>
              <TableCell align="right">{order.amountPaid}</TableCell>
               <TableCell align="right">{order.paymentStatus}</TableCell>
              <TableCell align="right">{order.status}</TableCell>
              <TableCell align="right">{order.orderDate}</TableCell>
            </TableRow>
        ))}
           
        </TableBody>
      </Table>
    </TableContainer>

    <Typography variant='h4'> all  orders  count is:{orders.length}</Typography>
    </Box>

  )
}
