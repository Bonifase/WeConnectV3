import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Header, Icon } from "semantic-ui-react";
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
          <div>
            <h1 className="display-4">{business.Name}</h1>
            <p className="lead">Posted on {business.Created}</p>
            <hr className="my-4" />
            <p>Category: {business.Category}</p>
            <p>
              <a>Located at:</a> {business.Location}
            </p>
            <Link
              className="btn btn-primary btn-lg"
              to={`/businesses/${business._id}/reviews`}
              role="button"
            >
              <Icon name="discussions" />
              Reviews
            </Link>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="reviews">
          <Link
            className="btn btn-primary btn-lg"
            to="/businesses"
            role="button"
          >
            <Icon name="discussions" />
            Back to businesses
          </Link>

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
