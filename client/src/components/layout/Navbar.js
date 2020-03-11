import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  // onLogoutClick = e => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  //   console.log(this.props)
  // };
 
  render() {

    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace",
                fontSize: "40px"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">flight</i>
              Travel Wishes
            </Link>
            {/* <Link
            to="/"> */}
            <Link
              style={{
                width: "120px",
                borderRadius: "2px",
                letterSpacing: "1px",
                marginTop: "10px",
                float: "right"
              }}
              to="/dashboard"
              className="btn btn-large waves-effect waves-light hoverable cyan darken-2"
            >
              Logout
            </Link>
            {/* </Link> */}
            <h4>
              <p 
              style={{
                float: "right",
                fontSize: "20px",
                paddingRight: "15px"
              }}
              className="flow-text grey-text text-darken-1">
                You are logged in{" "}
              </p>
            </h4>
            
          </div>
        </nav>
      </div>
    );
  }
}

// export default Navbar;

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);