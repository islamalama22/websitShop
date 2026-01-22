
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://knowledgeshop.runasp.net/api',
 
});

//  configt  :  object  hold  all  the data  of  requst
//  any  requse  will  send  will  send  in  eng  by  defult 
axiosInstance.interceptors.request.use( (config)=>{
  config.headers["Accept-Language"]='en'
  return config;
})
export default axiosInstance
