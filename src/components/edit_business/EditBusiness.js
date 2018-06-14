import React, { Component } from 'react';
import Navbar from "../navbar/Navbar";


class Dashboard extends Component {
	render() {
  		return (
		    <div>
		      <Navbar />
              <section id="subheader">
               
                  <div class="row">
                      <div class="subheader-content">
                          <h2>Dashboard</h2>
                      </div>   
                  </div>    
                
              </section>
        <div class="container text-center">
            <h3><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Manage Your Business:  Username</small></h3> 
            <a class="btn btn-success" href="add_business.html">Create a Business Profile</a>
            <p><div class="text-left"><h5> Available Businesses</h5></div></p>
            <hr/>
            <table class="table table-striped">
                <tr>
                    
                    <th>Business Name</th>
                    <th>Cartegory</th>
                    <th>Location</th>
                    <th>Date Created</th>
                    <th>Reviews</th>
                    <th>Edit Business</th>
                    <th>Remove Business</th>
        
                    
                </tr>
               
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><a href="reviews.html" class="btn btn-default pullright">Reviews</a></td>
                    <td><a href="edit_business/{{item.Id}}" class="btn btn-default pullright">Edit</a></td>
                    <td>
                        <form action="{{url_for('delete_business', Id=item.Id)}}" method="POST">
                            <input type="hidden" name="_method" value="DELETE"/>
                            <input type="submit" value="Remove Business" class="btn btn-default"/>
                        </form>
                    </td>
                </tr>
            
            </table>
        </div>
            </div>
  );
}
}
export default Dashboard