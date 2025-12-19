import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import RestPassword from './pages/resetPassword/RestPassword.jsx'
import SendCode from "./pages/sendCode/SendCode.jsx";

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
        path: "cart",
        element: <Cart />,
      }, {
        path: "login",
        element: <Login />,
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
