import React, { Component } from 'react';
class Navbar extends Component {
	render(){
		return( <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="home.html">WeConnect</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="home.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="businesses.html">View Businesses</a>
                        </li> 
                      </ul>
                      <ul class="nav navbar-nav ml-auto" >
                        <li><a class="nav-link" href="register.html">Register</a></li>
                        <li><a class="nav-link" href="login.html">Login</a></li> 
                      </ul>
                    </div>
            </nav>
			)
	}
}
export default Navbar