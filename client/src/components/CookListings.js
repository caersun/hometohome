import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ListingCard from "./ListingCard";
import { useAuthState } from "../utils/AuthContext";
import API from "../utils/API";

// import { connect } from "react-redux";

const CookListings = () => {
    // console.log("CookListings ~ incoming products:", products);
    // return (
    //     <Container fluid>
    //         {products.map(product => (
    //             <ListingCard key={product.id} productData={product} />
    //         ))}
    //     </Container>
    // )

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
                        <ListingCard productData={listing}
                            // previewImage={listing.previewImage}
                            // food={listing.food}
                            // price={listing.price}
                            // description={listing.description}
                        />
                    </Col>
                </Row>
            ))} 
        </Container>
    );
};

// const mapStateToProps = state => {
//     return {
//         products: state.shop.products
//     }
// };

export default CookListings;
// export default connect(mapStateToProps)(CookListings);