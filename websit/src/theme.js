import { createTheme } from "@mui/material";

//  can  be  improve  from the  them  
const getTheme=(mode)=>{
 return createTheme({
    palette:{
        mode:mode,
        primary:{
        main:'rgba(192, 57, 57, 0.53)',
        borderColor:"rgba(245, 244, 244, 0.53)",   
        }

    }
})
}

export default getTheme;