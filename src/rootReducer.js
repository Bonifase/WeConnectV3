import { combineReducers } from "redux";
import businesses from "./reducers/businesses";
import flashMessages from "./reducers/flashMessages";
import reviews from "./reducers/reviews";
import user from "./reducers/user";
import business from "./reducers/business";

export default combineReducers({
  businesses,
  user,
  flashMessages,
  reviews,
  business
});
