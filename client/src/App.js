import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Dash from "./pages/Dash";
import { AuthProvider } from "./utils/AuthContext";
import PrivateRoute from "./routers/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dash" component={Dash} />
          {/* <Route exact path="/dash" component={Dash} /> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
