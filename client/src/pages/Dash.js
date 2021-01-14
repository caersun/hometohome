import { Container } from "reactstrap";
import { useAuthState } from "../utils/AuthContext";
import Scroll from "./Scroll";

const Dash = () => {
    const userDetails = useAuthState();
    console.log("in dash ~ currentUser", userDetails.user);

    return <Container>
        <div>This is where your dashboard will go.</div>
        <p>Welcome {userDetails.user.fullName}</p>
        <Scroll />
    </Container>
};

export default Dash;