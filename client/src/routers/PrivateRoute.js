import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthState } from "../utils/AuthContext";

const PrivateRoute = (props) => {
    const userDetails = useAuthState();
    const Component = props.component;
    let isAuthenticated = false;

    function isLoggedIn() {
        console.log("userDetails", userDetails);
        if (!userDetails.user) {
            console.log("userDetails", userDetails.user);
            return;
        }
        isAuthenticated = true;
        return;
    };

    isLoggedIn();

    return isAuthenticated ? <Component /> : <Redirect to={{ pathname: "/" }} />
}


export default PrivateRoute;