import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from "reactstrap";
import { useAuthState, useAuthDispatch, logout } from "../utils/AuthContext";

import { connect } from "react-redux";

const NavigationBar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const dispatch = useAuthDispatch();
    const history = useHistory();
    const userDetails = useAuthState();
    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        logout(dispatch);
        history.replace("/");
    }

    // const isLoggedIn = () => {
    //     if (!userDetails.user) {
    //         setLoggedIn(false);
    //         console.log("Navbar ~ isLoggedIn", loggedIn);
    //         return;
    //     };
    //     setLoggedIn(true);
    //     console.log("Navbar ~ isLoggedIn", loggedIn);
    //     return;
    // }

    useEffect(() => {
        let count = 0;

        if (!userDetails.user) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true)
        };

        console.log("Navbar ~ loggedIn", loggedIn);

        cart.forEach(item => count += item.qty);
        setCartCount(count);
    }, [userDetails.user, loggedIn, cart, cartCount,]);
    
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">hometohome</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    { loggedIn 
                        ? <>
                            <NavItem>
                                <Button onClick={handleLogout}>Logout</Button>
                            </NavItem> 
                            <NavItem>
                                {/* <NavLink href="/dash">Dashboard</NavLink> */}
                                <Button onClick={() => history.push("/dash")}>Dash</Button>
                            </NavItem>
                        </>
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
                        <NavLink href="/cart">Cart ({cartCount})</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(NavigationBar);