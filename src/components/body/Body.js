import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
	render(){
		return(
            <section id="showcase">
                <div>
                    <div className="row text-center">
                        <div className="showcase-content">
                            <h1>Welcome to <span className="primary-text">WeConnect</span></h1>
                            <p><h2>A platform that brings businesses and individuals together </h2></p>
                            <a href="/dashboard" className="btn btn-defaulf btn-lg">Get Started</a>
                        </div>   
                    </div>    
                </div>
            </section>
            );
	}
}
export default Body