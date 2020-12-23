import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, Container, Input, Form, FormGroup, Label } from 'reactstrap';
// ***still need to build API folder ***import API from '../../../utils/API'
import DangerAlert from '../../Alert'

class HomePage extends React.Component {
    state = {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        loginEmail: "",
        loginPassword: ""
        // show: false
    };

    alert() {
        const [visible, setVisible] = useState(true);
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };

    handleRegistration = (event) => {
        event.preventDefault();
        console.log("registration button clicked");

        const confirmPassword = this.state.confirmPassword;
        const payload = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password
        };

        if (this.state.fullName === "" || this.state.email === "" || this.state.password === "" || this.state.confirmPassword === "") {

            alert("Please fill in all Registration Fields")
        } else if (payload.password === confirmPassword) {
            //Post route to save new registered user
            console.log("matched");
            console.log(payload);

            API.registerUser(payload, this.props.history);
            API.validateToken(function () {
                console.log('Token Validation processed');
            });

        } else {
            //error on password not matching
            alert("Passwords Not matched");
        }
    };

    handleLogin = (event) => {
        event.preventDefault();
        console.log("Submit button clicked");

        const payload = {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }

        console.log(payload);

        if (this.state.loginEmail === "" || this.state.loginPassword === "") {
            alert("Please fill in all fields");
        } else {
            API.loginUser(payload, this.props.history);
            API.validateToken(function () {
                console.log('Token Validation processed');
            });

        }
    };


    render() {
        return (
            <Container>
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <Card>
                            <CardBody>
                                <h1 className="text-center mb-3">
                                    <FontAwesomeIcon icon="id-card" /> Register
                                </h1>

                                <Form>
                                    <FormGroup>
                                        <Label for="fullName">Full Name</Label>
                                        <Input type="text"
                                            id="fullName"
                                            name="fullName"
                                            className="form-control text-center"
                                            placeholder="Full Name"
                                            value={this.state.fullName}
                                            onChange={this.handleChange}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email Address</Label>
                                        <Input type="email"
                                            id="email"
                                            name="email"
                                            className="form-control text-center"
                                            placeholder="Email address"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password"
                                            id="password"
                                            name="password"
                                            className="form-control text-center"
                                            placeholder="Create Password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="confirmPassword">Confirm Password</Label>
                                        <Input type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className="form-control text-center"
                                            placeholder="Confirm Password"
                                            value={this.state.confirmPassword}
                                            onChange={this.handleChange}
                                        ></Input>
                                    </FormGroup>
                                    <Button type="submit"
                                        className="btn btn-primary btn-block mt-5"
                                        onClick={this.handleRegistration}>
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
                                    <FontAwesomeIcon icon="user" /> Sign In
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
                                            value={this.state.loginEmail}
                                            onChange={this.handleChange}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="loginPassword">Password</Label>
                                        <Input type="password"
                                            id="loginPassword"
                                            name="loginPassword"
                                            className="form-control text-center"
                                            placeholder="Enter Password"
                                            value={this.state.loginPassword}
                                            onChange={this.handleChange}
                                        ></Input>
                                    </FormGroup>
                                    <Button type="submit"
                                        className="btn btn-primary btn-block mt-5"
                                        onClick={this.handleLogin}>
                                        Sign In
                                </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }
};

export default HomePage;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
