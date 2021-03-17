import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button, UncontrolledPopover, PopoverBody } from "reactstrap";
import Cart from "./Cart/Cart";
import { useAuthState, useAuthDispatch, logout } from "../utils/AuthContext";
import { connect } from "react-redux";

const NavigationBar = ({ cart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const dispatch = useAuthDispatch();
    const history = useHistory();
    const userDetails = useAuthState();
    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        logout(dispatch);
        history.replace("/");
    }

    useEffect(() => {
        let count = 0;

        if (!userDetails.user) {
            setLoggedIn(false);
        } else {
            setLoggedIn(true)
        };

        // console.log("Navbar ~ loggedIn", loggedIn);

        cart.forEach(item => count += +item.qty);
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
                                <Link to="/signup" className="nav-link">Become a Homecook</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/login" className="nav-link">Login</Link>
                            </NavItem>
                        </>       
                    }
                    <NavItem>
                        <Button id="cartLegacy" type="button">Cart ({cartCount})</Button>
                        <UncontrolledPopover trigger="legacy" placement="bottom" target="cartLegacy">
                            {/* <PopoverHeader>Ordering</PopoverHeader> */}
                            <PopoverBody>
                                <Cart />
                            </PopoverBody>
                        </UncontrolledPopover>
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