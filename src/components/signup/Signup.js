import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Validator from "validator";
import SignupForm from "./SignupForm";
import { signup } from "../../actions/users";

const validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Password can't be blank";

    return errors;
  };   
class Signup extends React.Component {
 
  state = {
        data: {
          username: "",
          email: "",
          password: "",
          confirm_password : ''
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
          .signup(this.state.data)
          .then(()=>{
              this.setState({ loading: false });
              this.props.history.push("/dashboard");
              
          })
          .catch(err =>
            this.setState({ errors: err.response, loading: false })
          );
      }
    };
  render() {
    return (
      <div>
        <SignupForm 
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        state={this.state} 
        />
      </div>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(Signup);