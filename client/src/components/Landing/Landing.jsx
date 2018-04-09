import React, { Component } from 'react';
import logo from '../images/logo.png';
import "../Landing/Landing.css"

// /Users/rach3tralph/PPROJECTS/REALTR/src/components/images/logo.png
class Landing extends Component {
  render() {
    return (
      <div className="landingContainer">
        <div>
          <a className="btn" href="/" role="button">
            <img src={logo} className="logo" alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Landing; 

