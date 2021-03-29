import axios from 'axios'
var  instance = axios.create({
   headers:{
       'Content-Type':'application/json'
   } ,
//    baseURL:'http://10.12.207.216:5000/'
    baseURL:'http://stuq.ceshiren.com:8089/'
})
export default instance