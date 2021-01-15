import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ListingCard from "./ListingCard";
import API from "../../utils/API";

const Listings = () => {
    const [allListings, setAllListings] = useState([]);

    useEffect(() => {
        API.getListings()
            .then(res => setAllListings(res.data))
            .catch(err => console.log(err));
    }, []);

    return <Container>
        <Row xs="1" sm="2" md="3">
            {allListings.map(listing => (
                <Col key={listing.id}>
                    <ListingCard 
                        previewImage={listing.previewImage}
                        food={listing.food}
                        price={listing.price}
                        description={listing.description}
                    />
                </Col>
            ))}
        </Row>
    </Container>
};

export default Listings;