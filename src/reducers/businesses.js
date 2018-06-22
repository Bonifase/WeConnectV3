import {SET_BUSINESSES, BUSINESS_UPDATED, BUSINESS_FETCHED } from '.././actions';
export default function businesses(state = [], action = {}) {
    switch(action.type) {
        case SET_BUSINESSES:
         return action.businesses;
        default: return state;
        case BUSINESS_FETCHED:
        const index = state.findIndex(item => item._id === action.business._id);
        if (index > -1) {
          return state.map(item => {
            if (item._id ===action.business_id) return action.business;
            return item;
          });
        } else {
          return [
            ...state,
            action.business
          ]
        }
        case BUSINESS_UPDATED:
          return state.map(item => {
            if(item._id === action.business._id) return action.business;
            return item;

       
          });
    }
  }