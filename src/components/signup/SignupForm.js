import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Message } from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import "../businesses/BusinessForm.css";

const formInputStyle = {
  color: "white",
  fontSize: "15px",
  letterSpacing: "1px"
};

const SignupForm = props => {
  const { data, errors, loading } = props.state;
  return (
    <div>
      <section className="showcase">
        <div>
          <div className="row text-center">
            <div className="showcase-content">
              <div className="ui two column middle aligned very relaxed stackable grid">
                <div className="column">
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
                      <div className="ui left icon input">
                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={data.username}
                          onChange={props.onChange}
                        />
                        <i className="user icon" />
                      </div>
                      {errors.username && (
                        <InlineError text={errors.username} />
                      )}
                    </Form.Field>

                    <Form.Field error={!!errors.email}>
                      <label htmlFor="email">Email</label>
                      <div className="ui left icon input">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="email@email.com"
                          value={data.email}
                          onChange={props.onChange}
                        />
                        <i className="user icon" />
                      </div>
                      {errors.email && <InlineError text={errors.email} />}
                    </Form.Field>

                    <Form.Field error={!!errors.password}>
                      <label htmlFor="password">Password</label>
                      <div className="ui left icon input">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Make it secure"
                          value={data.password}
                          onChange={props.onChange}
                        />
                        <i className="lock icon" />
                      </div>
                      {errors.password && (
                        <InlineError text={errors.password} />
                      )}
                    </Form.Field>
                    <Form.Field error={!!errors.password}>
                      <label htmlFor="cnfpassword"> confirm password</label>
                      <div className="ui left icon input">
                        <input
                          type="password"
                          id="cnfpassword"
                          name="confirm_password"
                          placeholder="Confirm Password"
                          value={data.confirmpassword}
                          onChange={props.onChange}
                        />
                        <i className="lock icon" />
                      </div>
                    </Form.Field>
                    <Button primary> Signup </Button>
                  </Form>
                </div>
                <div className="center aligned column">
                  <div className="ui big green labeled icon button">
                    <i className="tasks icon" />
                    <a href="dashboard">Explore</a>
                  </div>
                </div>
              </div>
              <div style={formInputStyle}>
                <p style={formInputStyle}>
                  Already registered?
                  <Link style={formInputStyle} to="/login">
                    Login{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>)
    </div>
  );
};

export default SignupForm;
