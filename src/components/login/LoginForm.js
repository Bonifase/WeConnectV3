import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import InlineError from "../messages/InlineError";
import Navbar from "../navbar/Navbar"
import '../businesses/BusinessForm.css';


const LoginForm = (props) => {
  const { data, errors, loading } = props.state;
  
  return (
    <div>
      <Navbar/>
      <section className="showcase">
      <div>
      <div className="row text-center">
      <div className="showcase-content">
      <h3> Login Here</h3>
          <Form onSubmit={props.onSubmit} loading={loading}>
          {errors.message && (
            <Message negative>
              <Message.Header>Something went wrong</Message.Header>
              <p>{errors.message}</p>
            </Message>
          )}
          <Form.Field error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
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
              placeholder="Make it secure"
              value={data.password}
              onChange={props.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Button primary>Login</Button>
        </Form>
        <Link to="/forgot_password">Forgot password?</Link>
        </div>   
    </div> 
    </div>   
    </section>)
  </div>
  );
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;