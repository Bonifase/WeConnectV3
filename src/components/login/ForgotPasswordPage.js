import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {message} from 'semantic-ui-react'
import isEmail from "validator/lib/isEmail";
import ForgotPasswordForm from './ForgotPasswordForm';

const validate = data => {
    const errors = {};
    if (!isEmail(data.email)) errors.email = "Invalid email";
    return errors;
  };
class ForgotPasswordPage extends Component {
    state = {
        success:false,
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
            .catch(err =>
              this.setState({ errors: err.response.data.errors, loading: false })
            );
        }
      };
    
     
    
    submit = data => this.props.resetPasswordRequest(data).then(() => this.setState({ success: true }));
    render(){
        return (
            <div>
                {this.state.success ? <message>Token has been genearted.</message>: <ForgotPasswordForm submit={this.submit}/>}
            </div>
        )
    }
}
ForgotPasswordPage.PropTypes = {
    resetPasswordRequest: PropTypes.func.isRequired
}
export default ForgotPasswordPage