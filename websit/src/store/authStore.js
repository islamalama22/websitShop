import { create } from "zustand";


const useAuthStore=create((set)=>({
 
  token:localStorage.getItem("token"),
  setToken :(token)=>{
    localStorage.setItem("token", token);
    set({token:token}); 
  }

}));

export default useAuthStore;