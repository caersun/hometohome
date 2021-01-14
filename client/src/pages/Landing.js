import { Container, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

// TODO: Need styling for landing. Think https://doordash.com or https://pizzahut.com

const Landing = () => {
    const history = useHistory();
    return <Container>
        <h1>Welcome To HomeToHome!</h1>;
        <h2>Bringing Your Neighbhors' Home Cooking To Your Door And Bringing Your Cooking To Theirs!</h2>
        <p>Please Login to your account or click Sign Up to register a new user account!</p>>
        <Button onClick={() => { history.push("/login") }}>Login</Button>
        <Button onClick={() => { history.push("/register") }}>Sign Up</Button>
        
    </Container>
}
export default Landing;