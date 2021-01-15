import { Container, Row, Col } from "reactstrap";
import ListingCard from "./ListingCard";

const mockListings = [
    { id: 1, food: "Tamales", description: "A plate of four tamales with a side of rice", price: 10, previewImage: "https://st2.depositphotos.com/1053932/10727/i/950/depositphotos_107277022-stock-photo-mexican-tamale-tamales-of-corn.jpg", quantity: 3, purchased: false },
    { id: 2, food: "Meatloaf", description: "Grandma's famous meatloaf", price: 15, previewImage: "https://st2.depositphotos.com/1053932/10727/i/950/depositphotos_107277022-stock-photo-mexican-tamale-tamales-of-corn.jpg", quantity: 1, purchased: false },
    { id: 3, food: "Pizza", description: "A plate of four tamales with a side of rice", price: 10, previewImage: "https://st2.depositphotos.com/1053932/10727/i/950/depositphotos_107277022-stock-photo-mexican-tamale-tamales-of-corn.jpg", quantity: 3, purchased: false }
];

const Listings = () => {
    return <Container>
        <Row xs="1" sm="2" md="3">
            {mockListings.map(listing => (
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