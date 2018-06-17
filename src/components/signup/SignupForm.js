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
                    <input
                        type="text" 
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={data.username}
                        onChange={props.onChange}
                    />
                    {errors.username && <InlineError text={errors.username} />}
                    </Form.Field>

                    <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@email.com"
                        value={data.email}
                        onChange={props.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>

                    <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={props.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                    </Form.Field>
                    <Form.Field error={!!errors.password}>
                            <label htmlFor='cnfpassword'> confirm password</label> 
                                <input type='password' 
                                    id='cnfpassword'
                                    name='confirm_password'
                                    placeholder='Password'
                                    value={data.cnfpassword}
                                    onChange={props.onChange}
                                />      
                    </Form.Field>
                        <Button primary> Signup </Button>
                        <div style={formInputStyle}>
                        <p style={formInputStyle}>
                         Already registered?
                              <Link style={formInputStyle} to='/login'>Login </Link>
                        </p>
                        </div>
                </Form>
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