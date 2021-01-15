import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from "reactstrap";
import { useAuthState, useAuthDispatch, logout } from "../utils/AuthContext";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [loggedIn, setLoggedIn] = useState(false);
    const dispatch = useAuthDispatch();
    const history = useHistory();
    const userDetails = useAuthState();

    const handleLogout = () => {
        logout(dispatch);
        history.replace("/");
    }

    const isLoggedIn = () => {
        if (!userDetails.user) {
            setLoggedIn(false);
            console.log("Navbar ~ isLoggedIn", loggedIn);
            return;
        };
        setLoggedIn(true);
        console.log("Navbar ~ isLoggedIn", loggedIn);
        return;
    }

    useEffect(() => {
        isLoggedIn();
    });

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">hometohome</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    { loggedIn 
                        ? 
                        <NavItem>
                            {/* <NavLink href="/"> */}
                                <Button onClick={handleLogout}>Logout</Button>
                            {/* </NavLink> */}
                        </NavItem> 
                        : <>
                            <NavItem>
                                <NavLink href="/signup">Become a Homecook</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                        </>       
                    }
                    <NavItem>
                        <NavLink href="/cart">Cart</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavigationBar;