// import Component from "react";
import { Container, Row, Col } from "reactstrap";
import ListingCard from "../components/ListingCard";

function Scroll() {
        // TODO: Need seed data to populate database similar to this
    const sampleListing = {
        image: "https://st2.depositphotos.com/1053932/10727/i/950/depositphotos_107277022-stock-photo-mexican-tamale-tamales-of-corn.jpg",
        title: "Tamales",
        tags: "Mexican",
        price: "$12",
        cook: "Your Grandma"
    };
    return <Container>
            <Row>
                <Col>
                {/* TODO: Add loop over some logic */}
                    <ListingCard 
                        listingImage={sampleListing.image}
                        listingTitle={sampleListing.title}
                        shortDescription={sampleListing.tags}
                        price={sampleListing.price}
                        cook={sampleListing.cook}
                    />
                </Col>
            </Row>
        </Container>
    
};

export default Scroll;