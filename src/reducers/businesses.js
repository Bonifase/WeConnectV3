import {SET_BUSINESSES} from '.././actions'
export default function businesses(state = [], action = {}) {
    switch(action.type) {
        case SET_BUSINESSES:
        return action.businesses;
      
      default: return state;
    }
  }