import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Comment } from "semantic-ui-react";

const ReviewCard = ({ isAuthenticated, review, business }) => (
  <Comment.Group>
    <Comment>
      <Comment.Content>
        <Comment.Author as="a">Author</Comment.Author>
        <Comment.Metadata>
          <div>Date reviewed:</div>
        </Comment.Metadata>
        <Comment.Text>{review.body}</Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

ReviewCard.ProtoTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.access_token
  };
}
export default connect(mapStateToProps)(ReviewCard);
