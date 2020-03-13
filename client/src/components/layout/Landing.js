import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Background from "../../assets/background.png";

class Landing extends Component {
  render() {
    return (
      // <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                fontSize: "50px",
                marginTop: "20px"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons"
               style={{
                fontSize: "35px"
              }}>flight</i>
              Travel Wishes
            </Link>
            <div
              style={{ 
                height: "75vh" 
              }}
              className="container valign-wrapper"
            >
              <div className="row">
                <div className="col s12 center-align">
                  <h4
                  style={{
                    marginTop: "100px",
                    color: "black"
                  }}
                  >Explore the world!</h4>
                  <p className="flow-text grey-text text-darken-1">
                    Find cities you would like to visit and save them to a
                    "someday" travel list.
                  </p>
                  <br />
                  <div className="col s6">
                    <Link
                      to="/register"
                      style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                      }}
                      className="btn btn-large waves-effect waves-light hoverable cyan darken-2"
                    >
                      Register
                    </Link>
                  </div>
                  <div className="col s6">
                    <Link
                      to="/login"
                      style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                      }}
                      className="btn btn-large waves-effect waves-teal hoverable white black-text"
                    >
                      Log In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </nav>
      
    );
  }
}

export default Landing;
