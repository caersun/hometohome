import Order from "../pages/Order";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    return <Route {...rest} render={routerProps => (
        isAuth ? <Component {...routerProps} /> : <Redirect to={{ pathname: Order }} />
    )} />
};

export default PrivateRoute;