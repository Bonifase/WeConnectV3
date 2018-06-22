import React from 'react';
import Navbar from "../navbar/Navbar";
import '../businesses/BusinessForm.css';

const about = (props) => {
    return (
        <div>
            <Navbar/>
            <section className="showcase">
                    <div>
                        <div className="row text-center">
                            <div className="showcase-content">
                                <div>  
                                <h2>About This Application</h2>
                                   <p>A platform that brings businesses and individuals together.</p> 
                                </div>
                            </div> 
                        </div>    
                    </div>
            </section>    
        </div>
    );
  };
  
  export default about;