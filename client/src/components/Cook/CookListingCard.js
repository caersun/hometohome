import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, Form, FormGroup } from "reactstrap";
import API from "../../utils/API";

const CookListingCard = ({ listing }) => {
    const [imageModal, setImageModal] = useState(false);
    const imageToggle = () => setImageModal(!imageModal);
    const [uploadedImage, setUploadedImage] = useState();
    const [currListingImage, setCurrListingImage] = useState(listing.imgURL);

    const handleImageUpload = () => {
        const formData = new FormData();
        formData.append("file", uploadedImage[0]);
        formData.append("upload_preset", "dalcz0np");
        API.uploadImage(formData)
            .then(res => {
                API.updateListing(listing.id, { imgURL: res.data.secure_url })
                .then(() => setCurrListingImage(res.data.secure_url))
                .catch(err => console.log(err));
        }).catch(err => console.log(err));
        imageToggle();
    };

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={currListingImage} alt={listing.food} />
                <Button onClick={imageToggle}>Edit Listing Image</Button>
                <CardBody>
                    <CardTitle tag="h5">
                        <span className="float-left">{listing.food}</span>
                        <span className="float-right">${listing.price}</span>
                    </CardTitle>
                    <br />
                    <CardText>{listing.description}</CardText>
                    {/* <Button>Edit</Button> */}
                </CardBody>
            </Card>
            <Modal isOpen={imageModal} toggle={imageToggle}>
                <ModalHeader toggle={imageToggle}>Update Listing Image</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <input 
                                className="form-control text-center"
                                type="file"
                                name="listingImg"
                                id="listingImg"
                                onChange={(e => setUploadedImage(e.target.files))}
                            />
                        </FormGroup>
                        <Button className="btn btn-primary btn-block mt-5"
                            // type="submit"
                            onClick={handleImageUpload}>
                                Update Listing Image
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default CookListingCard;