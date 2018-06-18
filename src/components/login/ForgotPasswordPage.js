import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {message} from 'semantic-ui-react'
import isEmail from "validator/lib/isEmail";
import ForgotPasswordForm from './ForgotPasswordForm';
import '../businesses/BusinessForm.css'
import Navbar from "../navbar/Navbar";

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
          this.setState({ success: true });
          this.props
            .resetPasswordRequest(this.state.data)
            .catch(err =>
              this.setState({ errors: err, loading: false })
            );
        }
      };

    render(){
        return (
            <div>
                <Navbar/>
                <section className="showcase">
                    <div>
                        <div className="row text-center">
                            <div className="showcase-content">
                                <div>  
                                    {this.state.success ? <message>Click this link to reset your password:</message>: <ForgotPasswordForm onSubmit={this.onSubmit}
                                    onChange={this.onChange}
                                    state={this.state}/>}   
                                </div>
                            </div> 
                        </div>    
                    </div>
                </section>
            </div>
        )
    }
}
ForgotPasswordPage.PropTypes = {
    resetPasswordRequest: PropTypes.func.isRequired
}
export default ForgotPasswordPage