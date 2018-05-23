import React, { Component } from 'react';
import Navbar from "./navbar";
import { BrowserRouter as Router,Link } from 'react-router-dom';
class Body extends Component {
	render(){
		return(
      <section id="showcase">
                <div>
                    <div class="row text-center">
                        <div class="showcase-content">
                            <h1>Welcome to <span class="primary-text">WeConnect</span></h1>
                            <p>A platform that brings businesses and individuals together </p>
                            <a href="login.js" class="btn btn-defaulf btn-lg">Get Started</a>
                        </div>   
                    </div>    
                </div>
            </section>
            )
	}
}
export default Body