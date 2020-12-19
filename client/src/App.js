import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// why isn't this showing up :((
// import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Work in progress...</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
