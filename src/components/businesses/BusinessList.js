import React from "react";
import PropTypes from "prop-types";
import BusinessCard from "./BusinessCard";

export default function BusinessList({ businesses, deleteBusiness }) {
  const emptyMessage = <p>There are no businesses yet in your collection</p>;

  const businessList = (
    <div className="ui four cards">
      {businesses.map(business => (
        <BusinessCard
          business={business}
          key={business._id}
          deleteBusiness={deleteBusiness}
        />
      ))}
    </div>
  );
  return <div>{businesses.length === 0 ? emptyMessage : businessList}</div>;
}
BusinessList.propTypes = {
  businesses: PropTypes.array.isRequired,
  deleteBusiness: PropTypes.func.isRequired
};
