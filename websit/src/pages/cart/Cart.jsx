import CircularProgress from "@mui/material/CircularProgress";
import useCart from "../../hooks/useCart"
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import {Button ,Box} from "@mui/material";
import useRemoveFromCart from "../../hooks/useRemoveFromCart";
import useUpdateCartItem from "../../hooks/useUpdateCartItem";



import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";

 
function Cart() {

   const {data,isLoading,isError}=useCart();
   console.log('data  of cart:')
   console.log(data);

   const {mutate:removeItem,isPending:isPendingRemoveCart,isError:isErrorRemoveCart}=useRemoveFromCart();
   console.log('Delete from  cart errro')
   console.log(isErrorRemoveCart);


  const {mutate:updateItem,isPending:isPendingUpdateCart,isError:isErrorUpdateCart} =useUpdateCartItem();
  
  const handleUpdate=(productId,action)=>{
    const item=data.items.find(i=>productId==productId);
    if(action=='-'){
   updateItem({productId,count:item.count-1})

    }else {
   updateItem({productId,count:item.count+1})

    }

  }

   if(isLoading) return <CircularProgress></CircularProgress>
   if(isError )return <Typography> error </Typography>
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell> Product name</TableCell>
            <TableCell> price</TableCell>
            <TableCell> quantity</TableCell>
            <TableCell> Total</TableCell>
            <TableCell> Action</TableCell>
          </TableHead>

          <TableBody>
            {data.items.map((item) => (
              <TableRow key={item.productId}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.price}</TableCell>

                <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton onClick={() => handleUpdate(item.productId, "-")}>
                    <RemoveIcon />
                  </IconButton>

                  <Typography>{item.count}</Typography>

                  <IconButton onClick={() => handleUpdate(item.productId, "+")}>
                    <AddIcon />
                  </IconButton>
                </Box>
              </TableCell>


                <TableCell>{item.totalPrice}</TableCell>
                <TableCell>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => removeItem(item.productId)}
                    disabled={isPendingRemoveCart}
                  >
                    remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4}> cart total:{data.cartTotal} </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Cart
