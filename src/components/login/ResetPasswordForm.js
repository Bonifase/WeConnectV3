import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

const ResetPasswordForm = props => {
  const { data, errors, loading } = props.state;

  return (
    <Form onSubmit={props.onSubmit} loading={loading}>
      {!!errors.message && <Message negative>{errors.message}</Message>}
      <Form.Field error={!!errors.password}>
        <label htmlFor="email">Enter your New Password</label>
        <input
          type="password"
          id="newpassword"
          name="newpassword"
          placeholder="New Password"
          value={data.password}
          onChange={props.onChange}
        />
        {errors.password && <InlineError text={errors.password} />}
      </Form.Field>
      <Button primary>Reset Password</Button>
    </Form>
  );
};

ResetPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ResetPasswordForm;
