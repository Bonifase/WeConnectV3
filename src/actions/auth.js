import { USER_LOGGED_IN, USER_LOGGED_OUT, LINK_GENERATED } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const linkGenerated = resetLink => ({
  type: LINK_GENERATED,
  resetLink
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    const { access_token, userId, username } = user;
    localStorage.setItem("weconnectJWT", JSON.stringify(access_token));
    localStorage.setItem("userId", JSON.stringify(userId));
    localStorage.setItem("username", JSON.stringify(username));
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("weconnectJWT");
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  dispatch(userLoggedOut());
};

export const resetPasswordRequest = ({ email }) => dispatch =>
  api.user.resetPasswordRequest(email).then(resetLink => {
    const { reset_link } = resetLink;
    localStorage.setItem("resetLink", JSON.stringify(reset_link));
    dispatch(linkGenerated(resetLink));
  });

export const confirmResetPassword = ({ newpassword }) => () =>
  api.user.confirmResetPassword(newpassword);
