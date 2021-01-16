import { Jumbotron } from "reactstrap";
import Cooks from "../components/Kitchen/Cooks";
// import { useAuthState } from "../utils/AuthContext";

const Home = () => {
    // const userDetails = useAuthState();
    // console.log("in Home ~ userDetails.user:", userDetails.user);

    return (<div>
        <Jumbotron className="text-center">
            <h1 className="display-3">hometohome</h1>
            <p className="lead">From your neighbors to you, enjoy delicious homecooked meals.</p>
        </Jumbotron>
        <Cooks />
    </div>)
};

export default Home;