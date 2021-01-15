import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Landing from "./pages/Landing";
import Dash from "./pages/Dash";
import NavigationBar from "./components/NavigationBar";
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoute from "./routers/PrivateRoute";
import CreateListing from "./pages/createListing";

function App() {
  return (
    <AuthProvider>
      <Router>
      <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dash" component={Dash} />
          <PrivateRoute exact path="/createListing" component={CreateListing} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
