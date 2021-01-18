import { useHistory } from "react-router-dom";
import { Container, Col, Row, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import CookInfo from "../components/Cook/CookInfo";
import CookListings from "../components/Cook/CookListings";
import { useAuthState } from "../utils/AuthContext";
import API from "../utils/API";
import { useState } from "react";

const Dash = () => {
    const defaultListingImg = "https://res.cloudinary.com/dxpy2lt0i/image/upload/v1610938587/hatzfmp852s1jtiwkdvh.jpg";
    const history = useHistory();
    const userDetails = useAuthState();
    const [modal, setModal] = useState(false); 
    const [createListing, setCreateListing] = useState({ food: "", price: 0, description: "" });
    const toggle = () => setModal(!modal);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCreateListing({ ...createListing, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (createListing.food && createListing.price && createListing.description) {
            API.createListing({
                food: createListing.food,
                price: createListing.price,
                description: createListing.description,
                imgURL: defaultListingImg,
                CookId: userDetails.user.id
            }).then(data => {
                    setCreateListing({});
                    toggle();
                    // TODO: Need to make it so that new listings automatically populate without going to home and back
                    history.replace("/");
                    history.replace("/dash");
            }).catch(err => console.log(err));
        };
    }; 

    return (
        <Container>
            <Row>
                <Col xs="12" md="4">
                    <CookInfo />
                </Col>
                <Col xs="12" md="8">
                    <Container className="text-center" fluid>
                        <h2>Your Listings</h2>
                        <br />
                        <Button onClick={toggle}>Create New Listing</Button>
                        <br /><br />
                        <CookListings />
                    </Container>
                </Col>
            </Row>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add a Listing</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="food">Food Item</Label>
                                    <Input 
                                        className="form-control text-center"
                                        type="text"
                                        name="food"
                                        id="food" 
                                        placeholder="Meatloaf, Tamales, Pizza"
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
                </ModalBody>
            </Modal>
        </Container>
    )
};

export default Dash;