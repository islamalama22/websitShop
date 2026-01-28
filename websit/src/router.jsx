import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import RestPassword from './pages/resetPassword/RestPassword.jsx'
import SendCode from "./pages/sendCode/SendCode.jsx";
import ProdtectedRouter from "./ProdtectedRouter.jsx";
import Product from "./pages/products/Product.jsx";
import Checkout from "./pages/cheakout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "Cart",
        element:<ProdtectedRouter><Cart />   </ProdtectedRouter>



        //  user  context  provider  to  allow the  cart  to  use  the  cotext  values 
         // <UserContextProvider><Cart /> </UserContextProvider>
      }, {
        path: "login",
        element: <Login />,
      },
      {
        path :"Products/:id",
        element:<Product/>

      },{
        path:'checkout',
        element:<Checkout/>
      },
      {
        path: "register",
        element: <Register />,
      },{
        path:'RestPassword',
        element:<RestPassword/>
      },{
        path:'SendCode',
        element:<SendCode/>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
     
    ],
  },
]);

export default router;
