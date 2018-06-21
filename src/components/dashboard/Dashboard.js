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


class Dashboard extends Component {
    componentDidMount(){
        this.props.fetchBusinesses();
      
    
    }
	render() {
        const { isAuthenticated } = this.props;
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

Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    businesses: PropTypes.array.isRequired,
    fetchBusinesses: PropTypes.func.isRequired,
       
}
function mapStateToProps(state){
    return {
        isAuthenticated: !!state.user.token,
        businesses: state.businesses
    }
}
export default connect(mapStateToProps, {fetchBusinesses})(Dashboard)