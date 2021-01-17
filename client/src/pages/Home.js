import { Jumbotron } from "reactstrap";
import Cooks from "../components/Kitchen/Cooks";

const Home = () => {
    return (
    <div>
        <Jumbotron className="text-center">
            <h1 className="display-3">hometohome</h1>
            <p className="lead">From your neighbors to you, enjoy delicious homecooked meals.</p>
        </Jumbotron>
        <Cooks />
    </div>
    );
};

export default Home;