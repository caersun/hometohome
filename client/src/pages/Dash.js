// import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Col, Row, Button } from "reactstrap";
// import { useAuthState, useAuthDispatch, logout } from "../utils/AuthContext";
import CookListings from "../components/Listing/CookListings";
// import Scroll from "./Scroll";

const Dash = () => {
    const history = useHistory();

    const createListing = () => {
        history.push("/createListing")
    };

    return (
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
    )
};

export default Dash;