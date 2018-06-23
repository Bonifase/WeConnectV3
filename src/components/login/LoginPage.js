import React, { Component } from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login } from "../../actions/auth";
import { addFlashMessage } from "../../actions/FlashMessages";

const validate = data => {
  const errors = {};
  if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
  if (!data.password) errors.password = "Can't be blank";
  if (!data.email) errors.email = "Can't be blank";
  return errors;
};

class LoginPage extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .login(this.state.data)
        .then(() => {
          this.setState({ loading: false });
          this.props.addFlashMessage({
            type: "success",
            text: "Login was successfully. Welcome!"
          });
          this.props.history.push("/dashboard");
        })
        .catch(err => {
          if (String(err).includes("Network Error")) {
            this.setState({
              errors: {
                message: "Service is unavailable, please try again later"
              },
              loading: false
            });
          } else {
            this.setState({
              errors: { message: err.response.data.message },
              loading: false
            });
          }
        });
    }
  };

  render() {
    return (
      <div>
        <LoginForm
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          state={this.state}
        />
      </div>
    );
  }
}
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};
export default connect(
  null,
  { login, addFlashMessage }
)(LoginPage);
