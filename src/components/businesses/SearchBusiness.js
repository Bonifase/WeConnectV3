import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFilteredBusinesses } from "../../actions";
import "./searchbusiness.css";

class Search extends Component {
  data = {
    query: "",
    category: "",
    location: "",
    results: []
  };

  handleInputChange = () => {
    this.setState(
      {
        query: "q=" + this.search.value,
        category: "category=" + this.category.value,
        location: "category=" + this.location.value
      },
      () => {
        let query = "q=" + this.search.value;
        if (query && query.length > 2) {
          if (query.length % 2 === 0) {
            this.props.getFilteredBusinesses(query);
          }
        }
        let category = "category=" + this.category.value;
        console.log("this is category", category);
        if (category && category.length > 2) {
          if (category.length % 2 === 0) {
            this.props.getFilteredBusinesses(category);
          }
        }
        let location = "location=" + this.location.value;
        console.log("this is location", location);
        if (location && location.length > 2) {
          if (location.length % 2 === 0) {
            this.props.getFilteredBusinesses(location);
          }
        }
      }
    );
  };

  render() {
    return (
      <form>
        <table className="ui very basic table">
          <tr className="center aligned">
            <th>
              <div class="ui left icon input">
                <input
                  className="input"
                  placeholder="Search by name..."
                  ref={input => (this.search = input)}
                  onChange={this.handleInputChange}
                />
                <i class="search icon" />
              </div>
            </th>
            <th>
              <div class="ui left icon input">
                <input
                  className="input"
                  placeholder="Filter by category..."
                  ref={input => (this.category = input)}
                  onChange={this.handleInputChange}
                />
                <i class="filter icon" />
              </div>
            </th>
            <th>
              <div class="ui left icon input">
                <input
                  className="input"
                  placeholder="Filter by location..."
                  ref={input => (this.location = input)}
                  onChange={this.handleInputChange}
                />
                <i class="filter icon" />
              </div>
            </th>
          </tr>
        </table>
      </form>
    );
  }
}

Search.propTypes = {
  getFilteredBusinesses: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.access_token,
    filteredBusinesses: state.filteredBusinesses
  };
}
export default connect(
  mapStateToProps,
  { getFilteredBusinesses }
)(Search);
