import { createTheme } from "@mui/material";




//  can  be  improve  from the  them  
const getTheme=(mode)=>{
 return createTheme({
    palette:{
        mode:mode,
        primary:{
        main:'rgba(235, 222, 222, 0.53)',

        }


    }

})
}

export default getTheme;