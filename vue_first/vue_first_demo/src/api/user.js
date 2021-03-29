import axios from './http'

const user={
    SignIn(params){
        // return axios
        return axios.post('/user/login',params)
    },
    SignUp(params){
        // return axios
        return axios.post('/user/register',params)
    }
}
export default user