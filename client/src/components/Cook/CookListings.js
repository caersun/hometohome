import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CookListingCard from "./CookListingCard";
import { useAuthState } from "../../utils/AuthContext";
import API from "../../utils/API";


const CookListings = () => {
    const [allCookListings, setAllCookListings] = useState([]);
    const userDetails = useAuthState();

    useEffect(() => {
        API.getListingsByCook(userDetails.user.id)
            .then(res => {
                setAllCookListings(res.data);
                // console.log("allCookListings:", res.data);
            })
            .catch(err => console.log(err));
    }, [userDetails.user.id]);

    return (
        <Container fluid>
            {allCookListings.map(listing => (
                <Row key={listing.id}>
                    <Col>
                        <CookListingCard listing={listing} />
                    </Col>
                </Row>
            ))} 
        </Container>
    );
};

export default CookListings;