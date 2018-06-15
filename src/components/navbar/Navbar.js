import React, {Component} from 'react'
import './Navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">WeConnect</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Dashboard">Businesses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/BusinessForm">Add Business</a>
                </li>
              </ul>
              <ul className="nav navbar-nav ml-auto" >
                <li><a className="nav-link" href="/signup">Register</a></li>
                <li><a className="nav-link" href="/login">Login</a></li> 
              </ul>
          </div>
      </nav>
    )
  }
}

export default NavBar