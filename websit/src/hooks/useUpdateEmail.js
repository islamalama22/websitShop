import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosAuthInstance from '../API/axiosAuthInstance';

function useUpdateEmail() {
    const queryClient=useQueryClient();

    const UpdateEmail=useMutation({
        mutationFn:async({newEmail})=>{
            return await axiosAuthInstance.patch('/Profile/change-email',{
            NewEmail:newEmail,
            })
        },onSuccess:()=>{
          queryClient.invalidateQueries({queryKey:['profile']});
          console.log('change  the  email  is  done  !!')
        },onError:(err)=>{
            console.log("there  is  errror in  changeing  the  email ",err.response.data);
        }
    })
  return UpdateEmail;

}

export default useUpdateEmail
