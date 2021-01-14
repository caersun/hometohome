import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// why isn't this showing up :((
// import Home from "./pages/Home";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";
import Listings from "./pages/Listings";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/listings" component={Listings} />
      </Switch>
    </Router>
  );
}

export default App;
