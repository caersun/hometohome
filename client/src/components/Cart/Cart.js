import React, { useState, useEffect } from "react";
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import StripePayment from "./StripeCheckout";
import { Redirect } from "react-router-dom";

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;
        // console.log("in cartjs ~ cart incoming from state", cart);

        cart.forEach(item => {
            console.log("item", item);
            items += +item.qty;
            console.log("items", items);
            price += item.qty * item.price;
        });

        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

    return (
        <Container fluid>
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
            <Card>
                <CardBody>
                    <CardTitle tag="h5" className="text-center">Order Summary</CardTitle>
                    <CardSubtitle tag="h6" className="text-muted">
                        <span className="float-left">Total: ${totalPrice}</span>
                        <span className="float-right"> ({totalItems} items)</span>
                    </CardSubtitle>
                </CardBody>
                
                    <StripePayment totalPrice={totalPrice}>      
                    </StripePayment>
                    {/* if amount = 0 then don't start */}
                    {/* put the server working */}
                    {/* <Redirect to={{ pathname: "/" }} /> how to get to the main screen? */}

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