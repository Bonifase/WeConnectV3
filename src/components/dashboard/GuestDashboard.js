import React, { Component } from 'react';
import Navbar from "../navbar/Navbar";
import {connect} from 'react-redux';
import BusinessList from '../businesses/BusinessList';
import PropTypes from 'prop-types';
import {fetchBusinesses} from '../../actions';
import TopNavigationBar from '../layout/menu';
import LoginMessage from "../messages/LoginMessage";
// import {logout} from '../../actions/auth';
import * as actions from '../../actions/auth';
import './Dashboard.css';


class GuestDashboard extends Component {
    componentDidMount(){
        this.props.fetchBusinesses();
      
    
    }
	render() {
        
  		return (
              <div>
                  <Navbar/>
                  {/* {!isAuthenticated && <LoginMessage />} */}
                  <section className="showcase">
                    <div>
                        <div className="row text-center">
                            <div className="showcase-content">
                            <TopNavigationBar/>
                                                            
                            <h2> Available Businesses</h2><br/>
                            <p>
                            <BusinessList businesses={this.props.businesses}/>
                            </p>
                            </div>   
                        </div>    
                    </div>
                  </section> 
              </div>
		    
  );
}
}

GuestDashboard.propTypes = {
   
    businesses: PropTypes.array.isRequired,
    fetchBusinesses: PropTypes.func.isRequired,
       
}
function mapStateToProps(state){
    return {
       
        businesses: state.businesses
    }
}
export default connect(mapStateToProps, {fetchBusinesses})(GuestDashboard)