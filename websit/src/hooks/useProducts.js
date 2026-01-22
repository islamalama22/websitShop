import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../API/axiosInstance"

export function  useProducts(){
    const fetchProducts=async ()=>{
        const response=await axiosInstance.get(`/Products`);
        console.log(' data  of  product:')
        console.log(response.data.response.data);
        return(response.data.response.data);
    }

    return useQuery({
        queryKey:['products'],
        queryFn:fetchProducts,
        staleTime:5*60*1000
    })
}