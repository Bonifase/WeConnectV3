import React, { Component } from "react";
import { connect } from "react-redux";
import BusinessList from "../businesses/BusinessList";
import PropTypes from "prop-types";
import { fetchBusinesses, deleteBusiness } from "../../actions";
import TopNavigationBar from "../layout/menu";
import FlashMessagesList from "../messages/FlashMessagesList";
import "./Dashboard.css";

class Dashboard extends Component {
  componentWillMount() {
    this.props.fetchBusinesses();
  }
  render() {
    return (
      <div>
        <section className="showcase">
          <div className="row text-center">
            <div className="showcase-content">
              <FlashMessagesList />
              <TopNavigationBar />

              <h2> Reviewed Businesses </h2>
              <br />
              <br />
              <BusinessList
                businesses={this.props.businesses}
                deleteBusiness={this.props.deleteBusiness}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  businesses: PropTypes.array.isRequired,
  fetchBusinesses: PropTypes.func.isRequired,
  deleteBusiness: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
    businesses: state.businesses
  };
}
export default connect(
  mapStateToProps,
  { fetchBusinesses, deleteBusiness }
)(Dashboard);
