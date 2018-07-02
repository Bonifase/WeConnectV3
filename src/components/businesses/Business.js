import React from "react";
import PropTypes from "prop-types";
import { Header, Card, Icon, List } from "semantic-ui-react";
import "./BusinessForm.css";

export default function Business({ business, reviews, deleteBusiness }) {
  console.log("reviews", reviews);
  return (
    <div className="ui two column middle aligned very relaxed stackable grid">
      <div className="column">
        <div className="reviews">
          <Header as="h3" dividing>
            <h2>Business Profile</h2>
          </Header>
          <Card>
            <Card.Content>
              <Card.Header>{business.Name}</Card.Header>
              <Card.Meta>
                <span className="date">Posted on {business.Created}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>Category: {business.Category}</Card.Content>
            <Card.Content extra>
              <List.Icon name="users" />
              Dealers in: {business.Description}
            </Card.Content>
            <Card.Content extra>
              <List.Icon name="marker" />
              <a>Located at:</a> {business.Location}
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="discussions" />
                Reviews
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
      <div className="column">
        <div className="reviews">
          <Header as="h3" dividing>
            <h2>Reviews</h2>
          </Header>
          <div className="reviews ui four cards">{reviews}</div>
        </div>
      </div>
    </div>
  );
}
Business.propTypes = {
  business: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  deleteBusiness: PropTypes.func.isRequired
};
