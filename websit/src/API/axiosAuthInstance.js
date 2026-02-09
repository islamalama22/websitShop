import axios from "axios";
import useAuthStore from "../store/authStore";

const axiosAuthInstance=axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
  withCredentials:true,        //  send  a  http  only  
});

axiosAuthInstance.interceptors.request.use((config)=>{
    const {token}=useAuthStore.getState();
    config.headers["Accept-Language"]='en';
    config.headers['Authorization']= `Bearer ${token}`;
    return config;
})



//  same  as  above  but  we  canddt  used  the  above  to  enterd  a lopp  betwen the  response  and  req
const axiosRefresh=axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
  withCredentials:true,        //  send  a  http  only  
});




//  any  resposne  accepted  
axiosAuthInstance.interceptors.response.use((response)=>{
  console.log('respsonse  success');
  return response;
},async(error)=>{
  console.log(error);
  const originalRequest=error.config;
  console.log(`error  recived  from  : `,originalRequest);
  if(error.response.status===401 && !originalRequest._retry){

    originalRequest._retry=true; //  it  not  401  eand  exit  the  if

    try{
      console.log("CALLING REFRESH TOKEN...");
      const refreshResponse=await axiosRefresh.post('/auth/Account/RefreshToken',{});
      const newAccessToken=refreshResponse.data.accessToken;// new  token  refresh  
      useAuthStore.getState().setToken(newAccessToken); //  store  in casch
      originalRequest.headers['Authorization']= `Bearer ${newAccessToken}`; //  update  the  token i nheader  of  http  
     return axiosAuthInstance(originalRequest);

    }catch(refreshError){
      console.log("REFRESH FAILED → LOGOUT");
       useAuthStore.getState().logout(); //  if  there  is  any  error  in token logout
       return Promise.reject(refreshError);

    }
  }
 
  return Promise.reject(error);
}
);
export default axiosAuthInstance;