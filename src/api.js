import axios from "axios";

const mapStateToProps = state => {
  return {
    resetPassword: state.user.data.reset_link
  };
};
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
      ),

    confirmResetPassword: newpassword =>
      axios.post(`https://weconnectv2.herokuapp.com${mapStateToProps()}`, {
        newpassword
      })
  }
};
