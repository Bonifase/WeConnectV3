import axios from 'axios'
import { resetPasswordRequest } from './actions/auth';
export default {
    user: {
         login: credentials => axios.post('http://127.0.0.1:5000/api/v2/auth/login', credentials).then(res =>  res.data),
         signup: user => axios.post('http://127.0.0.1:5000/api/v2/auth/register', user).then(res =>  res.data),
         resetPasswordRequest: email =>axios.post('http://127.0.0.1:5000/api/v2/auth/reset-password', {email})
         }
         
};