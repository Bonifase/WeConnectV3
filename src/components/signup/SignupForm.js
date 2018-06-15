import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";
import Navbar from "../navbar/Navbar"

const SignupForm = (props) => {
  const { data, errors, loading } = props.state;
    return (
        <div>
            <Navbar />
            <section className="showcase">
            <div>
            <div className="row text-center">
            <div className="showcase-content">
            <h1> Sign Up Here</h1>
                
                <Form onSubmit={props.onSubmit} loading={loading}>
                   
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

                    <Button primary>Sign Up</Button>
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