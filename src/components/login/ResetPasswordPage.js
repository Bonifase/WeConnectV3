import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ResetPasswordForm from "./ResetPasswordForm";
import { addFlashMessage } from "../../actions/FlashMessages";
import "../businesses/BusinessForm.css";

const validate = data => {
  const errors = {};
  if (!data.new_password) errors.new_password = "Can't be blank";
  return errors;
};
class ResetPasswordPage extends Component {
  state = {
    success: false,
    data: {
      new_password: ""
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
      axios
        .post(
          `https://weconnectv2.herokuapp.com${this.props.resetLink}`,
          this.state.data
        )
        .then(() => {
          this.setState({ loading: false });
          this.props.addFlashMessage({
            type: "success",
            text: "Reset password was successfully. Login"
          });
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
                  <ResetPasswordForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    state={this.state}
                  />
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  addFlashMessage: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    resetLink: state.user.data.reset_link
  };
}
export default connect(
  mapStateToProps,
  { addFlashMessage }
)(ResetPasswordPage);
