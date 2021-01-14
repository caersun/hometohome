import { Jumbotron, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useAuthState } from "../utils/AuthContext";

// TODO: Need styling for landing. Think https://doordash.com or https://pizzahut.com

const Landing = () => {
    const history = useHistory();
    const userDetails = useAuthState();
    console.log("logged in rn?", userDetails);
    return <div>
        <Jumbotron>
            <h1 className="display-3">Home to Home</h1>
            <p className="lead">From neighbors to you, enjoy list the homecooked meals of those around you. Or sell your own homecooking!</p>
            <hr className="my-2" />
            <p>More text!</p>
            <p className="lead">
                <Button onClick={() => { history.push("/register") }}>Sign Up</Button>
                <Button onClick={() => { history.push("/login") }}>Login</Button>
            </p>
        </Jumbotron>
    </div>
}

export default Landing;