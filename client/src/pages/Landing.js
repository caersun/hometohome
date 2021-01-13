import { Container, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

// TODO: Need styling for landing. Think https://doordash.com or https://pizzahut.com

const Landing = () => {
    const history = useHistory();
    return <Container>
        <h1>Landing Page!</h1>
        <p>Need fullpage styling so buttons show up in vcenter and hcenter</p>
        <Button onClick={() => { history.push("/register") }}>Sign Up</Button>
        <Button onClick={() => { history.push("/login") }}>Login</Button>
    </Container>
}

export default Landing;