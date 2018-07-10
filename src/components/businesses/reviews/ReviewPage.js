import React, { Component } from "react";
import { connect } from "react-redux";
import ReviewList from "./ReviewList";
import PropTypes from "prop-types";
import { fetchReviews } from "../../../actions";
import TopNavigationBar from "../../layout/menu";
import FlashMessagesList from "../../messages/FlashMessagesList";

class ReviewPage extends Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.match.params._id);
  }

  render() {
    return (
      <section className="showcase">
        <div className="row text-center">
          <div className="showcase-content">
            <FlashMessagesList />
            <TopNavigationBar />
            <br />
            <ReviewList reviews={this.props.reviews} />
          </div>
        </div>
      </section>
    );
  }
}

ReviewPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  reviews: PropTypes.array.isRequired,
  fetchReviews: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
    reviews: state.reviews,
    business: state.business
  };
}
export default connect(
  mapStateToProps,
  { fetchReviews }
)(ReviewPage);
