import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import logo from "./logo.png";
import "../css/Landing.css";
import LexChat from "react-lex";


// /Users/rach3tralph/PPROJECTS/REALTR/src/components/images/logo.png
class Landing extends Component {
  render() {
    return <div>
        
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={logo} className="logo" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text pullRight className="navText">
              Let us help you find your dream <span role="img" aria-label="Home">
                🏡
              </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <div className="chatContainer">
          <LexChat botName="REALTR" 
          IdentityPoolId="us-east-1:de495f91-4cc1-41a2-a2f0-3ea5fad591bb" 
          placeholder="Help me find a home!" 
          style={{ position: "absolute" }} 
          backgroundColor="#FFFFFF" 
          height="488px"
          headerText="Realtr" />
        </div>
        {/* <BackgroundSlideshow images={images} /> */}
      </div>;


  }
}

export default Landing;
