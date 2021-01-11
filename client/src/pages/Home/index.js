import React, { useState} from "react";
// import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardBody, Container, Input, Form, FormGroup, Label } from 'reactstrap';
// import API from "../../utils/API";
import axios from "axios";


function HomePage() {
    const [registerFullname, setRegisterFullname] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    const handleRegistration = () => {
        axios({
            method: "post",
            data: {
                fullName: registerFullname, 
                email: registerEmail,
                password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost:3001/register"
        }).then(res => console.log("inside handleRegistration", res));
    };
    const handleLogin = () => {
        axios({
            method: "post",
            data: {
                email: loginEmail,
                password: loginPassword
            },
            withCredentials: true,
            url: "http://localhost:3001/login"
        }).then(res => console.log("inside handleLogin", res));
    };

    // state = {
    //     fullName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //     loginEmail: "",
    //     loginPassword: ""
    //     // show: false
    // };

    // TODO: never called and was throwing errors
    // alert() {
    //     const [visible, setVisible] = useState(true);
    // }

    // handleChange = (event) => {
    //     const target = event.target;
    //     const name = target.name;
    //     const value = target.value;

    //     this.setState({
    //         [name]: value
    //     });
    // };
    
    // handleRegistration = (event) => {
    //     event.preventDefault();
    //     console.log("registration button clicked");

    //     const confirmPassword = this.state.confirmPassword;
    //     const payload = {
    //         fullName: this.state.fullName,
    //         email: this.state.email,
    //         password: this.state.password
    //     };

    //     if (this.state.fullName === "" || this.state.email === "" || this.state.password === "" || this.state.confirmPassword === "") {
    //         alert("Please fill in all Registration Fields");
    //     } else if (payload.password === confirmPassword){
    //         //Post route to save new registered user
    //         console.log("matched");
    //         console.log(payload);

    //         API.registerUser(payload, this.props.history);
    //         // API.validateToken(function(){
    //         //     console.log('Token Validation processed');
        

    //     } else {
    //         //error on password not matching
    //         alert("Passwords Not matched");
    //     }    
    // };

    // handleLogin = (event) => {
    //     event.preventDefault();
    //     console.log("Submit button clicked");

    //     const payload = {
    //         email: this.state.loginEmail,
    //         password: this.state.loginPassword
    //     };

    //     console.log(payload);
        
    //     if (this.state.loginEmail === "" || this.state.loginPassword === "") {
    //         alert("Please fill in all fields");
    //     } else {
    //         // console.log("need to make api?");
    //         API.loginUser(payload, this.props.history);
    //         API.validateToken(() => {
    //             console.log('Token Validation processed');
    //         });
    //     };
    // };
            
    // render() {
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
