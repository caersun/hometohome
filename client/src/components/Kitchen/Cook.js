import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Card, CardTitle, CardText, Button } from "reactstrap";
import ProductCard from "./ProductCard";


const Cook = ({ cook }) => { 
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        // <div>
        //     {(console.log("in Cook.js ~ incoming cook object from Cooks.js", cook))}
        // </div>
        <div>
            <Card body>
                <img src={cook.Profile.cookImgURL} alt={cook.firstName} style={{ maxWidth: `64px`, borderRadius: `50%`, display: `block`, marginLeft: `auto`, marginRight: `auto` }} />
                <CardTitle tag="h5">{cook.firstName}'s Kitchen</CardTitle>
                <CardText>{cook.Profile.specialties}</CardText>
                <Button onClick={toggle}>Shop Homecook</Button>                       
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