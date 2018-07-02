import React from "react";
import PropTypes from "prop-types";
import ReviewCard from "./ReviewCard";
import { Form, Button, Header } from "semantic-ui-react";
import "./Reviews.css";

export default function ReviewList({ reviews, deleteBusiness }) {
  const emptyMessage = <p>There are no reviews yet in your collection</p>;
  let reviewItems = reviews.map(review => (
    <ReviewCard review={review} key={review.id} />
  ));
  reviewItems = reviewItems.length === 0 ? emptyMessage : reviewItems;

  return (
    <div className="reviews">
      <Header as="h3" dividing>
        Reviews
      </Header>
      <div className="reviews ui four cards">{reviewItems}</div>
    </div>
  );
}
ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  deleteBusiness: PropTypes.func.isRequired
};
