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
        .post("http://127.0.0.1:5000/api/v2/auth/login", credentials)
        .then(res => {
          return res.data;
        }),

    signup: user =>
      axios
        .post("http://127.0.0.1:5000/api/v2/auth/register", user)
        .then(res => res.data),

    resetPasswordRequest: email =>
      axios.post("http://127.0.0.1:5000/api/v2/auth/reset-password", { email }),

    confirmResetPassword: newpassword =>
      axios.post(`http://127.0.0.1:5000${mapStateToProps()}`, { newpassword })
  }
};
