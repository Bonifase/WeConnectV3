import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Form, Button, Message  } from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import Navbar from "../navbar/Navbar";
import '../businesses/BusinessForm.css';


const formInputStyle = {
    color : 'white',
    fontSize : '15px',
    letterSpacing : '1px'
};
 

const SignupForm = (props) => {
  const { data, errors, loading } = props.state;
    return (
        <div>
            <Navbar />
            <section className="showcase">
            <div>
            <div className="row text-center">
            <div className="showcase-content">
            <div class="ui two column middle aligned very relaxed stackable grid">
            <div class="column">
            <h4>Sign up here</h4>
                <Form onSubmit={props.onSubmit} loading={loading}>
                {errors.message && (
                        <Message negative>
                        <Message.Header>Something went wrong</Message.Header>
                        <p>{errors.message}</p>
                        </Message>
                    )}
                <Form.Field error={!!errors.username}>
                    <label htmlFor="username">Username</label>
                    <div class="ui left icon input">
                    <input
                        type="text" 
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={data.username}
                        onChange={props.onChange}
                    />
                   <i class="user icon"></i>
                   </div>
                    {errors.username && <InlineError text={errors.username} />}
                    </Form.Field>

                    <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <div class="ui left icon input">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@email.com"
                        value={data.email}
                        onChange={props.onChange}
                    />
                   <i class="user icon"></i>
                   </div>
                    {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>

                    <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <div class="ui left icon input">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Make it secure'
                        value={data.password}
                        onChange={props.onChange}
                    />
                    <i class="lock icon"></i>
                    </div>
                    {errors.password && <InlineError text={errors.password} />}
                    </Form.Field>
                    <Form.Field error={!!errors.password}>
                            <label htmlFor='cnfpassword'> confirm password</label> 
                            <div class="ui left icon input">
                                <input type='password' 
                                    id='cnfpassword'
                                    name='confirm_password'
                                    placeholder='Confirm Password'
                                    value={data.cnfpassword}
                                    onChange={props.onChange}
                                /> 
                           <i class="lock icon"></i>
                           </div>
                    </Form.Field>
                    <Button primary> Signup </Button>      
                </Form>
                </div>
  <div class="center aligned column">
    <div class="ui big green labeled icon button">
      <i class="tasks icon"></i>
      <a href="dashboard">Explore</a>
    </div>
                </div>
                </div>
                <div style={formInputStyle}>
                 <p style={formInputStyle}>
                         Already registered?
                <Link style={formInputStyle} to='/login'>Login </Link>
                </p>
                </div>
            </div>   
            </div> 
            </div>   
            </section>)    
        </div>
    );
  }

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;