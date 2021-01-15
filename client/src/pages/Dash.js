import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container, Col, Row, Button } from "reactstrap";
import { useAuthState, useAuthDispatch, logout } from "../utils/AuthContext";
import CookListings from "../components/Listing/CookListings";
// import Scroll from "./Scroll";

const Dash = () => {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    console.log("in dash ~ currentUser", userDetails.user);

    const handleLogout = () => {
        logout(dispatch);
        history.push("/");
    };

    const createListing = () => {
        history.push("/createListing")
    }

    return <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">hometohome</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={handleLogout}>Logout</Button>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cart">Cart</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <Container>
            <Row>
                <Col xs="12" md="3">
                    <Container fluid>
                        <div>this is where the user info will go</div>
                    </Container>
                </Col>
                <Col xs="12" md="9">
                    <Container className="text-center" fluid>
                        <h2>Your Listings</h2>
                        <br />
                        <Button onClick={createListing}>Create New Listing</Button>
                        <br /><br />
                        <CookListings />
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>
};

export default Dash;