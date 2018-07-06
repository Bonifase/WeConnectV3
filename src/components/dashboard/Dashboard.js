import React, { Component } from "react";
import { connect } from "react-redux";
import BusinessList from "../businesses/BusinessList";
import PropTypes from "prop-types";
import { Comment } from "semantic-ui-react";
import { fetchBusinesses, deleteBusiness } from "../../actions";
import TopNavigationBar from "../layout/menu";
import FlashMessagesList from "../messages/FlashMessagesList";
import Search from "../businesses/SearchBusiness";
import "./Dashboard.css";
import Pagination from "../pagination/Pagination";

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
              <Comment.Metadata>
                {this.props.isAuthenticated ? (
                  <div>You are logged in as {this.props.user}</div>
                ) : (
                  <div>Login to unlock awesomeness</div>
                )}
              </Comment.Metadata>
              <TopNavigationBar />
              <p>
                <h2> Reviewed Businesses </h2>
              </p>

              <Search />
              <br />
              <BusinessList
                filteredBusinesses={this.props.filteredBusinesses}
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
    isAuthenticated: !!state.user.access_token,
    businesses: state.businesses,
    user: state.user.username,
    filteredBusinesses: state.filteredBusinesses
  };
}
export default connect(
  mapStateToProps,
  { fetchBusinesses, deleteBusiness }
)(Dashboard);
