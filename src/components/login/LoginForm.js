import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import InlineError from "../messages/InlineError";
import Navbar from "../navbar/Navbar";
import "../businesses/BusinessForm.css";
import FlashMessagesList from "../messages/FlashMessagesList";

const linkStyle = {
  color: "white",
  fontSize: "15px",
  letterSpacing: "1px"
};

const LoginForm = props => {
  const { data, errors, loading } = props.state;

  return (
    <div>
      <Navbar />
      <section className="showcase">
        <div>
          <div className="row text-center">
            <div className="showcase-content">
              <FlashMessagesList />
              <h4> Login Here </h4>
              <hr />
              <div class="ui two column middle aligned very relaxed stackable grid">
                <div class="column">
                  <Form onSubmit={props.onSubmit} loading={loading}>
                    {errors.message && (
                      <Message negative>
                        <Message.Header>Something went wrong</Message.Header>
                        <p>{errors.message}</p>
                      </Message>
                    )}
                    <Form.Field error={!!errors.email}>
                      <label htmlFor="email">Email</label>
                      <div class="ui left icon input">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="example@example.com"
                          value={data.email}
                          onChange={props.onChange}
                        />
                        <i class="user icon" />
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
                          placeholder="Make it secure"
                          value={data.password}
                          onChange={props.onChange}
                        />
                        <i class="lock icon" />
                      </div>
                      {errors.password && (
                        <InlineError text={errors.password} />
                      )}
                    </Form.Field>
                    <Button primary>Login</Button>
                  </Form>
                </div>
                <div class="center aligned column">
                  <div class="ui big green labeled icon button">
                    <i class="signup icon" />
                    <a href="signup">Sign Up</a>
                  </div>
                </div>
              </div>
              <Link style={linkStyle} to="/forgot_password">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </section>)
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
