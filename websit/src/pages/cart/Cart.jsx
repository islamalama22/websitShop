import useCart from "../../hooks/useCart"

function Cart() {

   const {data}=useCart();
   console.log('data  of cart:')
   console.log(data);
  return (
    <>
      123
    </>
  )
}

export default Cart
