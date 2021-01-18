import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routers/PrivateRoute";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dash from "./pages/Dash";
import { AuthProvider } from "./utils/AuthContext";
import ImageUpload from "./components/ImageUpload";

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
          <Route exact path="/imageupload" component={ImageUpload} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
