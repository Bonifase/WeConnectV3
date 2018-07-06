import * as actions from "../../actions/auth";
import * as types from "../../types";

describe("user actions", () => {
  describe("userLoggedIn  action creator", () => {
    it("should create an action to login a user", () => {
      const user = {
        access_token: "someLongSingedString"
      };
      const expectedAction = {
        type: types.USER_LOGGED_IN,
        user
      };
      expect(actions.userLoggedIn(user)).toEqual(expectedAction);
    });
  });
  describe("userLoggedOut   action creator", () => {
    it("should create an action to logout a user", () => {
      const expectedAction = {
        type: types.USER_LOGGED_OUT
      };
      expect(actions.userLoggedOut()).toEqual(expectedAction);
    });
  });
});
