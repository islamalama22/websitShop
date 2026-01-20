import { create } from "zustand";


//  its  fun to  crate  store  
//  store  its  a  loaction to  store a  veribale  
export const useCounterStore= create((set)=>({

    counter:3, //  this is  the state 
    increas:()=>set((state)=>{ //  ths is action 
        counter:state.conter+1
    } )
}));