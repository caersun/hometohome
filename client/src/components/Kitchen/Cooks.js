import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Cook from "./Cook";
import API from "../../utils/API";

const Cooks = () => {
    const [allCooks, setAllCooks] = useState([]);

    useEffect(() => {
        // unmounted component? could memory leak. might have to cancel all subscriptions and async tasks
        API.getCooks()
            .then(res => {
                // console.log("all homecooks", res.data);
                setAllCooks(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                {!allCooks
                ? <Col className="text-center"><h1>There are currently no Homecooks.</h1></Col>
                : (allCooks.map(cook => (
                    <Col xs="12" s="6" md="4" key={cook.id}>
                        <div>should see this for every cook</div>
                        {/* <Cook cook={cook} /> */}
                    </Col>
                )))
            }  
            </Row>
        </Container>
    )
};

export default Cooks;
