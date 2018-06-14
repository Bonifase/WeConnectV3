import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from "./Signup";
import { signup } from "../../actions/users";

const validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";

    return errors;
  };   
class SignupPage extends React.Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

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
          ...this.state,
          data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    
    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
          this.setState({ loading: true });
          this.props
            .submit(this.state.data)
            .catch(err =>
              this.setState({ errors: err.response.data.errors, loading: false })
            );
        }
      };
  render() {
    return (
      <div>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);