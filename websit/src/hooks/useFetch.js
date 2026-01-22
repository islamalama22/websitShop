import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../API/axiosInstance';

function useFetch(queryKey,url) {

    //  when ued  the  react  qurty  no  need  for  used  starte  and  effect 
    //  this  code  is from react  quary  
    //  mean  :  from th  api  get  the  data  and  store  it  in local brower
    //  store  it  in local  strorge  with name  category  

    const fetchData=async ()=>{
        const response=await axiosInstance.get(url);
        console.log(' data  of  product:')
        console.log(response.data);
        return(response.data);
    }

      //  the  data  in  cash is  : 
    //  1-  fresh  :  new
    //  2-  stale  :  old 
    //  5 min  in  mill/secands 
    // when i  add data  to  chash  to  5  min  i  make  the  ( requstes less  & and  if  the  user enterint  is slow  its  effisent )
   const quary=useQuery({
        queryKey:[queryKey],
        queryFn:fetchData,
        staleTime:5*60*1000
    })

    return quary;
}

export default useFetch
