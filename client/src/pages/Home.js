import React, { useState } from "react";
import { Jumbotron, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from "reactstrap";
import Listings from "../components/Listing/Listings";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (<div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">hometohome</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={e => window.location.href="/signup"}>Become a Homecook</Button>
                        {/* <NavLink href="/signup">Become a Homecook</NavLink> */}
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cart">Cart</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Jumbotron className="text-center">
            <h1 className="display-3">hometohome</h1>
            <p className="lead">From your neighbors to you, enjoy delicious homecooked meals.</p>
        </Jumbotron>
        <Listings />
    </div>)
};

export default Home;