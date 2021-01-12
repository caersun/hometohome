import React, { useState } from "react";
import { Button, Card, CardBody, Container, Input, Form, FormGroup, Label } from 'reactstrap';
import API from "../../utils/API";


function HomePage() {
    const [registerFullname, setRegisterFullname] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    const handleRegistration = () => {
        API.register(registerFullname, registerEmail, registerPassword)
            .then(res => console.log("registered at Home component", res))
            .catch(err => console.log(err));
    };
    const handleLogin = () => {
        API.login(loginEmail, loginPassword)
            .then(res => console.log("logged in at Home component", res))
            .catch(err => console.log(err));
        };

    return (
            <Container>
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <Card>
                            <CardBody>
                                <h1 className="text-center mb-3">Register</h1>

                                <Form>
                                    <FormGroup>
                                        <Label for="fullName">Full Name</Label>
                                        <Input type="text" 
                                        id="fullName" 
                                        name="fullName" 
                                        className="form-control text-center"
                                        placeholder="Full Name"
                                        onChange={e => setRegisterFullname(e.target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email Address</Label>
                                        <Input type="email" 
                                        id="email" 
                                        name="email" 
                                        className="form-control text-center"
                                        placeholder="Email address"
                                        onChange={e => setRegisterEmail(e.target.value)}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" 
                                        id="password" 
                                        name="password" 
                                        className="form-control text-center"
                                        placeholder="Create Password"
                                        onChange={e => setRegisterPassword(e.target.value)}
                                        ></Input>
                                    </FormGroup>
                                    {/* <FormGroup>
                                        <Label for="confirmPassword">Confirm Password</Label>
                                        <Input type="password" 
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="form-control text-center"
                                        placeholder="Confirm Password"
                                        value={this.state.confirmPassword}
                                        onChange={this.handleChange} 
                                        ></Input>
                                    </FormGroup> */}
                                    <Button type="submit" 
                                        className="btn btn-primary btn-block mt-5"
                                        onClick={handleRegistration}>
                                            Register
                                    </Button>
                                    {/* <DangerAlert></DangerAlert> */}
                                    
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6 m-auto">
                        <Card>
                            <CardBody>
                            <h1 className="text-center mb-3">
                                Sign In
                            </h1>
                            <Form>
                                <FormGroup>
                                    <Label for="loginEmail">Email</Label>
                                    <Input type="email"
                                    id="loginEmail"
                                    name="loginEmail"
                                    className="
                                    form-control text-center"
                                    placeholder="Enter Email"
                                    onChange={e => setLoginEmail(e.target.value)} 
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="loginPassword">Password</Label>
                                    <Input type="password"
                                    id="loginPassword"
                                    name="loginPassword"
                                    className="form-control text-center"
                                    placeholder="Enter Password"
                                    onChange={e => setLoginPassword(e.target.value)} 
                                    ></Input>
                                </FormGroup>
                                <Button type="submit"
                                    className="btn btn-primary btn-block mt-5"
                                    onClick={handleLogin}>
                                        Sign In
                                </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>
        );
};  
// };

export default HomePage;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
