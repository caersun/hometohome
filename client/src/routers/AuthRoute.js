import Landing from "../pages/Landing";
import React from "react";
import { Route, Redirect } from "react-router-dom";

// TODO: What is ...rest?
const AuthRoute = ({ component: Component, isAuth, ...rest }) => {
    return <Route {...rest} render={routerProps => {
        return (
            !isAuth ? <Component {...routerProps} /> : <Redirect to={{ pathname: Landing }} />
        )
    }} />
};

export default AuthRoute;