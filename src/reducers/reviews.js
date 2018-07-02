import { REVIEW_ADDED, SET_REVIEWS } from ".././actions";

export default function reviews(state = [], action = {}) {
  switch (action.type) {
    case SET_REVIEWS:
      return action.Reviews;
    default:
      return state;

    case REVIEW_ADDED:
      return { Reviews: action.Reviews };
  }
}
