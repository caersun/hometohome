import { Container, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useAuthState, useAuthDispatch, logout } from "../utils/AuthContext";
import Scroll from "./Scroll";

const Dash = () => {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();
    const history = useHistory();
    console.log("in dash ~ currentUser", userDetails.user);

    const handleLogout = () => {
        logout(dispatch);
        history.push("/");
    }

    return <Container>
        <div>This is where your dashboard will go.</div>
        <p>Welcome {userDetails.user.fullName}</p>
        <Button onClick={handleLogout}>Logout</Button>
        <Scroll />
    </Container>
};

export default Dash;