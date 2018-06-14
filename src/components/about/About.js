import React from 'react';
import Navbar from "../navbar/Navbar";

const about = (props) => {
    return (
        <div>
            <Navbar/>
               <section id="subheader">
                      
                      <div class="row">
                          <div class="subheader-content">
                              <h2>About This Application</h2>
                          </div>   
                      </div>       
                </section>
                <div class="container text-center">
                  <p>This app is for keeping the list of Businesses that one has interacted with.</p>
                  <p>The author of this application has not implemented any database yet. Feel free to contact him at <a href="https://web.facebook.com/Bonieeee">orwabonifase</a> for any suggestion on how to improve this app. </p>
          
                </div>
        </div>
    );
  };
  
  export default about;