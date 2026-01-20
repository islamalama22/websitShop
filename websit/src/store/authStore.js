import { create } from "zustand";


const useAuthStore=create(()=>({
  token:null,

}));

export default useAuthStore;