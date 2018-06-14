import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import Validator from "validator";
import { connect } from 'react-redux';
import { login } from "../../actions/auth"; 
import PropTypes from 'prop-types' 


const validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

class LoginPage extends Component{
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

    onSubmit = () => {
        const errors = validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
          this.setState({ loading: true });
          this.props
            .login(this.state.data)
            .then(()=>{
                this.setState({ loading: false });
                this.props.history.push("/dashboard");
            })
            .catch(err =>
              this.setState({ errors: err, loading: false })
            );
        }
      };

    render(){
        return(
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
    login: PropTypes.func.isRequired
}   
export default connect(null, {login})(LoginPage);