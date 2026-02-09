import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosAuthInstance from '../API/axiosAuthInstance';

export default function useChangePassword() {
    const queryClient=useQueryClient();
    const changePassword=useMutation({
        mutationFn:async({currentPassword,newPassword,confirmNewPassword})=>{
            return await axiosAuthInstance.patch('/Profile/change-password' ,{
            CurrentPassword:currentPassword,
            NewPassword:newPassword,
            ConfirmNewPassword:confirmNewPassword
            })
        },onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['profile']});
            console.log('cahnge  password done!!');
        },onError:(err)=>{
            console.log('error in change password', err.response?.data || err);
        }
    })

  return changePassword
}
