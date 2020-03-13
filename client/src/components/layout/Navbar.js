import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
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
            <Link
              style={{
                fontFamily: "monospace",
                fontSize: "20px", 
                paddingTop: "40px"
              }}
              to="/dashboard"
              className="col s5 brand-logo center black-text"
            >
              Go to Logout
            </Link>
            </div>
        </nav>
      </div>
    );
  }
}

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