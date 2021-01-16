import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Modal, ModalHeader, ModalBody, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { useAuthState } from "../utils/AuthContext";
import API from "../utils/API";

const CookInfo = () => {
    const [cookInfo, setCookInfo] = useState({});
    const [updateInfo, setUpdateInfo] = useState({});
    const [modal, setModal] = useState(false);
    const history = useHistory();
    const userDetails = useAuthState();
    const toggle = () => setModal(!modal);

    const getCookInfo = () => {
        API.getCook(userDetails.user.id)
            .then(res => setCookInfo(res.data))
            .catch(err => console.log(err));
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUpdateInfo({ ...updateInfo, [name]: value });
    };

    const handleCookUpdate = event => {
        event.preventDefault();

        // TODO: How to get all these to resolve before we can get to getCookInfo()?

        if (updateInfo.firstName) {
            API.updateCook(userDetails.user.id, { firstName: updateInfo.firstName }).catch(err => console.log(err));
        };

        if (updateInfo.lastName) {
            API.updateCook(userDetails.user.id, { lastName: updateInfo.lastName }).catch(err => console.log(err));
        };

        if (updateInfo.email) {
            API.updateCook(userDetails.user.id, { email: updateInfo.email }).catch(err => console.log(err));
        };

        getCookInfo();
        toggle();
        history.replace("/");
        history.replace("/dash");        
    };

    useEffect(() => {
        getCookInfo();
    }, []);

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={cookInfo.cookImg} alt={cookInfo.firstName} />
                <CardBody>
                    <CardTitle tag="h5">{cookInfo.firstName} {cookInfo.lastName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{cookInfo.specialities}</CardSubtitle>
                    <CardText>{cookInfo.bio}</CardText>
                    <Button onClick={toggle}>Edit</Button>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Cook Profile</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input 
                                        className="form-control text-center"
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        placeholder={cookInfo.firstName}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input 
                                        className="form-control text-center"
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        placeholder={cookInfo.lastName}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input 
                                className="form-control text-center"
                                type="email"
                                name="email"
                                id="email"
                                placeholder={cookInfo.email}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <Button 
                            className="btn btn-primary btn-block mt-5"
                            type="submit"
                            onClick={handleCookUpdate}
                        >
                            Update
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default CookInfo;