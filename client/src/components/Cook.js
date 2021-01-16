import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Container, Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import ListingCard from "./ListingCard";

const Cook = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Card>
                {/* <CardImg top width="100%" src={props.firstName} alt={props.firstName} /> */}
                <CardBody>
                    <CardTitle tag="h5">{props.firstName} {props.lastName}</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{props.specialty}</CardSubtitle>
                    <CardText>{props.description}</CardText> */}
                    <Button onClick={toggle}>Shop Homecook</Button> 
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader className="text-center" toggle={toggle}>{props.firstName}'s Kitchen</ModalHeader>
                <ModalBody>
                        {!props.listings
                        ? <div>This homecook has no current listings.</div>
                        : (props.listings.map(listing => (
                            <Container fluid key={listing.id}>
                                <ListingCard 
                                    previewImage={listing.previewImage}
                                    food={listing.food}
                                    price={listing.price}
                                    description={listing.description}
                                />
                            </Container>
                        )))}
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Cook;