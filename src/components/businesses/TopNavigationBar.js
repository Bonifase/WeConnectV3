import React from "react";
import { Link } from "react-router-dom";
import SearchBusiness from "../businesses/SearchBusiness";

const TopNavigation = ({ user, logout, hasBusiness, isAuthenticated }) => (
  <div class="ui pointing menu">
    <Link class="item" to="dashboard">
      All Businesses
    </Link>

    <a class="item active" href="new-business">
      Post a business
    </a>
    <a class="item">Filter business</a>
    <div class="right menu">
      <div class="item">
        <div class="ui transparent icon input">
          <SearchBusiness />
        </div>
      </div>
    </div>
  </div>
);

export default TopNavigation;
