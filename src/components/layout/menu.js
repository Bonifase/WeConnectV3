import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";

const TopNavigation = ({ user, logout, isAuthenticated }) => (
  <Menu>
    {isAuthenticated ? (
      <a className="item" href="/businesses">
        Dashboard
      </a>
    ) : (
      <a className="item" href="/businesses">
        All Busisesses
      </a>
    )}

    {isAuthenticated ? (
      <Link className="item" to="/add-business">
        Post Business
      </Link>
    ) : (
      <Link className="item" to="/login">
        Login to Post Business
      </Link>
    )}
  </Menu>
);
TopNavigation.ProtoTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.access_token
  };
}

export default connect(mapStateToProps)(TopNavigation);
