import React from "react";
import { Message } from "semantic-ui-react";

const LoginMessage = () => (
  <Message info>
    <Message.Header>
      Please, login to unlock awesomeness <a className="" href="/login">Login</a>
    </Message.Header>
  </Message>
);

export default LoginMessage;