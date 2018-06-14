import React from "react";
import PropTypes from 'prop-types';

export default function BusinessCard({business}) {
    return(
        <div>
            <div className="content">
                <div className="header">{business._id}</div>
                <br />
                <h3>{business.Business_Name}</h3>
                <br />
                <h3>{business.Business_category}</h3>
                <br />
                <h3>{business.Business_location}</h3>
                <br />
                <h3>{business.Business_description}</h3>
            </div>
        </div>
    );
    
}
BusinessCard.protoTypes = {
    business: PropTypes.object.isRequired

}
