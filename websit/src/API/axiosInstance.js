
import axios from "axios";
import i18n from "../i18n";

const axiosInstance = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
    withCredentials:true,        //  send  a  http  only  

 
});

//  configt  :  object  hold  all  the data  of  requst
//  any  requse  will  send  will  send  in  eng  by  defult 
axiosInstance.interceptors.request.use( (config)=>{
  config.headers["Accept-Language"]=i18n.language;
  return config;
})
export default axiosInstance
