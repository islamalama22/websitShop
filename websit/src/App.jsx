import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LanguageManeger from '../src/utils/LangugeManager';
import { CssBaseline, ThemeProvider } from "@mui/material";
import useThemeStore from "./store/useThemeStore";
import getTheme from "./theme";

const queryClient = new QueryClient();


function App() {
  
const mode=useThemeStore((state) =>state.mode);
const theme=getTheme(mode);

  return (
    <QueryClientProvider client={queryClient}>
        <LanguageManeger/>
        <ReactQueryDevtools initialIsOpen={false} />
              <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <RouterProvider router={router} />
              </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
