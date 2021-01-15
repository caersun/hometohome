import { Button, Container, Card, CardBody, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import React, { useState } from "react";
import { useAuthState } from "../utils/AuthContext";
import API from "../utils/API";

const CreateListing = () => {
    const userDetails = useAuthState();
    const [createListing, setCreateListing] = useState({
        food: "",
        price: 0,
        description: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCreateListing({ ...createListing, [name]: value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (createListing.food && createListing.price && createListing.description) {
            API.createListing({
                food: createListing.food,
                price: createListing.price,
                description: createListing.description,
                CookId: userDetails.user.id
            }).then(data => {
                    setCreateListing({});
                    console.log("in CreateListing.js ~ handleSubmit ~ data", data);
            }).catch(err => console.log(err));
        };
    }; 


    return (<Container>
        <Card>
            <CardBody>
                <h4 className="text-center mb-3">What are you listing?</h4>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="food">Food Item or Main Dish</Label>
                                <Input 
                                    className="form-control text-center"
                                    type="text"
                                    name="food"
                                    id="food" 
                                    placeholder="Food"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input 
                                    className="form-control text-center"
                                    type="number"
                                    name="price"
                                    id="price" 
                                    placeholder="0.00"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                                <Label for="description">Description</Label>
                                <Input 
                                    className="form-control text-center"
                                    type="text"
                                    name="description"
                                    id="description" 
                                    placeholder="description"
                                    onChange={handleInputChange}
                                />
                    </FormGroup>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </Form>
            </CardBody>
        </Card>
    </Container>)
};

export default CreateListing;