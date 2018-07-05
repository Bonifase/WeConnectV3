import React from "react";
import PropTypes from "prop-types";
import BusinessCard from "./BusinessCard";

class BusinessList extends React.Component {
  render() {
    const { businesses, filteredBusinesses, deleteBusiness } = this.props;
    const emptyMessage = <p>There are no businesses yet in your collection</p>;
    let container;
    if (filteredBusinesses.length === 0) {
      container = businesses;
    } else {
      container = filteredBusinesses;
    }
    const businessList = (
      <div className="ui four cards">
        {container.map(business => (
          <BusinessCard
            business={business}
            key={business._id}
            deleteBusiness={deleteBusiness}
          />
        ))}
      </div>
    );
    return <div>{container.length === 0 ? emptyMessage : businessList}</div>;
  }
}

BusinessList.propTypes = {
  businesses: PropTypes.array.isRequired,
  filteredBusinesses: PropTypes.array.isRequired,
  deleteBusiness: PropTypes.func.isRequired
};

export default BusinessList;
