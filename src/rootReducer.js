import {combineReducers} from 'redux';
import businesses from './reducers/businesses'

import user from './reducers/user'
export default combineReducers({
    businesses,
    user

})