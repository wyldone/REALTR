import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports.js";
import Landing from "./Landing.jsx";
import Listings from "./Listings.jsx";
import "../css/App.css";

// /Users/rach3tralph/PPROJECTS/REALTR/client/aws-exports.js
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/listings" component={Listings} />
    </div>
  </Router>
);

Amplify.configure(aws_exports);
export default withAuthenticator(App);
