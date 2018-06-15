import React, { Component } from 'react';
import Navbar from "../navbar/Navbar";
import {connect} from 'react-redux';
import BusinessList from '../businesses/BusinessList';
import PropTypes from 'prop-types';
import {fetchBusinesses} from '../../actions';
import TopNavigationBar from '../layout/menu'
import './Dashboard.css'


class Dashboard extends Component {
    componentDidMount(){
        this.props.fetchBusinesses();
    }
	render() {
  		return (
              <div>
                  <Navbar/>
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
    businesses: PropTypes.array.isRequired,
    fetchBusinesses: PropTypes.func.isRequired
}
function mapStateToProps(state){
    return {
        businesses: state.businesses
    }
}
export default connect(mapStateToProps, {fetchBusinesses})(Dashboard)