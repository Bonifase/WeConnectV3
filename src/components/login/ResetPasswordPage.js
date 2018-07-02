import React, { Component } from "react";
import PropTypes from "prop-types";
import { message } from "semantic-ui-react";
import { connect } from "react-redux";
import ResetPasswordForm from "./ResetPasswordForm";
import { confirmResetPassword } from "../../actions/auth";
import "../businesses/BusinessForm.css";
import Navbar from "../navbar/Navbar";

const validate = data => {
  const errors = {};
  if (!data.newpassword) errors.newpassword = "Can't be blank";
  return errors;
};
class ResetPasswordPage extends Component {
  state = {
    success: false,
    data: {
      newpassword: ""
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
        .confirmResetPassword(this.state.data)
        .then(() => {
          this.setState({ loading: false });
          this.props.history.push("/login");
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
                    <message>Reset Successful</message>
                  ) : (
                    <ResetPasswordForm
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
ResetPasswordPage.PropTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
};
export default connect(
  null,
  { confirmResetPassword }
)(ResetPasswordPage);
