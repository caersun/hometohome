import React from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";

const Cart = (props) => {
    const mapStateToProps = state => {
        return { items: state.addedItems }
    }
    let addedItems = props.items.length;

    return (
        <Container>
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {!addedItems.length 
                    ? <p>Nothing</p>
                    : addedItems.map(item => (
                        <li key={item.id}>
                            <img src={item.img} alt={item.food} />
                            <div className="item-description">
                                <span>{item.food}</span>
                                <p>{item.description}</p>
                                <p>Price: {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button className="remove">Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
        </Container>
    );
};

export default connect(mapStateToProps)(Cart);