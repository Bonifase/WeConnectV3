import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .post(
          "https://weconnectv2.herokuapp.com/api/v2/auth/login",
          credentials
        )
        .then(res => {
          return res.data;
        }),

    signup: user =>
      axios
        .post("https://weconnectv2.herokuapp.com/api/v2/auth/register", user)
        .then(res => res.data),

    resetPasswordRequest: email =>
      axios.post(
        "https://weconnectv2.herokuapp.com/api/v2/auth/reset-password",
        { email }
      )
  }
};
