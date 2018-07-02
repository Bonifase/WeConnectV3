import React, { Component } from "react";
import PropTypes from "prop-types";
import { message } from "semantic-ui-react";
import { connect } from "react-redux";
import isEmail from "validator/lib/isEmail";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";
import "../businesses/BusinessForm.css";
import Navbar from "../navbar/Navbar";

const validate = data => {
  const errors = {};
  if (!isEmail(data.email)) errors.email = "Invalid email";
  return errors;
};
class ForgotPasswordPage extends Component {
  state = {
    success: false,
    data: {
      email: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .resetPasswordRequest(this.state.data)
        .then(() => {
          this.setState({ loading: false });
          this.props.history.push("/reset-password");
        })
        .catch(err => {
          this.setState({
            errors: { message: err.response.data.message },
            loading: false
          });
        });
    }
  };

  render() {
    return (
      <div>
        <section className="showcase">
          <div>
            <div className="row text-center">
              <div className="showcase-content">
                <div>
                  {this.state.success ? (
                    <message>Click this link to reset your password:</message>
                  ) : (
                    <ForgotPasswordForm
                      onSubmit={this.onSubmit}
                      onChange={this.onChange}
                      state={this.state}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
ForgotPasswordPage.PropTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
};
export default connect(
  null,
  { resetPasswordRequest }
)(ForgotPasswordPage);
