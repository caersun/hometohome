import { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { adjustQty, removeFromCart } from "../../utils/Redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
    const [input, setInput] = useState(item.qty);

    const handleInputChange = event => {
        setInput(event.target.value);
        adjustQty(item.id, event.target.value);
    };

    return (
        <Card>
            <CardImg top width="100%" src={item.img} alt={item.food} />
            <CardBody>
                <CardTitle tag="h5">
                    <span className="float-left">{item.food}</span>
                    <span className="float-right">${item.price}</span>
                </CardTitle>
                <br />
                <CardSubtitle tag="h6" className="mb-2 text-muted float-end">{item.description}</CardSubtitle>
                {/* <CardText>{item.description}</CardText> */}
                <Form>
                    <FormGroup>
                        <Label for="qty" className="float-right">Quantity</Label>
                        <Input 
                            min="1"
                            type="number"
                            id="qty"
                            value={input}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                </Form>
                <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
            </CardBody>
        </Card>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id))
    };
};

export default connect(null, mapDispatchToProps)(CartItem);