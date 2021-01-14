// import { PromiseProvider } from "mongoose";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
// import API from "../utils/API";
// import { useAuthContext } from "../utils/authContext";
import { login, useAuthDispatch } from "../utils/AuthContext";

function Login() {
    const [loginUser, setLoginUser] = useState({});
    const history = useHistory();
    const dispatch = useAuthDispatch();
    // const { loading, errorMessage } = useAuthState();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setLoginUser({ ...loginUser, [name]: value });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        login(dispatch, {
            email: loginUser.email,
            password: loginUser.password
        }).then(res => {
            console.log("login.js ~ res", res);
            history.push("/dash");
        }).catch(err => console.log(err));
    };

    return <Container>
        <Card>
            <CardBody>
                <h1 className="text-center mb-3">Login</h1>
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            className="form-control text-center"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
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
                            placeholder="Enter Password"
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <Button className="btn btn-primary btn-clock mt-5" type="submit" onClick={handleLogin}>Sign in</Button>
                </Form>
            </CardBody>
        </Card>
    </Container>
}

export default Login;