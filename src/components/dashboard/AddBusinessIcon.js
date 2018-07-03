import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddBusinessCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Add new business</Card.Header>
      <Link to="/business">
        <Icon name="plus circle" size="massive" />
      </Link>
    </Card.Content>
  </Card>
);

export default AddBusinessCtA;
