import { USER_LOGGED_IN, USER_LOGGED_OUT, LINK_GENERATED } from "../types";

function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    case LINK_GENERATED:
      return action.resetLink;
    default:
      return state;
  }
}
export default user;
