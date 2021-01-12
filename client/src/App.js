import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// why isn't this showing up :((
// import Home from "./pages/Home";
import HomePage from "./pages/Home";
// import Order from "./pages/Order"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="yay">
          <div>You did it you logged in!</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
