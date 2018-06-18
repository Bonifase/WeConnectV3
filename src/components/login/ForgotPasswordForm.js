import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

const ForgotPasswordForm = (props) => {
    const { data, errors, loading } = props.state;

    return (
      <Form onSubmit={props.onSubmit} loading={loading}>
        {!!errors.message && <Message negative>{errors.message}</Message>}
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={props.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Button primary>Reset Password</Button>
      </Form>
    );
  }

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default ForgotPasswordForm;