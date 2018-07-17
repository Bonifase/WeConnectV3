import { SET_PAGINATION } from ".././actions";

export default function pagination(state = {}, action = {}) {
  switch (action.type) {
    case SET_PAGINATION:
      return action.pagination;
    default:
      return state;
  }
}
