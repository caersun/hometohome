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

    <div> This is where your dashboard will go. </div>
        <p>Welcome Back!  Your Home Cooked Meal Is Waiting! {userDetails.user}</p>
        <Scroll />
    </Container>
};

export default Dash;