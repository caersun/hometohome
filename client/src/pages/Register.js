import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap"
import API from "../utils/API";

// TODO: Need logic to compare passwords within form
// TODO: Show frontend error if a user attempts to signup twice

function Register() {
    const [registerUser, setRegisterUser] = useState({});
    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterUser({ ...registerUser, [name]: value });
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        if (registerUser.fullName && registerUser.email && registerUser.password) {
            API.register({
                fullName: registerUser.fullName,
                email: registerUser.email,
                password: registerUser.password
            }).then(() => {
                setRegisterUser({});
                history.push("/login");
            }).catch(err => console.log(err));
        }
    };

    return <Container>
        <Card>
            <CardBody>
                <h1 className="text-center mb-3">Register</h1>
                <Form>
                    <FormGroup>
                        <Label for="fullName">Full Name</Label>
                        <Input 
                            className="form-control text-center"
                            type="text"
                            name="fullName"
                            id="fullName" 
                            placeholder="Full Name"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
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