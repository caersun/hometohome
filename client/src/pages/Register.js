import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, CardBody, Form, FormGroup, Label, Input, FormFeedback, Button, Row, Col } from "reactstrap"
import API from "../utils/API";

// TODO: Increase password requirements
// TODO: Show frontend error if a user attempts to signup twice
function Register() {
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [registerUser, setRegisterUser] = useState({});
    const history = useHistory();
    const defaultProfileImg = "https://res.cloudinary.com/dxpy2lt0i/image/upload/v1610923727/rrw9yj7b18vlrbis7hc8.jpg";

    const handleRegistrationInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterUser({ ...registerUser, [name]: value });
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        
        if (registerUser.password !== registerUser.confirm) {
            setInvalidPassword(true);
            setValidPassword(false);
            return;
        } else {
            setInvalidPassword(false);
            setValidPassword(true);
        };

        if (registerUser.firstName && registerUser.lastName && registerUser.email && registerUser.confirm) {
            API.register({
                firstName: registerUser.firstName,
                lastName: registerUser.lastName,
                email: registerUser.email,
                password: registerUser.confirm,
            }).then((res) => {
                console.log("in register.js after register, res", res);
                API.createProfile({ 
                    CookId: res.data.id,
                    cookImgURL: defaultProfileImg
                 });
                setRegisterUser({});
                history.push("/login");
            }).catch(err => console.log(err));
        }
    };

    return (
    <Container>
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
                                    onChange={handleRegistrationInputChange}
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
                                    onChange={handleRegistrationInputChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            autoComplete="email"
                            className="form-control text-center" 
                            type="email"
                            name="email"
                            id="email" 
                            placeholder="Email"
                            onChange={handleRegistrationInputChange}
                        />
                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input 
                            invalid={invalidPassword}
                            valid={validPassword}
                            autoComplete="current-password"
                            className="form-control text-center" 
                            type="password"
                            name="password"
                            id="password" 
                            placeholder="Password"
                            onChange={handleRegistrationInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirm">Confirm Password</Label>
                        <Input 
                            invalid={invalidPassword}
                            valid={validPassword}
                            autoComplete="confirm-password"
                            className="form-control text-center"
                            type="password"
                            name="confirm"
                            id="confirm"
                            placeholder="Confirm Password"
                            onChange={handleRegistrationInputChange}
                        />
                        <FormFeedback>Your passwords do not match</FormFeedback>
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
    )
};

export default Register;