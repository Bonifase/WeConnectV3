import React from "react";
import PropTypes from 'prop-types';
import DeleteBusiness from './DeleteBusiness';

export default function BusinessCard({business}) {
    return(
        <div>
            <div className="content">

        <div class="ui card">
            <div class="content">
                <div class="header">{business._id}: {business.Business_Name}</div>
                </div>
                <div class="content">
                    <h4 class="ui sub header">Details</h4>
                    <div class="ui small feed">
                    <div class="event">
                        <div class="content">
                        <div class="summary">
                            <a>Category:</a> {business.Business_Name}
                        </div>
                        </div>
                    </div>
                    <div class="event">
                        <div class="content">
                        <div class="summary">
                            <a>Location:</a> {business.Business_location}
                        </div>
                        </div>
                    </div>
                    <div class="event">
                        <div class="content">
                        <div class="summary">
                            <a>Date Posted:</a> {business.Date_Created}
                        </div>
                        </div>
                    </div>
                    <div class="event">
                        <div class="content">
                        <div class="summary">
                            <a>Reviews:</a> No Reviews
                        </div>
                        </div>
                    </div>
                    <div class="event">
                        <div class="content">
                        <div class="summary">
                        | <a href="edit_business">Edit <i class="edit icon"></i></a>|<br/> 
                        <DeleteBusiness/>
                        </div>
                        </div>
                    </div>
                    <script>$('.ui.modal').modal()</script>
                    </div>
                    
                </div>
            <div class="extra content">
                <button class="ui button">Add Review</button>
            </div>
            </div>
            {/* <table class="ui celled table">
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
</table> */}
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
