import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Dropdown, Menu } from "semantic-ui-react";

const TopNavigation = ({ user, logout, isAuthenticated }) => (
  <Menu>
    {isAuthenticated ? (
      <Link className="item" to="/businesses">
        Dashboard
      </Link>
    ) : (
      <Link className="item" to="/businesses">
        All Busisesses
      </Link>
    )}
    <Dropdown text="Filter Busisesses" pointing className="link item">
      <Dropdown.Menu>
        <Dropdown.Item>
          <Dropdown text="Category">
            <Dropdown.Menu>
              <Dropdown.Header>Shops</Dropdown.Header>
              <Dropdown.Item>Hotels</Dropdown.Item>
              <Dropdown.Item>Software</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item>Location</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {isAuthenticated ? (
      <Link className="item" to="/add-business">
        Add a business
      </Link>
    ) : (
      <Link className="item" to="/login">
        Login to Post a Business
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
