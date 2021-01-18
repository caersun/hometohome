import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import ProductCard from "./ProductCard";


const Cook = ({ cook }) => { 
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={cook.Profile.cookImgURL} alt={cook.firstName} />
                <CardBody>
                    <CardTitle tag="h5">{cook.firstName} {cook.lastName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{cook.Profile.specialties}</CardSubtitle>
                    <CardText>{cook.Profile.description}</CardText>
                    <Button onClick={toggle}>Shop Homecook</Button> 
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader className="text-center" toggle={toggle}>{cook.firstName}'s Kitchen</ModalHeader>
                <ModalBody>
                        {cook.Listings.map(product => (
                            <ProductCard key={product.id} productData={product} />
                        ))}
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Cook;