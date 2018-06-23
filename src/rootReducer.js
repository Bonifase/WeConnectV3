import { combineReducers } from "redux";
import businesses from "./reducers/businesses";
import flashMessages from "./reducers/flashMessages";

import user from "./reducers/user";
export default combineReducers({
  businesses,
  user,
  flashMessages
});
