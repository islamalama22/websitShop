import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

function Cart() {
  //  must  accepted  as  same  name  
  const {userName,setUserName}=useContext(UserContext);
  return (
    <div>
      cart {userName}
    </div>
  )
}

export default Cart
