import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {logout} from '../../actions/auth';

const NavBar = ({ isAuthenticated, logout }) => (
  
  <div>
      <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">WeConnect</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a ></a>
                </li>
              </ul>
              <ul className="nav navbar-nav ml-auto" >
                <li>{isAuthenticated ? <Link className="nav-link"  to='/dashboard'> Dashboard</Link> : <a className="nav-link" href="/signup">Register</a>}</li>
    <li>{isAuthenticated ? <a href="" className="nav-link" onClick={() => logout()}>Logout</a> :<Link className="nav-link" to="/login">Login</Link>}</li> 
              </ul>
          </div>
      </nav>
      </div>
);

NavBar.ProtoTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return {
    isAuthenticated: !!state.user.access_token
  }
}

export default connect(mapStateToProps, {logout})(NavBar);