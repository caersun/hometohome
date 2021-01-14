import { Container } from "reactstrap";
import { useAuthState } from "../utils/AuthContext";
import Scroll from "./Scroll";

const Dash = () => {
    const userDetails = useAuthState();
    console.log("in dash", userDetails);
    console.log("user", userDetails.user);
    // const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    // console.log("user in localStorage", storedUser);
    return <Container>
        <div>This is where your dashboard will go.</div>
        <p>Welcome {userDetails.user.fullName}</p>
        <Scroll />
    </Container>
};

export default Dash;