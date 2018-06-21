import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';

export const userLoggedIn = user => ({
    type:  USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type:  USER_LOGGED_OUT
})

export const login = (credentials) => dispatch => 
api.user.login(credentials).then(user => {
    
    const { access_token } = (user);
    localStorage.setItem('weconnectJWT', JSON.stringify(access_token));
    dispatch(userLoggedIn(user));});
    

   

export const logout = () => dispatch =>{
    localStorage.removeItem('weconnectJWT');
    dispatch(userLoggedOut());};

export const resetPasswordRequest = ({email}) => () =>
api.user.resetPasswordRequest(email);

export const confirmResetPassword = ({password}) => () =>
api.user.resetPasswordRequest(password);