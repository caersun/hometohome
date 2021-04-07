import { Container, Row, Col, Button } from "reactstrap";

const CookContainer = ({ cook }) => {

    return (
        <Container>
            <Row>
                <Col xs={{ size: 3, order: 1 }}>
                    <img src={cook.Profile.cookImgURL} alt={cook.firstName} style={{ maxWidth: `64px`, borderRadius: `50%`}} />
                </Col>
                <Col xs={{ size: 6, order: 2}}>
                    <div>
                        <h5>{cook.firstName}'s Kitchen</h5>
                        <h6>{cook.Profile.specialties}</h6>
                    </div>
                </Col>
                <Col xs={{ size: 3, order: 3 }}>
                    <Button>See Kitchen</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CookContainer();