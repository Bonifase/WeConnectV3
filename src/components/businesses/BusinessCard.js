import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function BusinessCard({ isAuthenticated, business }) {
  return (
    <div>
      <div className="content">
        <div class="ui card">
          <div class="content">
            <div class="header"> {business.Business_Name}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Details</h4>
            <div class="ui small feed">
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <a>Category:</a> {business.Business_Name}
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <a>Location:</a> {business.Business_location}
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <a>Description:</a> {business.Business_description}
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <a>Date Posted:</a> {business.Date_Created}
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <div class="ui labeled button" tabindex="0">
                      <div class="ui button">
                        <i class="heart icon" /> Reviews
                      </div>
                      <a class="ui basic label">48</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    {isAuthenticated ? (
                      <div className="extra content">
                        <div className="ui two buttons">
                          <Link
                            to={`/businesses/${business._id}`}
                            className="ui basic button green"
                          >
                            Edit
                          </Link>
                          <div className="ui basic button red">Delete</div>
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
          <div class="extra content">
            {isAuthenticated ? (
              <button class="ui button">Add Review</button>
            ) : (
              <a className="nav-link" href="/signup" />
            )}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
BusinessCard.ProtoTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.access_token
  };
}
export default connect(mapStateToProps)(BusinessCard);
