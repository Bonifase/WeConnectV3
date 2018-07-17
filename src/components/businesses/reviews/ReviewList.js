import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";
import "./Reviews.css";

export default function ReviewList({ reviews, deleteBusiness, business }) {
  const emptyMessage = <p>There are no reviews yet in your collection</p>;
  let reviewItems = reviews.map(review => (
    <ReviewCard review={review} key={review.id} />
  ));
  reviewItems = reviewItems.length === 0 ? emptyMessage : reviewItems;

  return (
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Reviews</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox slider />
          </Table.Cell>

          <Table.Cell>{reviewItems}</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan="4">
            <Link to="/businesses">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Businesses
              </Button>
            </Link>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    // <div className="reviews">
    //   <Header as="h3" dividing>
    //     Reviews
    //   </Header>
    //   <div className="reviews ui four cards">{reviewItems}</div>
    // </div>
  );
}
ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  deleteBusiness: PropTypes.func.isRequired,
  business: PropTypes.object.isRequired
};
