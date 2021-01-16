import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormText, Container, Card, CardBody, Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap"
import API from "../utils/API";

// TODO: Need logic to compare passwords within form
// TODO: Show frontend error if a user attempts to signup twice
// TODO: Now showing full register info? Probably in register thing
function Register() {
    const [registerUser, setRegisterUser] = useState({});
    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterUser({ ...registerUser, [name]: value });
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        if (registerUser.firstName && registerUser.lastName && registerUser.email && registerUser.password) {
            API.register({
                firstName: registerUser.firstName,
                lastName: registerUser.lastName,
                email: registerUser.email,
                password: registerUser.password,
                specialties: registerUser.specialties,
                bio: registerUser.bio,
                cookImg: registerUser.cookImg
            }).then(() => {
                setRegisterUser({});
                history.push("/login");
            }).catch(err => console.log(err));
        }
    };

    return <Container>
        <Card>
            <CardBody>
                <h2 className="text-center mb-3">Become a Homecook</h2>
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
                                    placeholder="First Name"
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
                                    placeholder="Last Name"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    {/* <FormGroup>
                        <Label for="fullName">Full Name</Label>
                        <Input 
                            className="form-control text-center"
                            type="text"
                            name="fullName"
                            id="fullName" 
                            placeholder="Full Name"
                            onChange={handleInputChange}
                        />
                    </FormGroup> */}
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            className="form-control text-center" 
                            type="email"
                            name="email"
                            id="email" 
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input 
                            className="form-control text-center" 
                            type="password"
                            name="password"
                            id="password" 
                            placeholder="Password"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="confirm">Confirm Password</Label>
                        <Input 
                            className="form-control text-center" 
                            type="password"
                            id="confirm" 
                            placeholder="Confirm Password"
                            onChange={e => setRegisterPassword(e.target.value)}
                        />
                    </FormGroup> */}
                    <FormGroup>
                        <Label for="specialties">Your Cooking Specialties</Label>
                        <Input 
                            className="form-control text-center" 
                            type="text"
                            name="specialties"
                            id="specialties" 
                            placeholder="Southern, Comfort, Italian, Mexican, etc."
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bio">Short Bio</Label>
                        <Input 
                            className="form-control text-center" 
                            type="text"
                            name="bio"
                            id="bio" 
                            placeholder="Write something for prospective buyers"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cookImg">Cook Profile Image</Label>
                        <Input 
                            className="form-control text-center" 
                            type="file"
                            name="cookImg"
                            id="cookImg" 
                            onChange={handleInputChange}
                        />
                        <FormText color="muted">
                            Upload a profile image. Buyer's trust cooks they can see!
                        </FormText>
                    </FormGroup>
                    <Button 
                        className="btn btn-primary btn-block mt-5"
                        type="submit"
                        onClick={handleRegistration}
                    >
                        Register
                    </Button>
                </Form>
            </CardBody>
        </Card>
    </Container>
};

export default Register;