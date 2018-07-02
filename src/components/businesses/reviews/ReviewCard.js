import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Comment } from "semantic-ui-react";

const ReviewCard = ({ isAuthenticated, user, review, business }) => (
  <Comment.Group>
    <Comment>
      <Comment.Content>
        <Comment.Author as="a">Authored by {user}</Comment.Author>
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
    isAuthenticated: !!state.user.access_token,
    user: state.user.username
  };
}
export default connect(mapStateToProps)(ReviewCard);
