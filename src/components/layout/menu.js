import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Dropdown, Menu } from "semantic-ui-react";
import SearchBusiness from "../businesses/SearchBusiness";

const TopNavigation = ({ user, logout, isAuthenticated }) => (
  <Menu>
    <Menu.Item>Home</Menu.Item>
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
      <a class="item" href="businesses">
        Post a business
      </a>
    ) : (
      <a class="item" href="login">
        Post a business
      </a>
    )}
    <Menu.Item>Contact Us</Menu.Item>
    <div class="right menu">
      <div class="right menu">
        <div class="item">
          <div class="ui transparent icon input">
            <SearchBusiness />
          </div>
        </div>
      </div>
    </div>
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
