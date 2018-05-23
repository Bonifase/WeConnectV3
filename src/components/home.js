import React, { Component } from 'react';
import Navbar from "./navbar";
import Body from "./body";

class Home extends Component {
	render() {
  		return (
		    <React.Fragment>
		
		      <Navbar />
		      <Body />
		      
		    </React.Fragment>
  );
}
}

export default Home