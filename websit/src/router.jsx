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
import ProfileLayout from "./pages/profile/ProfileLayout.jsx";
import ProfileOrders from "./pages/profile/ProfileOrders.jsx";
import ProfileInfo from "./pages/profile/ProfileInfo.jsx";
import Products from "./pages/products/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        element: <Home/>,
      },
      {
        path: "Cart",
        element:<ProdtectedRouter><Cart />   </ProdtectedRouter>



        //  user  context  provider  to  allow the  cart  to  use  the  cotext  values 
         // <UserContextProvider><Cart /> </UserContextProvider>
      }, {
        path: "login",
        element: <Login />,
      },{
       path :"products",
       element:<Products/>
      },
      {
        path :"Products/:id",
        element:<Product/>

      },{
        path:'checkout',
        element:<Checkout/>
      },{
          path :"Profile",
          element:<ProfileLayout/>,
          children:[
            {
              index:true,
              element:<ProfileInfo/>
            },{
              path:'orders',
              element:<ProfileOrders/>
            }
          ]
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
