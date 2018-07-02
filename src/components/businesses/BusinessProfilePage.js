import React, { Component } from "react";
import { connect } from "react-redux";
import Business from "../businesses/Business";
import PropTypes from "prop-types";
import { fetchBusiness, fetchReviews } from "../../actions";
import TopNavigationBar from "../layout/menu";
import FlashMessagesList from "../messages/FlashMessagesList";

class BusinessProfilePage extends Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params._id);
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
            <Business business={this.props.business} />
          </div>
        </div>
      </section>
    );
  }
}

BusinessProfilePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  business: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  fetchBusiness: PropTypes.func.isRequired,
  fetchReviews: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  console.log("state", state.reviews);
  return {
    isAuthenticated: !!state.user.token,
    business: state.business,
    reviews: state.reviews
  };
}
export default connect(
  mapStateToProps,
  { fetchBusiness, fetchReviews }
)(BusinessProfilePage);
