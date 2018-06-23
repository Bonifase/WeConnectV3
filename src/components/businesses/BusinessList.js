import React from "react";
import PropTypes from "prop-types";
import BusinessCard from "./BusinessCard";

export default function BusinessList({ businesses }) {
  const emptyMessage = <p>There are no businesses yet in your collection</p>;

  const businessList = (
    <div className="ui four cards">
      {businesses.map(business => (
        <BusinessCard business={business} key={business._id} />
      ))}
    </div>
  );
  return <div>{businesses.length === 0 ? emptyMessage : businessList}</div>;
}
BusinessList.propTypes = {
  businesses: PropTypes.array.isRequired
};
