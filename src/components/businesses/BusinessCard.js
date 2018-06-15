import React from "react";
import PropTypes from 'prop-types';

export default function BusinessCard({business}) {
    return(
        <div>
            <div className="content">
            <table class="ui celled table">
  <thead>
    <tr><th>ID</th>
    <th>Business name</th>
    <th>Business Category</th>
    <th>Business Location</th>
    <th>Date Posted</th>
    <th>Perform Actions</th>
    <th>Reviews</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <div class="ui ribbon label">{business._id}</div>
      </td>
      <td><a href="/business">{business.Business_Name}</a></td>
      <td>{business.Business_category}</td>
      <td>{business.Business_location}</td>
      <td>{business.Date_Created}</td>
      <td> | <a href="edit_business">Edit <i class="edit icon"></i></a>|<br/> 
      | <a href="delete">Delete<i class="trash red icon"></i></a> |</td>
      <td><a href="/reviws">View and add Reviews</a></td>
    </tr>
  </tbody>
  <tfoot>
   </tfoot>
</table>
                {/* <div className="header"></div>
                <br />
                <h3></h3>
                <br />
                <h3>{business.Business_category}</h3>
                <br />
                <h3>{business.Business_location}</h3>
                <br />
                <h3>{business.Business_description}</h3> */}
            </div>
        </div>
    );
    
}
BusinessCard.protoTypes = {
    business: PropTypes.object.isRequired

}
