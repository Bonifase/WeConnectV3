import React, { Component } from "react";
import { Button } from "semantic-ui-react";

const linkStyle = {
  color: "white",
  fontSize: "15px",
  letterSpacing: "1px"
};
class Body extends Component {
  render() {
    return (
      <section className="showcase">
        <div>
          <div className="row text-center">
            <div className="showcase-content">
              <h4>
                {" "}
                Welcome to <span className="primary-text">WeConnect!</span>
              </h4>
              <hr />
              <div className="ui two column middle aligned very relaxed stackable grid">
                <div className="column">
                  <p>
                    <h2>
                      WeConnect provides a platform that brings businesses and
                      individuals together. This platform creates awareness for
                      businesses and gives the users the ability to write
                      reviews about the businesses they have interacted with.
                    </h2>
                  </p>
                  <br />
                  <a href="businesses">
                    <button className="button1">Get Started</button>
                  </a>
                  <br />
                  <a href="/login" style={linkStyle}>
                    Login >
                  </a>
                </div>
                <div className="center aligned column">
                  <div className="ui big green labeled icon button">
                    <i className="signup icon" />
                    <a href="signup">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Body;
