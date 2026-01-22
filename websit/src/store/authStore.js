import { create } from "zustand";


const useAuthStore=create((set)=>({
 
  token:localStorage.getItem("token"),
  user:null,
  setToken :(token)=>{
    localStorage.setItem("token", token);
    set({token:token}); 
  },
  setUser:(user)=>set({user}),
  logout:()=>{
    localStorage.removeItem('token');
    set({token:null});
  }

}));

export default useAuthStore;