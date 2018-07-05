import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import ConfirmDeleteBusiness from "./ConfirmDeleteBusiness";

function BusinessCard({ isAuthenticated, reviews, business, deleteBusiness }) {
  return (
    <div>
      <div className="content">
        <div className="ui raised card">
          <div className="content">
            <div className="header"> {business.Business_Name}</div>
          </div>
          <div className="content">
            <h4 className="ui sub header">Details</h4>
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">
                    <a>Category:</a> {business.Business_category}
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">
                    <a>Location:</a> {business.Business_location}
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">
                    <a>Description:</a> {business.Business_description}
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">
                    <a>Date Posted:</a> {business.Date_Created}
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="content">
                  <div className="summary">
                    <Link
                      className="button"
                      to={`/businesses/${business._id}/reviews`}
                    >
                      <Icon name="discussions" />
                      {"Reviews "}
                      <span className="comment-count">
                        <span className="speech-bubble" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="content">
                  <div className="summary">
                    <Link className="button" to={`/businesses/${business._id}`}>
                      <Icon name="home" />
                      View Business
                    </Link>
                  </div>
                </div>
              </div>
              <div className="event">
                <div className="content">
                  <div className="summary">
                    {isAuthenticated ? (
                      <div className="extra content">
                        <div className="ui two buttons">
                          <Link
                            to={`/businesses/edit/${business._id}`}
                            className="ui basic button green"
                          >
                            Edit
                          </Link>
                          <div
                            className="ui basic button red"
                            onClick={() => deleteBusiness(business._id)}
                          >
                            Delete
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="extra content">
            {isAuthenticated ? (
              <Link to={`/businesses/${business._id}/review`}>
                <button className="ui button">Add Review</button>
              </Link>
            ) : (
              <Link to="/login">
                {" "}
                <button className="ui button button1">
                  Login to review this business
                </button>
              </Link>
            )}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
BusinessCard.ProtoTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  deleteBusiness: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
  owner: PropTypes.number.isRequired,
  businessId: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.access_token,
    reviews: state.reviews,
    owner: state.user._id,
    businessId: state.business.owner
  };
}
export default connect(mapStateToProps)(BusinessCard);
