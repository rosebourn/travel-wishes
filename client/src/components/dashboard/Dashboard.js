import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="container">
        <Link
          to="/"
          style={{
            fontFamily: "monospace",
            fontSize: "50px",
            paddingLeft: "325px"
          }}
          className="col s5 brand-logo center black-text"
        >
          <i className="material-icons"
          style={{
            fontSize: "35px",
            paddingRight: "10px"
          }}>flight</i>
          Travel Wishes
        </Link>
        <div style={{ 
          height: "75vh" 
          }} 
          className="container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <p className="flow-text grey-text text-darken-1">
               Thank you for visiting our site. Happy Travels!
              </p>
              </h4>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable cyan darken-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
