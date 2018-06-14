import React, {Component} from 'react'
import './Navbar.css';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">WeConnect</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Dashboard">Businesses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/BusinessForm">Add Business</a>
              </li>
              <li class="nav-item">
                      <form class="form-inline my-2 my-lg-0">
                              <input class="form-control mr-sm-2" type="search" placeholder="Search Business" aria-label="Search"/>
                              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
                      </form>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto" >
                        <li><a className="nav-link" href="/signup">Register</a></li>
                        <li><a class="nav-link" href="/login">Login</a></li> 
                      </ul>
          </div>
      </nav>
    )
  }
}

export default NavBar