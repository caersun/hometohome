import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Cook from "./Cook";
import API from "../utils/API";

const Cooks = () => {
    const [allCooks, setAllCooks] = useState([]);

    useEffect(() => {
        API.getCooks()
            .then(res => {
                console.log(res.data);
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
                        <Cook 
                           firstName={cook.firstName}
                           lastName={cook.lastName}
                           listings={cook.Listings}
                        />
                    </Col>
                )))
            }  
            </Row>
        </Container>
    )
};

export default Cooks;
