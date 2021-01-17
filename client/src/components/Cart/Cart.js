import React, { useState, useEffect } from "react";
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;
        console.log("in cartjs ~ cart incoming from state", cart);

        cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

    return (
        <Container fluid>
            {/* <Container fluid> */}
                {!cart.length 
                ? <Card>
                    <CardBody>
                        <CardTitle tag="h3" className="text-center">Cart Empty</CardTitle>
                        <CardText className="text-muted text-center">Choose a Homecook's Kitchen to add meals</CardText>
                    </CardBody>
                </Card>
                // ? <h6>Cart empty</h6>
                : (cart.map(item => (
                    <CartItem key={item.id} item={item} />
                )))}
            {/* </Container> */}
            <Card>
                <CardBody>
                    <CardTitle tag="h5" className="text-center">Order Summary</CardTitle>
                    <CardSubtitle tag="h6" className="text-muted">
                        <span className="float-left">Total: ${totalPrice}</span>
                        <span className="float-right"> ({totalItems} items)</span>
                    </CardSubtitle>
                </CardBody>
                <CardFooter>
                    <Button>Proceed to Checkout</Button>
                </CardFooter>
            </Card>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    };
};

export default connect(mapStateToProps)(Cart);