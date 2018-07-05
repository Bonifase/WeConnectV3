import {
  SET_BUSINESSES,
  BUSINESS_UPDATED,
  BUSINESS_FETCHED,
  BUSINESS_DELETED
} from ".././actions";

export default function businesses(state = [], action = {}) {
  switch (action.type) {
    case SET_BUSINESSES:
      return action.businesses;

    case BUSINESS_UPDATED:
      return state;
    default:
      return state;

    case BUSINESS_DELETED:
      return state.filter(item => item._id !== action.businessId);

    case BUSINESS_FETCHED:
      const index = state.findIndex(item => item._id === action.business._id);
      if (index > -1) {
        return state.map(item => {
          if (item._id === action.business_id) return action.data.business;
          return item;
        });
      } else {
        return [...state, action.business];
      }
  }
}
