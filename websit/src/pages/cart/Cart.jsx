import CircularProgress from "@mui/material/CircularProgress";
import useCart from "../../hooks/useCart"
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

function Cart() {

   const {data,isLoading,isError}=useCart();
   console.log('data  of cart:')
   console.log(data);


   if(isLoading) return <CircularProgress></CircularProgress>
   if(isError )return <Typography> error </Typography>
  return (
    
     <>
      <TableContainer>
        <Table>
           <TableHead>
            <TableCell> Product  name</TableCell>
            <TableCell> price</TableCell>
            <TableCell> quantity</TableCell>
           <TableCell> Total</TableCell>
            <TableCell> Action</TableCell>
           </TableHead>

           <TableBody>
            {data.items.map(item=>(

              <TableRow key={item.id}>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.count}</TableCell>
                  <TableCell>{item.totalPrice}</TableCell>
                  <TableCell>
                    <Button color="error" variant="contained">remove</Button>

                  </TableCell>


              </TableRow>
            )

            )}
            <TableRow>
            <TableCell colSpan={4}>  cart total:{data.cartTotal} </TableCell>
            </TableRow>
           </TableBody>
        </Table>
      </TableContainer>
      </>

  )
}

export default Cart
