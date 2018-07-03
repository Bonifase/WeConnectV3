import { BUSINESS_FETCHED } from ".././actions";

export default function reviews(state = {}, action = {}) {
  switch (action.type) {
    case BUSINESS_FETCHED:
      return action.business;
    default:
      return state;
  }
}
