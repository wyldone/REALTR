import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "../Landing/Landing.jsx";
import ChatBot from "../ChatBot/ChatBot.jsx";
import Listings from "../Listings/Listings.jsx";



const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/chat" component={ChatBot} />
      <Route exact path="/listings" component={Listings} />
    </div>
  </Router>
);

export default App;
