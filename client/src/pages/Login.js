import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

const Login = props => {
    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="signEmail">email</Label>
                    <Input type="email" name="email" id="signinEmail" />
                </FormGroup>
                <FormGroup>
                    <Label for="signinPass">password</Label>
                    <Input type="password" name="password" id="signinPass" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </Container>
    );
};

export default Login;