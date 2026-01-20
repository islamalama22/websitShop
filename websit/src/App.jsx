import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (

    //  the  quryclineprovider  its allow  use  the  cash  from react  quary 
    <QueryClientProvider client={queryClient}>
     {/*  the  authcontrxt  provider  any  component  in  the  all  project  will  access  the  varib */}
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
