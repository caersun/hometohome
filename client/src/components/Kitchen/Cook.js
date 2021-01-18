import { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import ProductCard from "./ProductCard";

// import { connect } from "react-redux";

const Cook = ({ cook }) => { // products
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // const [cookListings, setCookListings] = useState(products);
    // const [products, setProducts] = useState();

    // console.log("Cook.js ~ incoming products from state", products); // can we change this in useState here??
    // console.log("Cook.js ~ cookListings", cookListings);

    // useEffect(() => {
    //     setCookListings(cook.Listings);
    //     console.log("Cook.js ~ useEffect ~ cookListings", cookListings);
    //     console.log("Cook.js ~ useEffect ~ products", products);
    // })

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={cook.Profile.cookImgURL} alt={cook.firstName} />
                <CardBody>
                    <CardTitle tag="h5">{cook.firstName} {cook.lastName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{cook.Profile.specialties}</CardSubtitle>
                    <CardText>{cook.Profile.description}</CardText>
                    <Button onClick={toggle}>Shop Homecook</Button> 
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader className="text-center" toggle={toggle}>{cook.firstName}'s Kitchen</ModalHeader>
                <ModalBody>
                        {cook.Listings.map(product => (
                            <ProductCard key={product.id} productData={product} />
                        ))}
                </ModalBody>
            </Modal>
        </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         products: state.shop.products
//     }
// }
// // export default Cook;
// export default connect(mapStateToProps)(Cook);
export default Cook;